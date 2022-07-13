import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>— SERVICES —</h2>

      <div className="container services__container">
        {/*WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-Stack Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Development Content Management System (CMS)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Designing and User Experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Development Project Coordination</p>
            </li>
          </ul>
        </article>
        {/*END*/}
        {/*lEADERSHIP*/}
        <article className="service">
          <div className="service__head">
            <h3>Leadership</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analytical Decision Making</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Project Management and Delivery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tech Savviness</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Great Communication</p>
            </li>
          </ul>
        </article>
        {/*END*/}
        {/*Computer Hardware and Networking*/}
        <article className="service">
          <div className="service__head">
            <h3>Computer Hardware and Networking</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Network Security</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Hardware Networking</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Network Set-up</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server Initialization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Computer Hardware</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Troubleshooting</p>
            </li>
          </ul>
        </article>
        {/*END*/}
        
        
      </div>
    </section>
  );
};

export default Services;
