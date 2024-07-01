import React from "react";
import "./Navbars.css"

export function Navbars() {
  return (
    <header className="nav-container">
      <nav className="nav bd-grid">
        <div>
          <a href="#" className="nav-logo">
            Levi
          </a>
        </div>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#home" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link">
                Work
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-toggle" id="nav-toggle">
          <i className="fa-solid fa-bars" id="burgerBtn"></i>
        </div>
      </nav>
    </header>
  );
}
