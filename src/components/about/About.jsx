import React from "react";
import "./about.css";
import ME from "../../assets/me-about.PNG";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
          </div>
          <p>
            <br />
            Successfully developed and deployed the website for the Rotaract Club of Toronto Danforth and was awarded the Best
            Advertising Award for its development as it increased membership
            signup rate by 60% for the organization.
            <br />
            I am actively working towards my Amazon Web Services (AWS) Certifications and continually growing as a software engineer
            with a big focus in Web Development
          </p>
          <p>—</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
