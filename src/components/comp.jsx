import ThemePicker from './theme';
import { useState } from 'react';
import PDFButton from './pdfViewer'
import '../css/reset.css';
import '../css/styles.css';

import cpp from '../assets/svg/cplusplus.svg';
import fstore from '../assets/svg/firestore.svg';
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
import Typewriter from './Typewriter';

const Test = () => {

  const [EN, setLang] = useState(true);

  const Name = EN ? 'Mohamed Emad Abdo' : 'محمد عماد عبده'
  const Title = EN ? 'Software Engineer | Full Stack Developer' : 'مهندس برمجيات | مطور متكامل'
  const body = EN ? 'About Me!' : 'من أنا'
  const body1 = EN ? `Hi! I’m Mohamed Emad, a passionate Computer Science student at Cairo University, graduating in 2025.
              I specialize in full-stack web development and have hands-on experience with real-world projects using
              technologies like React, Node.js, PostgreSQL, and Docker.`: 'مرحباً! أنا محمد عماد، طالب شغوف في علوم الحاسوب بجامعة القاهرة، سأتخرج عام ٢٠٢٥. أتخصص في تطوير الويب الشامل، ولدي خبرة عملية في مشاريع واقعية باستخدام تقنيات مثل React وNode.js وPostgreSQL وDocker.'
  const body2 = EN ? `I’ve built and deployed several web applications including a student management system that tracks
              attendance and grades with visual charts, and a courier tracking platform with real-time delivery
              updates. These projects taught me how to design scalable systems, develop RESTful APIs, and deliver
              functional UI experiences.`: 'لقد قمتُ ببناء ونشر العديد من تطبيقات الويب، بما في ذلك نظام إدارة الطلاب الذي يتتبع الحضور والدرجات باستخدام مخططات مرئية، ومنصة تتبع البريد السريع مع تحديثات فورية للتوصيل. علمتني هذه المشاريع كيفية تصميم أنظمة قابلة للتطوير، وتطوير واجهات برمجة تطبيقات RESTful، وتقديم تجارب واجهة مستخدم عملية.'
  const body3 = EN ? `I’ve also trained with CIB Bank where I explored the fundamentals of banking, financial inclusion, and sustainability
  giving me insight into secure and ethical tech applications in the financial sector.`: 'لقد تدربت أيضًا في بنك CIB حيث استكشفت أساسيات الخدمات المصرفية والشمول المالي والاستدامة، مما منحني نظرة ثاقبة حول تطبيقات التكنولوجيا الآمنة والأخلاقية في القطاع المالي.'
  const body4 = EN ? `Outside of tech, I’m fluent in Arabic and English, and I take pride in my adaptability, communication
              skills, and eagerness to learn.`: 'بعيدًا عن التكنولوجيا، أتقن اللغتين العربية والإنجليزية، وأفتخر بقدرتي على التكيف ومهاراتي في التواصل وشغفي بالتعلم.'

  const handleLang = () => {
    setLang(prev => !prev)
  }

  return (
    <div className={EN ? '':'AR'}>
      <ThemePicker />
      <div
        className='fa-lg lang'
        onClick={handleLang}
      >
        {EN ? 'AR' : 'EN'}
      </div>
      <main>
        <div className='h-screen main'>
          <div className="intro">
            <Typewriter text={Name} speed={100} />
          </div>
          <div className="tagline">
            <Typewriter text={Title} speed={50} />
          </div>

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
            <PDFButton text={EN ? 'Resume' : 'سيرة ذاتية'} />
          </div>
        </div>

        <div className='about-me'>
          <h2>{body}</h2>
          <div className='me-text'>
            <p>{body1}</p>
            <br />
            <p>{body2}</p>
            <br />
            <p>{body3}</p>
            <br />
            <p>{body4}</p>
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
              <h3>Chess desktop game</h3>
              <img src={chess} width={450} />
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

            {EN ?
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
              :
              <div className="project-card">
                <h3>تطبيق الطقس</h3>
                <div className="project-content">
                  <Weather
                    EN={false}
                  />
                </div>
                <p className="project-description">
                  عرض الطقس في الوقت الفعلي مع اكتشاف الموقع ونظام التقويم المزدوج
                </p>
              </div>
            }
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