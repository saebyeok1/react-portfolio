import image2 from '../2.jpg';
import htmlimg from '../image/front-end/html.png';
import cssimg from '../image/front-end/css.png';
import jsimg from '../image/front-end/javascript.png';
import jqimg from '../image/front-end/jquery.png';

import javaimg from '../image/back-end/java.png';
import nodejs from '../image/back-end/nodejs.png';
import '../common.css';
import styled from 'styled-components';

const frontEndImg = [
    {
        image: htmlimg,
    },
    {
        image: cssimg,
    },
    {
        image: jsimg,
    },
    {
        image: jqimg,
    },
];

const frontEnd = [
    {
        title: 'Front-End',
    },
];

const backEndImg = [
    {
        image: javaimg,
    },
    { image: nodejs },
];
const backEnd = [
    {
        title: 'Back-End',
    },
];

export default function Skills() {
    return (
        <>
            <StyledSkill>
                <div className="skill__inner main-bg rest row" id="skill">
                    <h2 className="skill__title">
                        Adipisicing eiusmod in ex deserunt do dolor magna dolor
                        proident deserunt.
                    </h2>

                    <div className="skill__desc">
                        {frontEnd.map((skill, key) => (
                            <div key={key} className="skillElem">
                                {/* <span>{key + 1}</span> */}
                                <h3>{skill.title}</h3>
                                {frontEndImg.map((img, key) => (
                                    <img src={img.image}></img>
                                ))}
                                {/* <img src={skill.image}></img> */}
                                <div>{skill.desc}</div>
                            </div>
                        ))}
                        {backEnd.map((skill, key) => (
                            <div key={key} className="skillElem">
                                {/* <span>{key + 1}</span> */}
                                <h3>{skill.title}</h3>
                                {backEndImg.map((img, key) => (
                                    <img src={img.image}></img>
                                ))}
                                {/* <img src={skill.image}></img> */}
                                <div>{skill.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </StyledSkill>
        </>
    );
}

const StyledSkill = styled.section`
    img {
        width: 80px;
        padding: 0 0 10px 10px;
    }
    .row {
        flex-flow: column;
    }

    .skill__title {
        margin-bottom: 0;
        padding: 30px 40px;
        padding-bottom: 20px;
    }

    .skill__inner {
        border-radius: 40px;
    }
    .skillElem {
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px;
        margin: 20px;
    }
    .skill__desc {
        border-radius: 40px;
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
`;
