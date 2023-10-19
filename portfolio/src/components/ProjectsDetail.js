import styled from 'styled-components';
import profile from '../image/profileimg.jpg';
import project1img from '../image/projects/wallaby.PNG';
import project2img from '../image/projects/todayAlcohol.PNG';

const project1 = [
    {
        id: 1,
        num: '01',
        name: 'Wallaby',
        link: 'https://splendorous-mermaid-6ff969.netlify.app/',
        code: 'https://github.com/fun1ty/wallaby',
        frontEnd: 'HTML, CSS, JavaScript ',
        content: '회원가입, 로그인, 게시물 작성, 댓글 작성',
        period: '2023-07-18 ~ 2023-07-26 (Team Project)',
        image: project1img,
    },
];
const project2 = [
    {
        id: 2,
        num: '02',
        name: 'TodaysAlcohol',
        code: 'https://github.com/learnttuce0321/todaysAlcohol',
        frontEnd: 'HTML, CSS, JavaScript AXIOS TOAST UI',
        backEnd: 'Nodejs Express',
        database: 'My SQL',
        content:
            '회원가입, 로그인, 게시물 작성, 댓글 작성, 칵테일 검색, 칵테일 좋아요 누르기, 좋아요 조회, 작성 게시물 조회, 게시물 수정 및 삭제, 설문조사',
        period: '2023-08-31 ~ 2023-09-14 (Team Project)',
        image: project2img,
    },
];

export default function ProjectDeatilList() {
    return (
        <>
            <StyledDetail>
                <div className="projectList">
                    <div className="item rest" id="1">
                        {project1.map((detail, key) => (
                            <div key={key} className="projectListDetail">
                                <h1>{detail.name}</h1>
                                <div>{detail.period}</div>
                                <div className="detailInfo">
                                    <div className="detailImg">
                                        <img
                                            src={detail.image}
                                            className="project1img"
                                        ></img>
                                    </div>
                                    <div className="detailDesc">
                                        {/* <div>{detail.desc}</div> */}
                                        <b>
                                            <span className="textColor">
                                                아무 생각없이 버리는 쓰레기는
                                                어쩌면 또다른 정보가 될 수 있지
                                                않을까?
                                            </span>
                                            라는 의문에서 시작된 웹
                                            사이트입니다.
                                        </b>
                                        <br />
                                        쓰레기 공유 커뮤니티로 끝까지 사용했다는
                                        뿌듯함 혹은 무분별하게 버리는 쓰레기에
                                        대한 경각심을 주기 위한 프로젝트입니다.
                                        <br />
                                        쓰레기를 통해 이 물건을 실제로 썼다면
                                        정보 공유가 확실하지 않을까? 라는
                                        생각에서 시작된 프로젝트는 글을 적어 이
                                        쓰레기에 대한 정보를 공유하고 (각종
                                        화장품, 의류, 전자기기 등) 댓글 기능을
                                        통해 소통까지 가능하며 <br />
                                        혹은 달력에 자신이 버린 쓰레기가 오늘
                                        몇개인지 표시하고 확인 할 수 있어 자신이
                                        얼마나 많은 쓰레기를 버리고
                                        생산해내는지에 대한 것 까지 알 수 있기에
                                        쓰레기에 대한 경각심까지 불러 일으킬 수
                                        있습니다.
                                        <br /> <br />이 프로젝트는 제가 웹
                                        개발을 공부하면서 처음 진행한
                                        프로젝트였으며 첫 팀 프로젝트인 만큼{' '}
                                        <span className="textColor">Git</span>
                                        을 혼자 쓸 때와는 다르게 굉장히
                                        힘들었습니다.
                                        <br />
                                        또한 DB를 사용하지 않고 프로젝트를
                                        진행하다보니 게시물과 댓글을 저장하기
                                        위해{' '}
                                        <span className="textColor">
                                            로컬스토리지
                                        </span>
                                        를 사용해 새롭게 로컬 스토리지의 활용을
                                        알게 되었고, 또한 DB의 중요성도 알게
                                        되었습니다.
                                        <br />
                                        <br />
                                        저는 이번 팀 프로젝트를 통해 웹 개발에
                                        대한 이해를 조금 더 높힐 수 있었고 처음
                                        협업을 통해 많은 것을 배웠고 첫 팀
                                        프로젝트에서 배우지 않은 것을 활용해
                                        넣었다는 점에 의의를 뒀습니다.
                                        <div className="line"></div>
                                        <a href={detail.link}>▷자세히 보기</a>
                                        <div className="detailContent">
                                            <b>주요 기능 </b>
                                            {detail.content}
                                            <br />
                                            <b>Github: </b>
                                            <a href={detail.code}>
                                                {detail.code}
                                            </a>
                                            <br />
                                            <b>FrontEnd </b>
                                            <span>{detail.frontEnd}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="item rest" id="2">
                        {project2.map((detail, key) => (
                            <div key={key} className="projectListDetail">
                                <h1>{detail.name}</h1>
                                <div>{detail.period}</div>
                                <div className="detailInfo">
                                    <div className="detailImg">
                                        <a href={detail.link}>
                                            <img
                                                src={detail.image}
                                                className="project2img"
                                            ></img>
                                        </a>
                                    </div>
                                    <div className="detailDesc">
                                        {/* <div>{detail.desc}</div> */}
                                        <b>
                                            <span className="textColor">
                                                다른 술에 비교적 접근성이 낮은
                                                칵테일의 접근성을 올려보면
                                                어떨까?
                                            </span>
                                            에서 시작된 웹 사이트입니다.
                                        </b>
                                        <br />
                                        오늘의 술 페이지는 사용자에게 간단한
                                        설문 조사를 통해 사용자에게 알맞은
                                        칵테일을 추천해줍니다.
                                        <br />
                                        또한 오늘의 술 페이지는 다른 술들에 비해
                                        접근성이 낮은 칵테일을 조금이라도 쉽게
                                        접근할 수 있게 하기 위해 칵테일 종류
                                        페이지에서는 모달 버튼을 통해 도수와
                                        당도에 따라 칵테일을 분류해 검색해
                                        원하는 칵테일을 찾아볼 수 있습니다.
                                        <br /> <br />이 프로젝트는 첫 팀
                                        프로젝트와 달리 백엔드, 프론트엔드, DB를
                                        활용한 프로젝트였습니다. 또한 처음으로
                                        <span className="textColor">API</span>
                                        명세서를 작성해 router들을 분리하면서
                                        연결된 데이터들의 복잡성을 체감할 수
                                        있었고{' '}
                                        <span className="textColor">
                                            MVC패턴
                                        </span>
                                        을 적용해 소스코드를 확실히 분리하여
                                        작업할 수 있었습니다. 팀 프로젝트를
                                        진행하면서 소통의 중요성을 다시금 느끼게
                                        되었고 협업하는 과정에 대해 많은 것을
                                        배우게 되었습니다.
                                        <br />
                                        <br />
                                        저는 이번 팀 프로젝트를 통해 웹 개발의
                                        전체적인 흐름을 알 수 있었고 저에게
                                        부족한 부분인 프론트엔드의 역량을
                                        키워야겠다는 생각을 했습니다. 또한 협업
                                        개발을 통해 끊임없는 소통과 새로운 많은
                                        것들을 배울 수 있는 기회여 좋았습니다.
                                        <div className="line"></div>
                                        <div className="detailContent">
                                            <b>주요 기능 </b>
                                            {detail.content}
                                            <br />
                                            <b>Github: </b>
                                            <a href={detail.code}>
                                                {detail.code}
                                            </a>
                                            <br />
                                            <b>FrontEnd </b>
                                            <span>{detail.frontEnd}</span>
                                            <br />
                                            <b>BackEnd </b>
                                            <span>{detail.backEnd}</span>
                                            <br />
                                            <b>DataBase </b>
                                            <span>{detail.database}</span>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </StyledDetail>
        </>
    );
}
// export default function ProjectsDetail() {
//     return (
//         <>
//             <StyledDetail>
//                 <div>
//                     {projectDetails.map((item) => (
//                         <ProjectDeatilList
//                             key={item.id}
//                             name={item.name}
//                             desc={item.desc}
//                             period={item.period}
//                             code={item.code}
//                             image={item.image}
//                             desc2={item.desc2}
//                             desc3={item.desc3}
//                         />
//                     ))}
//                 </div>
//             </StyledDetail>
//         </>
//     );
// }

const StyledDetail = styled.section`
    display: block;
    .item {
        /* border: 1px solid black; */
        margin-bottom: 30px;
        padding: 25px 0 25px 0;
        border-radius: 20px;
    }
    div {
        padding: 10px;
    }

    .projectListDetail {
        background: #ffffff;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 40px;
        margin-left: 7%;
        margin-right: 7%;
        max-width: 800px;
        margin: 0 auto;

        /* overflow-x: auto;
        overflow-y: auto; */
    }
    .detailInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .detailDesc {
        font-size: 18px;
    }

    .project1img {
        width: 300px;
        height: 400px;
    }

    .project2img {
        width: 300px;
        height: 400px;
    }
    .line {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #cccccc;
    }
    .textColor {
        /* color: red; */
        color: #55e6a5;
    }
`;
