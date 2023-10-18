import styled from 'styled-components';

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <div className="footer">
                    <p>© 2023 Boyo is velit dolore occaecat.</p>
                </div>
            </StyledFooter>
        </>
    );
}

const StyledFooter = styled.section`
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: #f8f9fa; */
        /* box-shadow: 0px -2px 15px rgba(0, 0, 0, 0.1); */
        width: 100%;
        margin-bottom: 0;
    }
`;
