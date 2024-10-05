import React from "react";
import "./Resume.css";
import { useNavigate } from "react-router-dom";

export function Resume() {
  const navigate = useNavigate()
  function contact_page(){
    navigate("/contact")
  }
  return (
    <div className="buttons">
      <button className="button-64" role="button">
        <span className="text">
          <a href="https://drive.google.com/file/d/1Lp04Fd3DJGSTT8aFcOg7Ci5xVrZgti-k/view" target="_blank">
            Resume
          </a>
        </span>
      </button>
      <button className="button-64" role="button">
        <span className="text">
          <a onClick={() => contact_page()}>
          Contact
          </a>
          
        </span>
      </button>
    </div>
  );
}
