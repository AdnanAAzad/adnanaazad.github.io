import React from 'react'
import './websites.css'
import RotaractClubDanforth from "../../assets/website_pics/rotaractcluboftorontodanforth.png"
import SumaiyaGroup from "../../assets/website_pics/sumaiyagroup.jpg"
import ThisWebsitePic from "../../assets/website_pics/portfoliosite.png"

const data = [
    {
      id: 1,
      image:ThisWebsitePic,
      nature:"Front-End Web Development",
      title: "This Personal Website",
      tools: "ReactJS • JavaScript ES6 • HTML5 • CSS3 • EmailJS",
      websiteURL: "https://adnanaazad.github.io/",
    },
    {
        id: 2,
        image:RotaractClubDanforth,
        nature:"Front-End Web Development",
        title: "Rotaract Club of Toronto Danforth",
        tools: "Google Sites",
        websiteURL: "https://www.rotaractdanforth.com/",
    },
    {
        id: 3,
        image:SumaiyaGroup,
        nature:"Full-Stack Web Development",
        title: "Sumaiya Group",
        tools: "ReactJS • JavaScript ES6 • HTML5 • CSS3 • EmailJS",
        
    },
];

const websites = () => {
  return (
    <section id="websites">
      <h5>Websites I Have Developed for Clients</h5>
      <h2>— MY WORK —</h2>

      <div className="container website__container">
        {/* project 1 */}
        {data.map(({ id, image, title, nature, tools, websiteURL }) => {
          return (
            <article key={id} className="website__item">
              <div className="website__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="tools__btn"><small>Nature: {nature}</small></div>
              <div className="tools__btn"><small>Developed Using {tools}</small></div>
              
              <div className="website__item-cta">
                <a
                  href={websiteURL}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check Out The Website!
                </a>
                
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default websites