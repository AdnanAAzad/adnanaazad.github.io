import React from "react";
import "./portfolio.css";
import IMG_1 from "../../assets/portfolio1.jpg";
import IMG_2 from "../../assets/portfolio2.jpg";
import IMG_3 from "../../assets/portfolio3.jpg";
import IMG_4 from "../../assets/portfolio4.jpg";
import IMG_5 from "../../assets/portfolio5.png";
import IMG_6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG_6,
    title: "This Personal Website",
    tools: "ReactJS, JavaScript ES6, HTML5, CSS3, EmailJS",
    github: "https://github.com/AdnanAAzad/adnanaazad.github.io",
    demo: "#",
  },
  {
    id: 2,
    image: IMG_1,
    title: "POXEDEX Web App",
    tools: "ReactJS, Javascript ES6, HTML5, CSS3",
    github: "https://github.com/AdnanAAzad/Pokedex-Web-App",
    demo: "https://github.com/AdnanAAzad/Pokedex-Web-App"
  },
  {
    id: 3,
    image: IMG_2,
    title: "Web Based Snake Game",
    tools: "JavaScript ES6, HTML5, CSS3",
    github: "https://github.com/AdnanAAzad/Snake-Game",
    demo: "https://adnanaazad.github.io/Snake-Game/",
  },
  {
    id: 4,
    image: IMG_3,
    title: "Storage Management System",
    tools: "C#, .NET Framework, TCP/IP",
    github: "https://github.com/AdnanAAzad/Storage-Management-System",
    demo: "https://github.com/AdnanAAzad/Storage-Management-System",
  },
  {
    id: 5,
    image: IMG_4,
    title: "Battleship Game",
    tools: "Python",
    github: "https://github.com/AdnanAAzad/BattleShip/blob/main/Adnan_azad_Assignment1_Battleship_Game.py",
    demo: "https://github.com/AdnanAAzad/BattleShip/blob/main/Adnan_azad_Assignment1_Battleship_Game.py",
  },
  {
    id: 6,
    image: IMG_5,
    title: "Temperature Control System",
    tools: "C#",
    github: "https://github.com/AdnanAAzad/Temperature-Control-Project",
    demo: "https://github.com/AdnanAAzad/Temperature-Control-Project",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Personal Projects</h5>
      <h2>— PORTFOLIO —</h2>

      <div className="container portfolio__container">
        {/* project 1 */}
        {data.map(({ id, image, title, tools, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>Using {tools}</small>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
