import image1 from '../1.jpg';
import image2 from '../2.jpg';
import styled from 'styled-components';
import project1img from '../image/projects/wallaby.PNG';
import project2img from '../image/projects/todayAlcohol.PNG';

import { useNavigate } from 'react-router-dom';
import '../common.css';

const projectList = [
    {
        id: 1,
        name: 'Wallaby',
        image: project1img,
    },
    {
        id: 2,
        name: 'TodaysAlcohol',
        image: project2img,
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
                <div className="imageInfo">
                    <h1>{name}</h1>
                </div>
            </div>
        </div>
    );
}

export default function Project() {
    return (
        <StyledHome>
            <div className="rest row" id="project">
                <div className="project-text main-bg">
                    <h3>Projects</h3>
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
                {/* <div className="project-bot main-bg"></div> */}
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
        margin: 10px;
        /* padding: 80px 40px; */
        /* padding-bottom: 20px; */
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: white;
    }

    .projectListContainer {
        /* display: flex;
        flex-wrap: wrap;
        justify-content: space-around; */
        background-color: #e6eaee;
        padding: 40px 80px;
        display: flex;
        border-radius: 0 0 10px 10px;
        flex-wrap: wrap;
        justify-content: center;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            text-align: center;
            margin: 0 auto;
            /* position: relative; */
        }
    }
    .image {
        width: 240px;
        height: 320px;
    }

    .item {
        /* width: calc(50% - 20px); */
        /* 20px는 간격을 의미합니다. */
        margin-bottom: 20px;

        @media screen and (max-width: 768px) {
            /* position: relative; */
        }
    }
    .projectList:hover {
        background-color: white;
        color: #55e6a5;
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
