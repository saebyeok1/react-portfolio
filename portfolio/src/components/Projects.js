import image1 from '../1.jpg';
import image2 from '../2.jpg';
import styled from 'styled-components';
import profile from '../profileimg.jpg';
import { useNavigate } from 'react-router-dom';
import '../common.css';

const projectList = [
    {
        id: 1,
        name: 'project1',
        image: image2,
        href: 'http://www.naver.com',
    },
    {
        id: 2,
        name: 'project2',
        image: image1,
        href: 'http://www.google.com',
    },
];

function ProjectsList({ name, image }) {
    const navigate = useNavigate();

    const navigateToProjectDetail = () => {
        navigate('/project');
    };

    return (
        <div className="projectList main-bg">
            <div className="item" onClick={navigateToProjectDetail}>
                <div className="image">
                    {/* <a href={href}> */}
                    <img src={image}></img>
                    {/* </a> */}
                </div>
                <div>{name}</div>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <StyledHome>
            <div className="rest row" id="project">
                <div className="project-text main-bg">
                    <h3>
                        Look at my work &
                        <br />
                        go lorem dum dmual duaiqv dlsa
                    </h3>
                </div>
                <div className="projectListContainer">
                    {projectList.map((item) => (
                        <ProjectsList
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            href={item.href}
                            // picture={item.image}
                        />
                    ))}
                </div>
                <div className="project-bot main-bg">sfd</div>
            </div>
        </StyledHome>
    );
}

const StyledHome = styled.section`
    /* border-radius: 20px;
    background-color: #e6eaee; */
    /* height: 100vh; */

    .row {
        flex-flow: column;
    }

    /* padding-left: 15px !important;
    padding-right: 15px !important; */
    /* .rest {
        padding: 0;
        margin: 0;
        width: 100%;
        text-align: center;
        margin: 0 auto;
    } */

    .project-text {
        border-radius: 15px 15px 0 0;
        margin-bottom: 0;
        padding: 30px 40px;
        padding-bottom: 20px;
    }
    .project-bot {
        padding: 80px 15px;
        border-radius: 0 0 15px 15px;
    }

    .projectList {
        /* border-radius: 15px 15px 0 0; */
        margin-bottom: 0;
        padding: 80px 40px;
        padding-bottom: 20px;
        border: 1px solid black;
    }

    .projectListContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #e6eaee;

        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
            margin: 0 auto;
            /* position: relative; */
        }
    }

    /* .project-text,
    .project-bot {
        width: 50%;
        @media screen and (max-width: 768px) {
            width: 100%;
            text-align: center;
            margin: 0 auto;
        }
    } */

    .item {
        /* width: calc(50% - 20px); */
        /* 20px는 간격을 의미합니다. */
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            /* position: relative; */
        }
    }
    /* 미디어쿼리 */
    h3 {
        font-size: 30px;
        @media screen and (max-width: 768px) {
            font-size: 25px;
        }
    }
    img {
        position: relative;
        height: 100%;
        width: 100%;
        object-position: center center;

        border-radius: 10px;
        @media screen and (max-width: 768px) {
            /* object-position: center center; */
        }
    }
    a {
        text-decoration: none;
    }
`;
