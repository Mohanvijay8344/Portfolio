import React from "react";
import { TypeAnimation } from "react-type-animation";
import profile from "./images/profile.png";
import "./App.css";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { About } from "./About";
import { AllSkills } from "./Skills";
import Contact from "./Contact";

// Home.jsx
export function Home() {
  return (
    <div className="homeMainContainer">
      <div className="home_container">
        <Homes />
      </div>
      <div className="flex flex-col">
      <Projects />
      <AllSkills />
      <About />
      <Contact />
      </div>
      
    </div>
  );
}



function Homes() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center pt-32 pb-12">
        <h1 className="font-bold Mohanraj">Hello...I'm</h1>
        <h1 className="text-5xl font-bold text-gray-900 Mohanraj ">
          Mohanraj <span className="last_name">Senthilnathan</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 glow">Mern Stack Developer</p>
        <TypeAnimation
          sequence={[
            "I Love Coding...💕💕💕",
            2000,
            "I Know HTML",
            2000,
            "I Know CSS",
            2000,
            "I Know JavaScript",
            2000,
            "I Know ReactJs",
            2000,
            "I Know MongoDb",
            2000,
            "I Know NodeJs",
            2000,
            "I Know ExpressJs",
            2000,
            "I Know Bootstrap",
            2000,
            "I Know Aws",
            2000,
          ]}
          speed={30}
          repeat={Infinity}
          style={{ fontSize: "2em", fontWeight: "bold", color: "#e08b1a" }}
        />
        <Resume />
      </div>
      
    </div>
  );
}

function Profile() {
  return (
    <div>
      <img className="profile" src={profile} alt="profile" />
    </div>
  );
}
