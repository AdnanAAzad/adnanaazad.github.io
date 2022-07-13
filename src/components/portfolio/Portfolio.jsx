import React from "react";
import "./portfolio.css";
// Picture Import for Projects
import Pokedex from "../../assets/pokemon.png";
import Snake_Game from "../../assets/snake_game.png";
import Battleship from "../../assets/Python-Code-Image.jpg";
import IMG_5 from "../../assets/portfolio5.png";
import StorageMgntSys from "../../assets/storage_mgnt_system.PNG";
import PortfolioSite from "../../assets/portfoliosite.png"

const data = [
  {
    id: 1,
    image: PortfolioSite,
    title: "This Personal Website",
    tools: "ReactJS • JavaScript ES6 • HTML5 • CSS3 • EmailJS",
    github: "https://github.com/AdnanAAzad/adnanaazad.github.io",
    demo: "#",
  },
  {
    id: 2,
    image: Pokedex,
    title: "POXEDEX Web App",
    tools: "ReactJS • Javascript ES6 • HTML5 • CSS3 • REST API",
    github: "https://github.com/AdnanAAzad/Pokedex-Web-App",
    demo: "https://github.com/AdnanAAzad/Pokedex-Web-App"
  },
  {
    id: 3,
    image: Snake_Game,
    title: "Web Based Snake Game",
    tools: "JavaScript ES6 • HTML5 • CSS3",
    github: "https://github.com/AdnanAAzad/Snake-Game",
    demo: "https://adnanaazad.github.io/Snake-Game/",
  },
  {
    id: 4,
    image: StorageMgntSys,
    title: "Storage Management System",
    tools: "C# • .NET Framework • TCP/IP",
    github: "https://github.com/AdnanAAzad/Storage-Management-System",
    demo: "https://github.com/AdnanAAzad/Storage-Management-System",
  },
  {
    id: 5,
    image: Battleship,
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
              <div className="tools_btn"><small>{tools}</small></div>
              
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
