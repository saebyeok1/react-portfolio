import profileimg from '../profileimg.jpg';
import styled from 'styled-components';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import '../common.css';

export default function Profile() {
    return (
        <StyledHome>
            <div className="row rest">
                <div className="top-profile main-bg">
                    <div className="profile-wrap">
                        {/* 프로필 이미지 */}
                        <div class="info-img">
                            <img
                                src={profileimg}
                                alt="profile img"
                                className="info-imgg"
                            ></img>
                        </div>
                        {/* 프로필 텍스트 */}
                        <div class="info-text">
                            <h3>bbyo</h3>
                            {/* <p>FA</p> */}
                        </div>
                        {/* 프로필 SNS */}
                        <div class="social">
                            <a href="https://github.com/saebyeok1">
                                <FaGithub className="faImg" />
                            </a>
                            <a href="#">
                                <FaGoogle className="faImg" />
                            </a>
                            <a></a>
                        </div>
                    </div>
                </div>
                <div className="bot-profile main-bg">
                    {/* 설명 텍스트 */}
                    <h1>
                        Hello im <span style={{ color: '#55e6a5' }}>abc</span>.
                        Aspiring Back-end dev. Consequat ullamco laboris
                        occaecat eiusmod cillum exercitation.
                    </h1>
                </div>
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.section`
    /* height: 100vh; */

    /* .rest {
        padding: 0;
        margin: 0;
    } */
    .info-imgg {
        width: 150px;
        height: 150px;
        @media screen and (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }

    .top-profile {
        border-radius: 100px 0 0 0;
        margin-bottom: 0;
        padding: 80px 40px;
        padding-bottom: 20px;
        @media screen and (max-width: 768px) {
            border-radius: 15px 15px 0 0;
        }
    }

    .profile-wrap {
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        padding: 40px 15px;
        text-align: center;
    }

    .info-text {
        font-size: 18px;
    }
    .social {
        display: flex;
        justify-content: center;
    }

    .social a {
        width: 45px;
        height: 45px;
        line-height: 45px;
        /* text-align: center; */
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        margin: 0 2px;
        @media screen and (max-width: 768px) {
            width: 35px;
            height: 35px;
        }
    }
    .social a:hover {
        background-color: white;
    }

    .faImg {
        margin: 8px;
        width: 30px;
        height: 30px;
        color: black;
        @media screen and (max-width: 768px) {
            width: 20px;
            height: 20px;
        }
    }

    .bot-profile {
        padding: 80px 15px;
        border-radius: 0 0 100px 0;
        @media screen and (max-width: 768px) {
            border-radius: 0 0 15px 15px;
            padding: 30px 15px;
        }
    }
    h1 {
        font-size: 40px;
        margin: 0;
        @media screen and (max-width: 768px) {
            font-size: 25px;
        }
    }
`;