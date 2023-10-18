import styled from 'styled-components';
import logo from '../1.jpg';
import React from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header({ toggle, setToggle }) {
    const onClickToggleHandler = () => {
        setToggle(!toggle);
    };

    return (
        <StyledHeader>
            <StyledNavLogo>
                <a href="/">
                    <img src={logo}></img>
                </a>
            </StyledNavLogo>

            <StyledNavMMenu>
                <a href="#project">
                    <li>Project</li>
                </a>
                <a href="#skill">
                    <li>Skill</li>
                </a>
            </StyledNavMMenu>

            {toggle ? (
                <StyledMenuNone>
                    <a href="#project">
                        <li>Project</li>
                    </a>
                    <a href="#skill">
                        <li>Skill</li>
                    </a>
                </StyledMenuNone>
            ) : null}

            <StyledNavToggleBtn onClick={onClickToggleHandler}>
                <FaBars />
            </StyledNavToggleBtn>
        </StyledHeader>
    );
}

const StyledHeader = styled.nav`
    a {
        text-decoration: none;
    }
    display: flex;
    align-items: center;
    max-width: 1360px;
    margin: auto;
    /* border: 1px solid black; */
    width: 80%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 0px;
        width: 100%;
    }
`;

const StyledNavLogo = styled.div`
    img {
        width: 150px;
        height: 100px;
    }
`;

const StyledNavMMenu = styled.div`
    display: flex;
    list-style: none;
    li {
        color: black;
        padding: 8px 12px;
    }
    li:hover {
        color: #55e6a5;
        background-color: #e6eaee;
        border-radius: black;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const StyledMenuNone = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        list-style: none;
        align-items: center;
        width: 80%;
        padding-bottom: 10px;
        gap: 5px;

        li {
            width: 100%;
            color: black;
            text-align: center;
            padding: 8px 12px;
            /* border: 1px solid black; */
        }
        li:hover {
            color: #55e6a5;
            background-color: #e6eaee;
            border-radius: 4px;
        }
    }
`;

const StyledNavToggleBtn = styled.span`
    display: none;
    position: absolute;
    top: 40px;
    right: 32px;
    font-size: 24px;
    color: gray;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

// export default function Header() {
//     const [isToggleOpen, setisToggleOpen] = useState(false);

//     const handleToggleOpen = () => {
//         setisToggleOpen(!isToggleOpen);
//     };

//     return (
//         <>
//             <StyledHeader>
//                 <div className="nav_logo">
//                     {/* <Link to={'/'} className="nav-logo-link"> */}
//                     Logo
//                     {/* </Link> */}
//                 </div>
//                 <NavMenu isToggleOpen={isToggleOpen}></NavMenu>
//                 <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
//             </StyledHeader>
//         </>
//     );
// }

// const StyledHeader = styled.header`
//     @media screen and (max-width: 768px) {
//         flex-direction: column;
//         align-items: flex-start;
//         .menuToggleBtn {
//             display: block;
//         }
//     }
// `;

// const NavMenu = styled.ul`
//     @media screen and (max-width: 768px) {
//         display: ${(props) => (props.isToggleOpen ? 'block' : 'none')};
//         flex-direction: column;
//         align-items: center;
//         width: 100%;
//     }
// `;

// export default function Header() {
//     return (
//         <>
//             <ul>
//                 <li>
//                     <a href="#">home</a>
//                 </li>
//                 <li>
//                     <a href="#">Profile</a>
//                 </li>
//                 <li>
//                     <a href="#">Projects</a>
//                 </li>
//             </ul>
//         </>
//     );
// }
