import ThemePicker from './theme';
import PDFButton from './pdfViewer'
import '../css/reset.css';
import '../css/styles.css';
import '../css/themes/green-white.css';
import '../css/themes/grey-white.css';
import '../css/themes/indigo-white.css';
import '../css/themes/red-white.css';
import '../css/themes/white-blue.css';
import '../css/themes/white-grey.css';
import '../css/themes/white-indigo.css';
import '../css/themes/white-red.css';
import '../css/themes/yellow-black.css';

import cpp from '../assets/svg/cplusplus.svg';
import fstore from '../assets/svg/firestore.svg';
import intellij from '../assets/svg/intellijidea.svg';
import mongo from '../assets/svg/mongo.svg';
import ms from '../assets/svg/ms_server.svg';
import mysql from '../assets/svg/mysql.svg';
import pg from '../assets/svg/postgresql.svg';
import postman from '../assets/svg/postman.svg';
import tailwind from '../assets/svg/tailwind.svg';
import vscode from '../assets/svg/vscode.svg';
import nextjs from '../assets/svg/nextjs.svg';
import spring from '../assets/svg/spring-boot.svg';
import brains from '../assets/svg/jetbrains.svg'

import Weather from './weatherComponent';
import chess from '../assets/java_chess.png';
import droosy from '../assets/droosy.png';

const Test = () => {
  return (
    <div>
      <ThemePicker />
      <main>
        <div className='h-screen main'>
          <div className="intro">Mohamed Emad Abdo</div>
          <div className="tagline">Software Engineer | Full Stack Web Developer</div>

          <div className="icons-social">
            <a target="_blank" href="https://www.linkedin.com/in/mohamed-emad-30a869322/">
              <i className="fab fa-linkedin" aria-hidden="true" title="LinkedIn"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a target="_blank" href="https://github.com/Mohamed-Coder2">
              <i className="fab fa-github" aria-hidden="true" title="Github"></i>
              <span className="sr-only">Github</span>
            </a>
            <a target="_blank" href="mailto:mohamedemad8862@gmail.com">
              <i className="fa-solid fa-envelope" aria-hidden="true" title="MAIL"></i>
              <span className="sr-only">E-Mail</span>
            </a>
          </div>

          <div>
            <PDFButton />
          </div>
        </div>

        <div className='about-me'>
          <h2>About Me!</h2>
          <div className='me-text'>
            <p>
              Hi! I’m Mohamed Emad, a passionate Computer Science student at Cairo University, graduating in 2025.
              I specialize in full-stack web development and have hands-on experience with real-world projects using
              technologies like React, Node.js, PostgreSQL, and Docker.
            </p>
            <br />
            <p>
              I’ve built and deployed several web applications including a student management system that tracks
              attendance and grades with visual charts, and a courier tracking platform with real-time delivery
              updates. These projects taught me how to design scalable systems, develop RESTful APIs, and deliver
              functional UI experiences.
            </p>
            <br />
            <p>
              I’ve also trained with CIB Bank where I explored the fundamentals of banking, financial inclusion, and
              sustainability—giving me insight into secure and ethical tech applications in the financial sector.
            </p>
            <br />
            <p>
              Outside of tech, I’m fluent in Arabic and English, and I take pride in my adaptability, communication
              skills, and eagerness to learn.
            </p>
          </div>
        </div>


        <div className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="card">
              <h3>Languages</h3>
              <ul>
                <li><Image src={cpp} />C/C++</li>
                <li><i className="fa-brands fa-java"></i>Java</li>
                <li><i className="fa-brands fa-html5"></i>HTML/CSS</li>
                <li><i className="fa-brands fa-js"></i>Javascript</li>
                <li><i className="fa-brands fa-python"></i>Python</li>
              </ul>
            </div>
            <div className="card">
              <h3>Frameworks</h3>
              <ul>
                <li><i className="fa-brands fa-react"></i>React JS</li>
                <li><Image src={nextjs} />Next JS</li>
                <li><i className="fa-brands fa-node-js"></i>Node JS</li>
                <li><Image src={tailwind} />Tailwind CSS</li>
                <li><Image src={spring} />Spring Boot</li>
              </ul>
            </div>
            <div className="card">
              <h3>Databases</h3>
              <ul>
                <li><Image src={mysql} />MySQL</li>
                <li><Image src={pg} />PostgreSQL</li>
                <li><Image src={ms} />MS SQL Server</li>
                <li><Image src={mongo} />MongoDB</li>
                <li><Image src={fstore} />Firestore</li>
              </ul>
            </div>
            <div className="card">
              <h3>Other tools</h3>
              <ul>
                <li><i className="fa-brands fa-git-alt"></i>Git</li>
                <li><i className="fa-brands fa-docker"></i>Docker</li>
                <li><Image src={vscode} />VS Code</li>
                <li><Image src={postman} />Postman</li>
                <li><Image src={brains} />Jetbrains IDEs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='Experience'>

        </div>

        <div className='projects'>
          <h2>Projects</h2>
          <div className="projects-grid">
            {/* Project 1 - Weather App */}
            <div className="project-card">
              <h3>Weather App</h3>
              <div className="project-content">
                <Weather
                  EN={true}
                />
              </div>
              <p className="project-description">
                Real-time weather display with location detection and dual calendar system
              </p>
            </div>

            {/* Project 2 - Weather App Variant */}
            <div className="project-card">
              <h3>تطبيق الطقس</h3>
              <div className="project-content">
                <Weather
                  EN={false}
                /> {/* Could be a modified version */}
              </div>
              <p className="project-description">
                عرض الطقس في الوقت الفعلي مع اكتشاف الموقع ونظام التقويم المزدوج
              </p>
            </div>

            <div className="project-card">
              <h3>Chess desktop game</h3>
              <img src={chess} width={450}/>
              <p>
                A Java chess desktop game with more features to come in the future!
              </p>
            </div>

            <div className="project-card">
              <h3>Student Managment Web-App</h3>
              <img src={droosy} />
              <p>
                A Student managment web app where students can login to mark their attendance, view their past attendances, take online quizzes and enroll into classes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Image = ({ src }) => {
  return (
    <span>
      <img src={src}
        height={24}
        width={24}
      />
    </span>
  )
}

export default Test;