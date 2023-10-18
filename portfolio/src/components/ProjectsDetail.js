import styled from 'styled-components';
import profile from '../profileimg.jpg';

const projectDetails = [
    {
        id: 1,
        num: '01',
        name: '프로젝트1',
        code: 'http://www.naver.com',
        desc: 'Dolore aliqua pariatur veniam enim quis sunt tempor aliqua commodo deserunt amet.',
        period: '2023-00-00 ~ 2023-00-00',
        image: profile,
    },
    {
        id: 2,
        num: '02',
        name: '프로젝트2',
        code: 'http://www.naver.com',
        desc: 'Labore tempor duis aliqua eu aliqua excepteur non ullamco ipsum culpa irure.',
        period: '2023-00-00 ~ 2023-00-00',
        image: profile,
    },
];

function ProjectDeatilList({ name, desc, period, code, image }) {
    return (
        <>
            <div className="projectList">
                <div className="item rest main-bg">
                    <div>{name}</div>
                    <img src={image}></img>
                    <div>프로젝트 설명: {desc}</div>
                    <span>소스코드 링크:</span> <a href={code}>{code}</a>
                    <div>프로젝트 기간: {period}</div>
                </div>
            </div>
        </>
    );
}
export default function ProjectsDetail() {
    return (
        <>
            <StyledDetail>
                <div>
                    {projectDetails.map((item) => (
                        <ProjectDeatilList
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            period={item.period}
                            code={item.code}
                            image={item.image}
                        />
                    ))}
                </div>
            </StyledDetail>
        </>
    );
}

const StyledDetail = styled.section`
    display: block;
    .item {
        border: 1px solid black;
        margin-bottom: 30px;
        padding: 25px 0 25px 0;
        border-radius: 20px;
    }
    div {
        padding: 10px;
    }
`;
