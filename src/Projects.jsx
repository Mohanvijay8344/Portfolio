import React from "react";
import "./Projects.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";

export function Projects() {
  const data = [
    {
      title: "Movies Cafe",
      image: img1,
      github: "https://github.com/Mohanvijay8344/Notes-master/tree/master/react_demo",
      demo: "https://benevolent-sawine-a9dd39.netlify.app/",
    },
    {
      title: "Youtube Clone",
      image: img2,
      github: "https://github.com/Mohanvijay8344/Youtube_Clone",
      demo: "https://mohan-youtube-clone.netlify.app/",
    },
    {
      title: "Money Manager",
      image: img3,
      github: "https://github.com/Mohanvijay8344/Money-Management/tree/master/FrontEnd/Money-Manager",
      demo: "https://zesty-starlight-ad1b59.netlify.app/",
    },
    {
      title: "Gold Rate Calculator",
      image: img4,
      github: "https://github.com/Mohanvijay8344/Gold-Rate-Calculator_Frontend/tree/master/frontend",
      demo: "https://bucolic-cannoli-0e4bd7.netlify.app/",
    },
    {
      title: "E-Commerce",
      image: img5,
      github: "https://github.com/Mohanvijay8344/Add-to-Price-Card",
      demo: "https://sage-cendol-9297b1.netlify.app/",
    },
  ];
  return (
    <section id="portfolio">
      <h1 className="head">My Recent Work</h1>
      <div className="container portfolio__container">
        {data.map(({  image, title, github, demo }) => {
          return (
            <article  className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Pros({ name, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  );
}
