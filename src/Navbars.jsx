import React from "react";
import "./Navbars.css"

export function Navbars() {
  return (
    <header class="nav-container">
      <nav class="nav bd-grid">
        <div>
          <a href="#" class="nav-logo">
            Levi
          </a>
        </div>

        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" class="nav-link active">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#about" class="nav-link">
                About
              </a>
            </li>
            <li class="nav-item">
              <a href="#skills" class="nav-link">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a href="#work" class="nav-link">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="nav-toggle" id="nav-toggle">
          <i class="fa-solid fa-bars" id="burgerBtn"></i>
        </div>
      </nav>
    </header>
  );
}
