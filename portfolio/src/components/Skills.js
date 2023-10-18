import image2 from '../2.jpg';
import htmlimg from '../image/front-end/html.png';
import cssimg from '../image/front-end/css.png';
import jsimg from '../image/front-end/javascript.png';
import jqimg from '../image/front-end/jquery.png';
import reactimg from '../image/front-end/react.png';
import tsimg from '../image/front-end/typescript.png';

import javaimg from '../image/back-end/java.png';
import nodejs from '../image/back-end/nodejs.png';

import dbimg from '../image/data-base/mysql.png';
import intelliJimg from '../image/development-tool/intelliJ.png';
import vsimg from '../image/development-tool/VisualStudio.png';
import vscodeimg from '../image/development-tool/vscode.png';
import eclipseimg from '../image/development-tool/eclipse.png';
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
    {
        image: reactimg,
    },
    {
        image: tsimg,
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

const databaseImg = [
    {
        image: dbimg,
    },
];

const database = [
    {
        title: 'DataBase',
    },
];

const devtoolImg = [
    {
        image: intelliJimg,
    },
    {
        image: vsimg,
        vscodeimg,
    },
    {
        image: vscodeimg,
        eclipseimg,
    },
    {
        image: eclipseimg,
    },
];

const devTool = [
    {
        title: 'Development Tool',
    },
];
export default function Skills() {
    return (
        <>
            <StyledSkill>
                <div className="skill__inner main-bg rest row" id="skill">
                    <h2 className="skill__title">Skills</h2>

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
                        {database.map((skill, key) => (
                            <div key={key} className="skillElem">
                                {/* <span>{key + 1}</span> */}
                                <h3>{skill.title}</h3>
                                {databaseImg.map((img, key) => (
                                    <img src={img.image}></img>
                                ))}
                                {/* <img src={skill.image}></img> */}
                                <div>{skill.desc}</div>
                            </div>
                        ))}
                        {devTool.map((skill, key) => (
                            <div key={key} className="skillElem">
                                {/* <span>{key + 1}</span> */}
                                <h3>{skill.title}</h3>
                                {devtoolImg.map((img, key) => (
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
        width: 70px;
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
        border-radius: 10px;
        padding-bottom: 30px;
    }
    .skillElem {
        text-align: center;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 10px;
        background-color: #ffffff;
        @media screen and (max-width: 768px) {
        }
        /* border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 15px;
        margin: 20px; */
    }
    .skill__desc {
        /* border-radius: 40px;
        display: grid;
        grid-gap: 20px;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: #e6eaee; */
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        padding: 10px;
        max-width: 1200px;
        margin: auto;

        @media screen and (max-width: 1000px) {
            display: inline;
        }
        @media screen and (max-width: 768px) {
            display: inline;
            /* width: 100%;
            text-align: center;
            margin: 0 auto; */
            /* position: relative; */
        }
    }
`;
