"use client";

import styled from "@emotion/styled";
import { IconBrandGithub, IconDeviceMobile, IconMail, IconPencil } from "@tabler/icons-react";
import Link from "next/link";

export default function Resume() {
  return (
    <Container className="container container-resume">
      <div className="resume" id="app">
        <div className="introduce">
          <div className="resume-block resume-profile row">
            <div className="col-md-4 profile-block">
              <img
                className="profile-img"
                src="https://avatars.githubusercontent.com/u/72534352?s=400&u=8712f01f42884fe5becc72ef163743274a0c353f&v=4"
              />
            </div>
            <div className="col-md-8">
              <h1 className="name">
                Umair<span className="name-en"> | &nbsp;Umair Ansari</span>
              </h1>

              <ul className="info-list profile-list">
                <li className="info">
                  <span className="info-icon">
                    {" "}
                    <IconDeviceMobile stroke={1.25} />{" "}
                  </span>
                  +919049116748
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconMail stroke={1.25} />
                  </span>
                  uumair327@gmail.com
                </li>

                <li className="info">
                  <span className="info-icon">
                    <IconBrandGithub stroke={1.25} />
                  </span>
                  <a href="https://github.com/uumair327" target="_blank">
                    github.com/uumair327
                  </a>
                </li>
                <li className="info">
                  <span className="info-icon">
                    <IconPencil stroke={1.25} />
                  </span>
                  <Link href="https://uumair327.github.io" target="_blank">
                    uumair327.github.io
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <hr className="divider" /> */}
          <div className="resume-block resume-introduce">
            <div className="">
              <div className="intro-block">
                <p>
                  I manage open-source projects with an average of over 70,000 requests per day.
                  <br />
                  As a developer, I contemplate not only what problems to solve but also <b className="stress">fundamental issues and creative solutions</b>.
                  <br /> Based on this, I enjoy challenges and growth while developing with a keen interest in open-source projects.
                </p>
                <p>
                  I am actively engaged in <b className="stress">continuous learning and practical application</b> to produce valuable code. <br />
                  By translating thoughts into action, I currently serve more than 15,000 active users with programs.
                </p>
              </div>
            </div>
          </div>


          <PrintDivider />
          <div className="resume-block resume-project">
            <h2 className="title">PROJECT</h2>

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/kyechan99/capsule-render" target="_blank">
                    Capsule-Render
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">SVG</span>
                  <span className="badge badge-light tag-badge">Vercel</span>
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Jest</span>
                  <span className="badge badge-light tag-badge">Husky</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/kyechan99/capsule-render" target="_blank">
                    https://github.com/kyechan99/capsule-render
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    Dynamic image generation open-source project{" "}
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/kyechan99/capsule-render" />
                  </li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>Utilized SVG based on API query values to dynamically respond with images</li>
                  <li>Handled over 70,000 requests per day (peak at 85,000)</li>
                  <li>Provided documentation specifying open-source usage methods and exceptions</li>
                  <li>
                    Engaged in <a href="https://github.com/kyechan99/capsule-render/discussions/15" target="__blank">Discussions</a> to discuss and implement errors or feature requests
                  </li>
                  <li>
                    Prevented service errors
                    <ul className="semi-list origin-ul">
                      <li>Wrote test code</li>
                      <li>Analyzed test results (Coverage Report) via GitHub Actions</li>
                    </ul>
                  </li>
                  <li>
                    Provided a <a href="https://github.com/kyechan99/capsule-render/issues/19" target="__blank">Generator</a> for user convenience
                    <ul className="semi-list origin-ul">
                      <li>Separated GitHub-provided Traffic analysis from Generator visits</li>
                      <li>Applied Google Analytics to more accurately track separated visitors</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/baggun/VoiceHub" target="_blank">
                    VoiceHub
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Next.js</span>
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Recoil</span>
                  <span className="badge badge-light tag-badge">Express</span>
                  <span className="badge badge-light tag-badge">Mongoose</span>
                  <span className="badge badge-light tag-badge">S3</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/baggun/VoiceHub" target="_blank">
                    https://github.com/baggun/VoiceHub
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://voice-hub-beta.vercel.app" target="_blank">
                    https://voice-hub-beta.vercel.app
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>성우 포트폴리오 관리 및 커뮤니티 플랫폼</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    React에서 Next로의{" "}
                    <Link href="https://kyechan99.github.io/post/lib/why-nextjs" target="_blank">
                      마이그레이션
                    </Link>
                    <ul className="semi-list origin-ul">
                      <li>페이지 전환보다 첫 페이지 입장을 위한 마이그레이션 작업</li>
                      <li>분리된 프로젝트 단순화시키면서 개발 시간과 테스트 감소</li>
                    </ul>
                  </li>
                  <li>
                    렌더링 속도 개선
                    <ul className="semi-list origin-ul">
                      <li>우선순위에 따라 Streaming 하며 첫 컨텐츠 렌더링 시간 0.9s → 0.3s 단축</li>
                      <li>로딩 중 Skeleton UI를 만들어 CLS 와 사용자 경험 개선</li>
                    </ul>
                  </li>
                  <li>
                    컴포넌트 복잡도 개선
                    <ul className="semi-list origin-ul">
                      <li>컴포넌트 단위로 개발하면서 재사용성을 높이고 반복 작업 최소화</li>
                      <li>Storybook을 이용해 문서화하며 컴포넌트 종류 시각화</li>
                    </ul>
                  </li>
                  <li>
                    오디오 플레이어 상태 유지
                    <ul className="semi-list origin-ul">
                      <li>
                        다양한 오디오 재생 컴포넌트들과 상태를 공유하면서 불필요한 재렌더링을 방지하고 페이지 이동에도
                        재생 유지
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    Scribubble
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Preact</span>
                  <span className="badge badge-light tag-badge">Three.js</span>
                  <span className="badge badge-light tag-badge">A-Frame</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    https://github.com/scribubble/scribubble
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://buly.kr/9t7YCdV" target="_blank">
                    https://buly.kr/9t7YCdV
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>WebVR 환경에서의 3D 공간 Drawing</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>프론트엔드 개발 (프론트엔드 3명, 백엔드 1명)</li>
                  <li>프로젝트 설계, WebVR 환경 구현, 드로윙 / 팔레트 기능을 중점으로 구현</li>
                </ul>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    프로젝트 경량화
                    <ul className="semi-list origin-ul">
                      <li>서비스 요구사항 대비 불필요한 React 도입 고려</li>
                      <li>
                        Preact 도입 효과를 정리하고 팀원들과 토론하여{" "}
                        <Link href="https://kyechan99.github.io/post/lib/react-preact" target="_blank">
                          설득
                        </Link>
                      </li>
                      <li>렌더링 속도와 메모리 사용량 개선 시도</li>
                      <li>VR 환경 지원도 고려 가능해지면서 WebVR 기능 추가가 가능해짐</li>
                    </ul>
                  </li>
                  <li>
                    프레임 저하 개선
                    <ul className="semi-list origin-ul">
                      <li>
                        데이터가 Drawing 작업에 맞추어 동적 증가되도록 하고 재렌더링 요청 작업을 불필요하게 만들면서
                        평균 초당 프레임(FPS) 10 → 60 개선
                      </li>
                    </ul>
                  </li>
                  <li>
                    브라우저 환경간 선 굵기가 호환 문제 해결
                    <ul className="semi-list origin-ul">
                      <li>
                        Three.js 의 공식 Line 객체가 모든 브라우저에 호환되지 못하는 문제로, 라이브러리의 샘플 단계
                        Line2 와의{" "}
                        <Link href="https://kyechan99.github.io/post/lib/threejs-draw" target="_blank">
                          비교 분석
                        </Link>
                        을 통해 프로젝트에 도입하면서 브라우저 호환
                      </li>
                    </ul>
                  </li>
                  <li>
                    3D 상의 Drawing 좌표계 문제 해결
                    <ul className="semi-list origin-ul">
                      <li>
                        무한한 공간에서의 깊이와 시점으로 인한 좌표 변경을 카메라와 평행한 평면과 event와의 꼭짓점
                        계산으로 고정된 좌표를 얻어냄
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://kyechan99.github.io/" target="_blank">
                    Blog
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Next.js</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Recoil</span>
                  <span className="badge badge-light tag-badge">Emotion</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/kyechan99/kyechan99.github.io" target="_blank">
                    https://github.com/kyechan99/kyechan99.github.io
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>기술 및 프로젝트를 자유롭게 구성하기 위해 만든 블로그</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>SEO를 위한 시멘틱 태그 배치에 신경 씀</li>
                  <ul className="semi-list origin-ul">
                    <li>sitemap, robots 생성 후 크롤러가 잘 읽어갈 수 있도록 구현</li>
                    <li>open graph를 적용한 프리뷰로 유입 개선 시도</li>
                    <li>구조화된 JSON-LD 데이터 마크업 작성</li>
                  </ul>
                  <li>MDX를 활용하기 위해 rehype, remark 플러그인 구성</li>
                  <ul className="semi-list origin-ul">
                    <li>이미지, 코드, 주소 등을 최적화 된 컴포넌트로 재구성</li>
                    <li>각 Heading을 정리한 TOC 생성과 Observer 처리</li>
                  </ul>
                  <li>GitHub Action으로 자동 빌드 Workflow 구성</li>
                  <li>다크모드 구현</li>
                </ul>
              </div>
            </div>
            {/* <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/kookmin-sw/capstone-2023-06" target="_blank">
                    Desk-IT
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">React</span>
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">Redux</span>
                  <span className="badge badge-light tag-badge">styled-component</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/scribubble/scribubble" target="_blank">
                    https://github.com/kookmin-sw/capstone-2023-06
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://www.youtube.com/watch?v=3H6TQfn8TNo" target="_blank">
                    https://www.youtube.com/watch?v=3H6TQfn8TNo
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>데스크 셋업 플랫폼</p>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>프론트엔드 개발 (프론트엔드 2명, 백엔드 1명)</li>
                  <li>상품 및 커뮤니티 페이지 구현</li>
                  <li>블럭 기반 전용 에디터 및 에디터 상품 참조 기능 구현</li>
                </ul>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>
                    이미지 파일에 상품 정보 입력
                    <ul className="semi-list origin-ul">
                      <li>각 줄마다 스타일링을 지정할 수 있게 블럭 기반의 에디터를 개발</li>
                      <li>변경되는 내부 html 내용을 스택의 깊이 확인을 통해 재검사</li> 
                      <li>환경에 따라 변하는 이미지 비율에 맞추어 데이터 위치 재조정</li>
                    </ul>
                  </li>
                  <li>
                    부분 색상 및 두께 조절등의 기능을 위한{" "}
                    <Link href="https://kyechan99.github.io/dragond" target="_blank">
                      컴포넌트
                    </Link>{" "}
                    개발
                  </li>
                </ul>
              </div>
            </div> */}
            <hr className="divider" />

            {/* <div className="print-empty-yuristrap"></div> */}

            {/* <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/yuristrap/yuristrap" target="_blank">
                    Yuristrap
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">SCSS</span>
                  <span className="badge badge-light tag-badge">Gatsby</span>
                </div>
                <div className="url-block github">
                  <a href="https://yuristrap.github.io/v1.0/components/button" target="_blank">
                    https://github.com/yuristrap/yuristrap
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://yuristrap.github.io/" target="_blank">
                    https://yuristrap.github.io
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>웹 제작에 필요한 최소한의 디자인과 기능 프레임워크</li>
                  <li>평소 자주 사용하는 기능이나 반응형 웹 디자인을 분리하고자 개발</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Owner & Maintainer</p>
                <h4 className="semi-title">Challenge & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>반응형 웹 디자인을 지원</li>
                  <li>darkmode와 modal/alert 등의 기능 지원</li>
                  <li>
                    모든 기능과 사용법을 명시한{" "}
                    <a href="https://yuristrap.github.io/v1.0/introduction/version" target="_blank">
                      Docs
                    </a>{" "}
                    지원
                  </li>
                </ul>
              </div>
            </div>
            <hr className="divider" /> */}

            {/* <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://lostwak.github.io/" target="_blank">
                    Chzzk-Plus
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Typescript</span>
                  <span className="badge badge-light tag-badge">React</span>
                </div>
                <div className="url-block service">
                  <a href="https://lostwak.github.io/" target="_blank">
                    https://lostwak.github.io/
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://youtu.be/bssHujvUd3o" target="_blank">
                    https://youtu.be/bssHujvUd3o
                  </a>
                </div>
              </div>
            </div>
            <hr className="divider" /> */}

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://lostwak.github.io/" target="_blank">
                    LostWak
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">C#</span>
                  <span className="badge badge-light tag-badge">Javascript</span>
                  <span className="badge badge-light tag-badge">Unity3D</span>
                  <span className="badge badge-light tag-badge">Node.js</span>
                  <span className="badge badge-light tag-badge">Express.js</span>
                  <span className="badge badge-light tag-badge">Mongoose</span>
                </div>
                <div className="url-block service">
                  <a href="https://lostwak.github.io/" target="_blank">
                    https://lostwak.github.io/
                  </a>
                </div>
                <div className="url-block service">
                  <a href="https://youtu.be/bssHujvUd3o" target="_blank">
                    https://youtu.be/bssHujvUd3o
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>MORPG Cooperative Raid Game</p>
                <h4 className="semi-title">Role</h4>
                <ul className="semi-list">
                  <li>Responsible for development and team leadership, recruited a diverse team of 13 members for a 6-month development period</li>
                </ul>
                <h4 className="semi-title">Effort & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>Poured diverse development passion without distinguishing fields</li>
                  <li>Over 20,000 viewers watched the live broadcast</li>
                  <li>35 average concurrent users and 1745 user registrations</li>
                  <li>
                    Actively attempted new challenges while immersed in the pure joy of development
                    <a href="https://kyechan99.github.io/project/games/loswak" target="_blank">Learn more</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">Activities</h2>
            <div>
              <h3 className="info-log">
                J2KB Coding Study 5th
                <span className="info-detail left">2022</span>
              </h3>
              <ul className="semi-list">
                <li>
                  Participated in React study, set weekly goals, and shared experiences by posting or sharing what I've learned.
                </li>
                <li>Developed Scribubble based on the studied content and participated in project development.</li>
                <li>Received praise for creative planning and service completeness and won the grand prize.</li>
              </ul>
            </div>
            <hr className="divider" />
            <div>
              <h3 className="info-log">
                Defense Open Source Academy OSAM
                <span className="info-detail left">2020</span>
              </h3>
              <ul className="semi-list">
                <li>Participated to utilize spare time during military service for study and learning.</li>
                <li>First encountered the Vue.js framework while developing an automatic mosaic web service and started studying web development.</li>
                <li>Reflecting on the project structure and task distribution among developers was a valuable experience.</li>
              </ul>
            </div>
            <hr className="divider" />
            <div>
              <h3 className="info-log">
                Other Open Source Activities
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>
                  [Self-developed]: Browser extension program reached 15,000 active users -
                  <a href="https://github.com/kyechan99/chzzk-plus">chzzk-plus</a>
                </li>
                <li>
                  [Self-developed]: Deployed Vue.js component to display drag-and-drop helper -
                  <a href="https://www.npmjs.com/package/dragond">npm package</a>
                </li>
                <li>
                  [Self-developed]: Minimal design and functionality framework frequently used -
                  <a href="https://yuristrap.github.io/v1.0/introduction/customize">DOCS</a>
                </li>
                <li>
                  [Merge]: Added sass cheatsheet content to devhints -
                  <a href="https://github.com/rstacruz/cheatsheets/pull/1481">#1481</a>
                </li>
                <li>
                  [Merge]: Updated path for naver/fe-news in November -
                  <a href="https://github.com/naver/fe-news/pull/35">#35</a>
                </li>
                <li>
                  [Open]: Modified Korean documentation for graphql-kr -
                  <a href="https://github.com/graphql-kr/graphql-kr.github.io/pull/4">#4</a>
                </li>
              </ul>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-skill">
            <h2 className="title">SKILL</h2>
            <div>
              <h3 className="info-log">
                HTML / CSS(SCSS) / CSS-IN-JS
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Created frameworks using SCSS and adhere to Semantic Markup.</li>
                <li>Capable of designing projects using Styled-Component and Emotion.</li>
                <li>Focus on SEO and attempt user acquisition analysis during project development.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                Javascript / Typescript
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Proficient in developing web applications using ES6 syntax.</li>
                <li>Prefer development using TypeScript to adhere to data types and syntax.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                React / Next
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Develop with consideration for CSR and SSR.</li>
                <li>Understand Flux pattern and utilize Redux and Recoil.</li>
                <li>Effort in developing small units and introducing Storybook for incremental assembly.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                ETC
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Develop necessary software such as browser extensions, Discord bots, and desktop apps using Electron.</li>
                <li>Build simple REST APIs using Node.js/Express.js for projects.</li>
                <li>Organize Git conventions for collaboration and manage with Github Action.</li>
                <li>Create games using C# and Unity as a hobby.</li>
                <li>Enjoy self-learning and problem-solving while remembering the presence of colleagues or mentors.</li>
              </ul>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">EDUCATION</h2>

            <p className="info-log">
              Software Engineering, KJ Somaiya Institute of Technology
              <span className="info-detail left">2021.03 - 2025.02 (Pursuing)</span>
            </p>
            <p className="info-log">
              Rais High School & Jr. College
              <span className="info-detail left">2018.03 - 2020.02 (Graduated)</span>
            </p>
          </div>

          <div className="resume-block resume-education hide-on-print">
            <h2 className="title">Award</h2>

            <ul className="semi-list origin-ul">
              <li>
                Navy Startup Competition - Encouragement Award
                <span className="info-detail left">2020</span>
              </li>
              <li>
                33rd Korean Olympiad in Informatics Regional Contest - Silver Medal
                <span className="info-detail left">2016</span>
              </li>
              <li>
                Global Indie Game Development Competition - Encouragement Award
                <span className="info-detail left">2016</span>
              </li>
              <li>
                Future Imagination Technology Competition - Silver Medal
                <span className="info-detail left">2016</span>
              </li>
              <li>
                1st Jeonbuk Primary, Middle and High School Startup Idea and Item Competition - Encouragement Award
                <span className="info-detail left">2015</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

// <!-- (Old) Jekyll blog file, needs improvement in the future -->

const Container = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.5;
  &.container-resume {
    width: 100%;
    max-width: 57rem;
    margin: auto;
  }

  ul {
    font-size: 18px;
  }
  ul:not(.origin-ul) {
    list-style: none;
  }
  .row {
    display: flex;
    position: relative;
    margin-left: -1rem;
    margin-right: -1rem;
    flex-wrap: wrap;
  }
  .col-md-4 {
    width: 100%;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }
  }
  .col-md-8 {
    width: 100%;
    position: relative;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 768px) {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
  }

  p {
    margin-top: 0;
    font-size: 17px;
    line-height: 1.5;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .tag-badge {
    font-size: 14px;
    font-weight: 400;
    color: var(--black);
    background-color: var(--asideBG);
    display: inline-block;
    padding: 0.3em 0.5em;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
  }

  hr {
    margin-top: 10px;
    &.divider {
      background: #d9d9d9;
      height: 1px;
      border: 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .semi-list {
    padding-left: 0px;
    margin: 0.25rem 0rem 1.5rem 0rem;
    li {
      margin: 0.25rem 0rem;
    }
    .semi-list {
      margin-bottom: 0.5rem;
    }
  }
  .semi-list.origin-ul {
    padding-left: 1.5rem;
  }
  .resume {
    padding-top: 10rem;
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--black);
    li {
      font-weight: 400;
      color: var(--black);
    }
    p {
      font-weight: 400;
      color: var(--black);
    }
    a {
      color: var(--resume);
      text-decoration: underline;
    }
    .introduce {
      height: auto;
      padding-bottom: 100px;
      position: relative;
    }
    .resume-block {
      margin-bottom: 6.5rem;
    }
    .name {
      margin-top: 0px;
      border-left: none;
      padding-left: 0px;
      font-weight: bold;
      position: relative;
      &::after {
        content: ".";
        font-size: 2rem;
        color: var(--resume);
        position: absolute;
        bottom: -0.125rem;
      }
      &::before {
        margin-top: 0px;
        margin-left: -10px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        content: " ";
        white-space: pre;
        background-color: var(--resume);
        z-index: -1;
        transform: rotate(-12deg);
        opacity: 0.3;
      }
      .name-en {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }
    }
    .title {
      margin-top: 0px;
      position: relative;
      font-size: 2rem;
      &::before {
        margin-top: 0px;
        margin-left: -10px;
        position: absolute;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        content: " ";
        white-space: pre;
        background-color: var(--resume);
        z-index: -1;
        transform: rotate(-12deg);
        opacity: 0.3;
      }
    }
    .project-title {
      font-size: 1.5rem;
      position: relative;
      display: inline;
      font-weight: 600;
      a {
        color: var(--black);
        font-weight: 600;
        text-decoration: none;
        &:hover {
          color: var(--resume);
        }
      }
    }
    .url-block {
      border: 1px solid #d9d9d9;
      border-radius: 0.5rem;
      width: 100%;
      padding: 1rem;
      line-height: 1.25rem;
      margin: 1rem 0rem;
      position: relative;
      white-space: pre-wrap; /* css-3 */
      white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */
      &::before {
        position: absolute;
        top: -0.75rem;
        left: 0.5rem;
        font-size: 0.675rem;
        background: var(--white);
        padding: 0rem 0.5rem;
      }
      a {
        font-size: 0.875rem;
        color: var(--resume);
      }
    }
    .url-block.github {
      &::before {
        content: "GitHub";
      }
    }
    .url-block.service {
      &::before {
        content: "Service";
      }
    }
    .project-description {
      margin: 0.75rem 0rem;
    }
    .semi-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--resume);
      margin-bottom: 0.25rem;
      line-height: 1.2;
    }
    .desc {
      p {
        margin-bottom: 1.5rem;
      }
    }
    h4 {
      margin-top: 0.5rem;
    }
  }
  .tags {
    margin: 0.75rem 0rem 1.5rem 0rem;
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 0.125rem;
  }
  .resume-introduce {
    .intro-block {
      margin-bottom: 2rem;
      p + p {
        margin-top: 1rem;
      }
      p {
        margin-bottom: 0.25rem;
      }
    }
  }
  .resume-profile {
    .profile-img {
      height: 250px;
      border-radius: 0.5rem;
    }
    .info-list {
      margin-top: 2rem;
      padding-left: 0.5rem;
      .info {
        display: flex;
        margin-bottom: 0.75rem;
        .info-icon {
          margin-right: 1.25rem;
        }
        a {
          font-weight: 400;
          text-decoration: underline;
          color: var(--black);
        }
      }
    }
  }
  .resume-education {
    .info-detail {
      margin-left: 0.5rem;
      font-size: 14px;
      opacity: 0.6;
    }
  }
  .stress {
    font-weight: 500;
    text-decoration: underline;
    text-decoration-color: #acbaee75;
    text-decoration-thickness: 1px;
  }
  .tag-badge {
    font-size: 14px;
    font-weight: 400;
  }
  .out-link {
    color: #acbaee;
    font-size: 1rem;
  }
  .info-log {
    margin-top: 6px;
    margin-bottom: 0.675rem;
  }
  @media (max-width: 768px) {
    .tag-badge {
      background-color: #f7f7f7;
    }
    .resume {
      li {
        font-size: 16px;
      }
      p {
        font-size: 16px;
      }
      padding-top: 2rem;
      .introduce {
        padding-bottom: 40px;
        height: auto;
      }
      .resume-block {
        margin-bottom: 6rem;
      }
      .name {
        .name-en {
          font-size: 1.25rem;
        }
      }
      .desc {
        margin-top: 1.5rem;
      }
    }
    .resume-profile {
      .profile-img {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3rem;
      }
    }
  }
  @media print {
    .hide-on-print {
      display: none;
    }
    .resume {
      margin-top: 1rem;
      .col-md-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }
      .col-md-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
      }
      .resume-block {
        margin-bottom: 0rem;
      }
      .name {
        line-height: 1.25;
        &::before {
          opacity: 0;
        }
      }
      .title {
        &::before {
          opacity: 0;
        }
      }
      .desc {
        margin-top: 0rem;
      }
    }
    .resume-profile {
      .col-md-4 {
        width: 240px;
        flex: 0 0 26%;
        max-width: 26%;
        display: flex;
        justify-content: flex-start;
      }
      .profile-img {
        margin-left: 0px;
        margin-bottom: 0rem;
        height: 200px;
      }
      .info-list {
        margin-top: 1rem;
        margin-bottom: 0rem;
        .info {
          margin-bottom: 0.5rem;
        }
      }
    }
    .resume-introduce {
      .intro-block {
        p {
          font-size: 19px;
        }
      }
    }
    .print-empty-yuristrap {
      width: 100%;
      margin-top: 14rem;
    }
    .print-empty-voicehub {
      width: 100%;
      margin-top: 4rem;
    }
    .profile-block {
      display: none !important;
    }
    .info-icon svg {
      width: 20px;
      height: 20px;
    }
    .resume-profile .info-list .info {
      width: 50%;
    }
    .resume-profile .info-list.profile-list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem !important;
      margin-bottom: 1.25rem !important;
    }
    .resume-skill .semi-list.origin-ul {
      margin-bottom: 0.5rem !important;
    }
  }
  @page {
  }
`;

const PrintDivider = styled.div`
  @media print {
    width: 100%;
    border-top: 1px solid black;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
`;
