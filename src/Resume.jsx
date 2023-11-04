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
      <button class="button-64" role="button">
        <span class="text">
          <a href="https://drive.google.com/file/d/1_et8uiL7_mTtSCuv3QgHuXJgGufXZgTg/view" target="_blank">
            Resume
          </a>
        </span>
      </button>
      <button class="button-64" role="button">
        <span class="text">
          <a onClick={() => contact_page()}>
          Contact
          </a>
          
        </span>
      </button>
    </div>
  );
}
