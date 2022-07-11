import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>SERVICES</h2>

      <div className="container services__container">
        {/*WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
          </ul>
        </article>
        {/*lEADERSHIP*/}
        <article className="service">
          <div className="service__head">
            <h3>Leadership</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Example item 1</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
