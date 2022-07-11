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
    image: IMG_1,
    title: "POXEDEX Web App",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG_2,
    title: "Web Based Snake Game",
    github: "https://github.com/AdnanAAzad/Snake-Game",
    demo: "https://adnanaazad.github.io/Snake-Game/",
  },
  {
    id: 3,
    image: IMG_3,
    title: "Project3",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG_4,
    title: "Project4",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG_5,
    title: "project5",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG_6,
    title: "project6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Personal Projects</h5>
      <h2>PORTFOLIO</h2>

      <div className="container portfolio__container">
        {/* project 1 */}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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
