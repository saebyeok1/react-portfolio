import { FaLongArrowAltUp, FaRegArrowAltCircleUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ScrollUp() {
    const [showButton, setShowButton] = useState(true);

    // const showButtonClick = () => {
    //     const { scrollY } = window;
    //     scrollY > 200 ? setShowButton(true) : setShowButton(false);
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', showButtonClick);

    //     return () => {
    //         window.removeEventListener('scroll', showButtonClick);
    //     };
    // }, []);

    const ScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const ShowButtonClick = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };
        window.addEventListener('scroll', ShowButtonClick);
        return () => {
            window.removeEventListener('scroll', ShowButtonClick);
        };
    }, []);

    // return showButton ? (
    //     <div>
    //         <button onClick={ScrollToTop} type="button">
    //             Top
    //         </button>
    //     </div>
    // ) : null;
    return (
        <>
            <StyledButton>
                {showButton && (
                    <div className="scrollUp">
                        {/* <button onClick={ScrollToTop} type="button">
                            Top
                        </button> */}
                        <FaRegArrowAltCircleUp
                            className="scrollBtn"
                            onClick={ScrollToTop}
                            size="50"
                        />
                    </div>
                )}
            </StyledButton>
        </>
    );
}

const StyledButton = styled.section`
    .scrollUp {
        position: fixed;
        bottom: 20px;
        right: 20px;
    }
    .scrollBtn {
        color: rgba(0, 0, 0, 0.3);
        /* color: black; */
    }
`;
