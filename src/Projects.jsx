import React, { useState } from "react";
import "./Projects.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import { useNavigate } from "react-router-dom";
import img6 from "./images/img6.png";


export function Projects() {
  const navigate = useNavigate();
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
      title: "Add to Cart",
      image: img5,
      github: "https://github.com/Mohanvijay8344/Add-to-Price-Card",
      demo: "https://sage-cendol-9297b1.netlify.app/",
    },
    {
      title: "E-Commerce",
      image: img6,
      github: "https://github.com/Mohanvijay8344/E-Commerce/tree/master/vite-project",
      demo: "https://6573da5b60517d157ac11f45--dynamic-wisp-98f36a.netlify.app/",
    },
  ];

  const isTokenAvailable = () => {
    const token = localStorage.getItem("token");
    return token !== null; 
  };


  return (
    <section id="portfolio">
      <h1 className="head">My Recent Work</h1>
      <div className="container portfolio__container">
        {data.map(({ image, title, github, demo }) => {
          return (
            <article className="portfolio__item" key={title}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  onClick={(e) => {
                    if (!isTokenAvailable()) {
                      e.preventDefault(); 
                      navigate("./signin")
                    } 
                  }}
                  className={`btn ${!isTokenAvailable() ? 'disabled' : ''}`}
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  onClick={(e) => {
                    if (!isTokenAvailable()) {
                      e.preventDefault();
                      navigate("./signin")
                    }
                  }}
                  className={`btn btn-primary ${!isTokenAvailable() ? 'disabled' : ''}`}
                  target="_blank"
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
}

