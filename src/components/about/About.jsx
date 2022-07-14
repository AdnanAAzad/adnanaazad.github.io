import React from "react";
import "./about.css";
import ME from "../../assets/me-about.PNG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {AiOutlineSafetyCertificate} from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>— ABOUT ME —</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-Image" />
          </div>
        </div>
        <div className="about__contents">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ years working experience</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h5>Academic Work</h5>
              <small>Extensive Courses in Software Engineering</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>5+ Technical Projects Completed</small>
            </article>
            <article className="about__card">
              <AiOutlineSafetyCertificate />
              <h5>Achievements & Certifications</h5>
              <small>Several Awards Recieved</small>
            </article>
          </div>
          <p>
            <br />
            Hey there! My name is Adnan Azad and I am a Web Developer based in Toronto, Canada. I have Successfully developed, designed, and deployed 
            websites for several clients worldwide. I graduated with my Bachelors in Computer Engineering and currently I am persuing my Bachelors of 
            Technology in Software Development.
          </p>
          <p>—</p>
          <p>
            I am a profecient and effective Software Engineer with a big focus in Web Development. I have experience
            in Front-End and Back-End development and with many web development tools such as React, JavaScript ES6, HTML5, CSS3, REST API, PHP, 
            SQL, Redux, & WordPress to name a few.  
          </p>
          <p>—</p>
          <p>
            I am actively working towards my Amazon Web Services (AWS) Certifications and continually growing as a Web Developer through more complex
            Web Development projects, AI & Automation, REST API usage, and Web Design. If you need any kind of Web Development services I would be honoured
            if you contacted me.
          </p>
          <p>—</p>
          <p>Finally, I would like to thank you for stopping by and I wish you all the best!
            <br />
            <br  />
            Regards,
            <br />
            Adnan
          </p>
          <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
