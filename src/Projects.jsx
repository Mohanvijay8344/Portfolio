import React, { useState } from "react";
import "./Projects.css";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import { useNavigate } from "react-router-dom";
import img6 from "./images/img6.png";
import book from "./images/books.png";
import notes from "./images/notes.png";
import shopify_image from './images/shopify_image.png'

export function Projects() {
  const navigate = useNavigate();
  const data = [
    {
      title: "E-Commerce",
      image: img6,
      client:
        "https://github.com/Mohanvijay8344/E-Commerce/tree/master/vite-project",
      server: "https://github.com/Mohanvijay8344/E-Commerce-Payment",
      demo: "https://65a60f687aa5987944da2f57--wondrous-taffy-5e8f2c.netlify.app/",
    },
    {
      title: "Money Manager",
      image: img3,
      client: "https://github.com/Mohanvijay8344/Money_manager-Frontends",
      server: "https://github.com/Mohanvijay8344/Money_Manager_Backends",
      demo: "https://zesty-starlight-ad1b59.netlify.app/",
    },
    {
      title: "Shopify Mart",
      image: shopify_image,
      client: "https://github.com/Mohanvijay8344/shopifymart_Frontend",
      server: "https://github.com/Mohanvijay8344/shopifymart_Backend",
      demo: "https://main--super-mermaid-5f22e3.netlify.app/",
    },
    {
      title: "Gold Rate Calculator",
      image: img4,
      client:
        "https://github.com/Mohanvijay8344/Gold-Rate-Calculator_Frontend/tree/master/frontend",
      server:
        "https://github.com/Mohanvijay8344/Gold-Rate-Calculator_Frontend/tree/master/frontend",
      demo: "https://gold-rate-calculator-capstone.netlify.app",
    },
    {
      title: "Notes Taking App",
      image: notes,
      client: "https://github.com/Mohanvijay8344/Notes-app-frontend-master",
      server: "https://github.com/Mohanvijay8344/Notes-app-backend-master",
      demo: "https://y-nine-eosin.vercel.app/",
    },
    {
      title: "Book Store",
      image: book,
      client: "https://github.com/Mohanvijay8344/Book_Store_Client",
      server: "https://github.com/Mohanvijay8344/Book_Store_Backend",
      demo: "https://stupendous-cupcake-6efdaf.netlify.app/",
    },
  ];

  const isTokenAvailable = () => {
    const token = localStorage.getItem("token");
    return token !== null;
  };

  return (
    <section className="portfolio">
      <h1 className="head">My Recent Work</h1>
      <div className="credentials">
        <h1>User Credentials</h1>
        <p>
          <span className="users">User Name: </span> Mohanvijay8344@gmail.com
        </p>
        <p>
          <span className="users">Password: </span> 123456789
        </p>
      </div>
      <div className="parent-div">
        <div className="container portfolio__container">
          {data.map(({ image, title, client, server, demo }) => {
            return (
              <article className="portfolio__item" key={title}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={client}
                    onClick={(e) => {
                      if (!isTokenAvailable()) {
                        e.preventDefault();
                        navigate("./signin");
                      }
                    }}
                    className={`btn ${!isTokenAvailable() ? "disabled" : ""}`}
                    target="_blank"
                  >
                    Frontend
                  </a>
                  <a
                    href={server}
                    onClick={(e) => {
                      if (!isTokenAvailable()) {
                        e.preventDefault();
                        navigate("/projects/signin");
                      }
                    }}
                    className={`btn ${!isTokenAvailable() ? "disabled" : ""}`}
                    target="_blank"
                  >
                    Backend
                  </a>
                  <a
                    href={demo}
                    onClick={(e) => {
                      if (!isTokenAvailable()) {
                        e.preventDefault();
                        navigate("/projects/signin");
                      }
                    }}
                    className={`btn btn-primary ${
                      !isTokenAvailable() ? "disabled" : ""
                    }`}
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
