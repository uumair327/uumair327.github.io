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
                Umair<span className="name-en"> | &nbsp;Mohd Umair Ansari</span>
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
                  {/* I manage open-source projects with an average of over 70,000 requests per day.
                  <br /> */}
                  As a developer, I contemplate not only what problems to solve but also <b className="stress">fundamental issues and creative solutions</b>.
                  <br /> Based on this, I enjoy challenges and growth while developing with a keen interest in open-source projects.
                </p>
                <p>
                  I am actively engaged in <b className="stress">continuous learning and practical application</b> to produce valuable code. <br />
                  By translating thoughts into action.
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
                  <a href="https://github.com/uumair327/ucs" target="_blank">
                    Guardian Care
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Flutter</span>
                  <span className="badge badge-light tag-badge">Firebase</span>
                  <span className="badge badge-light tag-badge">Google Cloud</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/uumair327/ucs" target="_blank">
                    https://github.com/uumair327/guardiancare
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    Guardian Care Application aimed at providing guardians with tools to educate children about online safety.
                    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/uumair327/ucs" />
                  </li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Developer & Contributor</p>
                <h4 className="semi-title">Effort & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>Utilized Flutter framework for cross-platform mobile application development</li>
                  <li>Integrated Firebase for backend services including user authentication and real-time database</li>
                  <li>Utilized Google Cloud for cloud computing services and storage solutions</li>
                  <li>Collaborated with team members to design and develop features focusing on educating children about online safety</li>
                  <li>Addressed user feedback and contributed to ongoing improvements and enhancements of the application</li>
                </ul>
              </div>
            </div>

            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://uumair327.github.io/DigitalTailor/frontend/index.html" target="_blank">
                    Digital Tailor
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Web Development</span>
                  <span className="badge badge-light tag-badge">Frontend</span>
                  <span className="badge badge-light tag-badge">UI/UX</span>
                </div>
                <div className="url-block github">
                  <a href="https://uumair327.github.io/DigitalTailor/frontend/index.html" target="_blank">
                    https://uumair327.github.io/DigitalTailor/frontend/index.html
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>A centralized platform for tailors and customers offering a comprehensive catalog of services and products.</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Developer & Contributor</p>
                <h4 className="semi-title">Effort & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>Designed and developed a user-friendly web application interface for both tailors and customers</li>
                  <li>Implemented features to showcase tailor services, product catalog, and customer reviews</li>
                  <li>Ensured responsiveness and cross-browser compatibility for seamless user experience across devices</li>
                  <li>Collaborated with team members to continuously enhance the platform's functionality and user engagement</li>
                  <li>Addressed user feedback and resolved issues promptly to maintain platform performance</li>
                </ul>
              </div>
            </div>

            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/trushildhokiya/gdsc-marathon.git" target="_blank">
                    GDSC Marathon App
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Flutter</span>
                  <span className="badge badge-light tag-badge">Firebase</span>
                  <span className="badge badge-light tag-badge">Strava</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/trushildhokiya/gdsc-marathon.git" target="_blank">
                    https://github.com/trushildhokiya/gdsc-marathon.git
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <ul className="semi-list">
                  <li>A marathon application integrated with quiz and map functionalities, where runners scan QR codes at each checkpoint to access questions.</li>
                </ul>
                <h4 className="semi-title">Tech Stack Used</h4>
                <ul className="semi-list">
                  <li>Flutter for cross-platform mobile app development</li>
                  <li>Firebase for backend services and real-time database</li>
                  <li>Strava API for integrating running activity tracking</li>
                </ul>
                <h4 className="semi-title">Role</h4>
                <p>Developer & Contributor</p>
                <h4 className="semi-title">Effort & Experience</h4>
                <ul className="semi-list origin-ul">
                  <li>Implementing QR code scanning functionality for checkpoint access</li>
                  <li>Integrating Firebase database for storing and retrieving quiz questions and user responses</li>
                  <li>Ensuring smooth integration with Strava API for tracking runner activities</li>
                  <li>Collaborating with team members to ensure seamless functionality and user experience</li>
                </ul>
              </div>
            </div>

            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://uumair327.github.io/" target="_blank">
                    Blog
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">GitHub Pages</span>
                  <span className="badge badge-light tag-badge">Jekyll</span>
                  <span className="badge badge-light tag-badge">Markdown</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/uumair327/uumair327.github.io.git" target="_blank">
                    https://github.com/uumair327/uumair327.github.io.git
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>A blog hosted on GitHub Pages showcasing various articles related to technology, projects, and personal experiences.</p>
                <h4 className="semi-title">Content</h4>
                <ul className="semi-list origin-ul">
                  <li>Articles covering topics such as programming, software development, and personal projects</li>
                  <li>Technical tutorials and guides to help other developers</li>
                  <li>Reflections on personal experiences and learnings in the field of technology</li>
                </ul>
                <h4 className="semi-title">Tech Stack</h4>
                <ul className="semi-list origin-ul">
                  <li>Jekyll static site generator for easy content management and templating</li>
                  <li>GitHub Pages for hosting the blog</li>
                  <li>Markdown for writing and formatting blog posts</li>
                </ul>
              </div>
            </div>

            <hr className="divider" />

            <div className="project-row row">
              <div className="col-md-4">
                <h3 className="project-title">
                  <a href="https://github.com/uumair327/brick_breaker.git" target="_blank">
                    Brick Breaker
                  </a>
                </h3>
                <div className="tags">
                  <span className="badge badge-light tag-badge">Flutter</span>
                  <span className="badge badge-light tag-badge">Flame Engine</span>
                </div>
                <div className="url-block github">
                  <a href="https://github.com/uumair327/brick_breaker.git" target="_blank">
                    https://github.com/uumair327/brick_breaker.git
                  </a>
                </div>
              </div>
              <div className="col-md-8 desc">
                <h4 className="semi-title">Introduction</h4>
                <p>Brick Breaker game developed using Flutter framework and Flame Engine.</p>
                <h4 className="semi-title">Features</h4>
                <ul className="semi-list origin-ul">
                  <li>Classic arcade-style gameplay where players aim to break bricks with a ball.</li>
                  <li>Utilizes Flutter for cross-platform compatibility and Flame Engine for game development.</li>
                  <li>Dynamic graphics and smooth animations enhance the gaming experience.</li>
                </ul>
                <h4 className="semi-title">Development Tools</h4>
                <ul className="semi-list origin-ul">
                  <li>Flutter framework for building the user interface and managing app logic.</li>
                  <li>Flame Engine for game development, providing features like sprites, animations, and physics.</li>
                </ul>
              </div>
            </div>
          </div>

          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">Activities</h2>
            <div>
              <h3 className="info-log">
                Google Solution Challenge 2024
                <span className="info-detail left">2024</span>
              </h3>
              <ul className="semi-list">
                <li>
                  Participated in the Google Solution Challenge 2024 with Project Guardian Care, focusing on child safety.
                </li>
                <li>
                  This project aimed to create a centralized platform for child safety, providing tools and resources for both parents and children
                  to navigate online and offline risks effectively.
                </li>
                <li>
                  [Self-developed]: Guardian Care -
                  <a href="https://github.com/uumair327/ucs.git">Guardian Care</a>
                </li>
                {/* <div className="url-block github">
                  <a href="https://github.com/uumair327/ucs.git" target="_blank">
                    GitHub Link: https://github.com/uumair327/ucs.git
                  </a>
                </div> */}
              </ul>
            </div>
            <hr className="divider" />
            <div>
              <h3 className="info-log">
                GDSC KJSIT -App Dev Expert
                <span className="info-detail left">Jun’23 - Present</span>
              </h3>
              <ul className="semi-list">
                <li>
                  Lead sessions and address doubts on app development technologies within GDSC KJSIT.
                </li>
                <li>
                  Actively engage with participants, fostering a collaborative learning environment.
                </li>
                <li>
                  Orchestrated the organization and delivery of both the Android Bootcamp (19 Jan-20 Jan '24) and ML Bootcamp (21 Feb - 28 Feb '24) as a keynote speaker and content creator.
                </li>
                <li>
                  Played a pivotal role in driving the growth and knowledge-sharing initiatives within GDSC, demonstrating leadership qualities and a commitment to fostering learning and innovation.
                </li>
              </ul>
            </div>
            {/* <hr className="divider" />
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
            </div> */}

          </div>

          <PrintDivider />

          <div className="resume-block resume-skill">
            <h2 className="title">SKILL</h2>
            <div>
              <h3 className="info-log">
                Flutter
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Experience in cross-platform mobile app development using Flutter framework.</li>
                <li>Proficient in building responsive and intuitive user interfaces for Android and iOS platforms.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                Firebase
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Utilized Firebase services for backend development, authentication, and real-time database.</li>
                <li>Implemented Firebase Cloud Messaging for push notifications in mobile applications.</li>
              </ul>
            </div>
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
                C/C++
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Understanding of Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, and polymorphism.</li>
                <li>Proficient in utilizing C/C++ for system-level development, game development, and performance-critical applications.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                Java
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Proficient in Java programming language for Android app development and enterprise-level applications.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                Python
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Experience in Python programming for web development, data analysis, and scripting tasks.</li>
              </ul>
            </div>
            <div>
              <h3 className="info-log">
                ETC
                <span className="info-detail left"></span>
              </h3>
              <ul className="semi-list origin-ul">
                <li>Create games using Flutter and Flame Engine as a hobby.</li>
                <li>Enjoy self-learning and problem-solving while remembering the presence of colleagues or mentors.</li>
                <li>Organize Git conventions for collaboration and manage with Github Action.</li>
              </ul>
            </div>
          </div>


          <PrintDivider />

          <div className="resume-block resume-education">
            <h2 className="title">EDUCATION</h2>

            <p className="info-log">
              Software Engineering, KJ Somaiya Institute of Technology
              <span className="info-detail left">2021 - 2025 (Pursuing)</span>
            </p>
            <p className="info-log">
              Rais High School & Jr. College
              <span className="info-detail left">2018 - 2020 (Graduated)</span>
            </p>
          </div>

          <div className="resume-block resume-education hide-on-print">
            <h2 className="title">Achievements</h2>
            <ul className="semi-list origin-ul">
              <li>
                Achieved a 3-star rating in C and 2-star rating in C++ at HackerRank, demonstrating strong coding skills and problem-solving abilities.
                <span className="info-detail left">Ongoing</span>
              </li>
              <li>
                Actively participated in “KJSIT-INTECH 2K23” an esteemed technical event.
                <span className="info-detail left">2023</span>
              </li>
              <li>
                7-star local guide on Google Maps, with an impressive 20 lakh + views and reviews placing in the top 30% category, showcasing a keen eye for detail and a passion for sharing valuable insights.
                <span className="info-detail left">Present</span>
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
