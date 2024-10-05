import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "./images/the.jpg";
import "./App.css";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import "react-vertical-timeline-component/style.min.css";
import Contact from "./Contact";
import { Projects } from "./Projects";
import { About } from "./About";
import { Home } from "./Home";
import { AllSkills } from "./Skills";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { Reset } from "./components/Reset"
import { Forgot } from "./components/Forgot";
export default function App() {
  return (
    <div className="mains">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects/signin" element={<Signin />} />
        <Route path="/projects/signup" element={<Signup />} />
        <Route path="/projects/reset-password" element={<Reset />} />
        <Route path="/projects/forgot-password" element={<Forgot />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<AllSkills />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  );
}

export function Navbar()  {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="mt-0 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex gap-2 flex-ro">
              <img className="h-8 w-8 logo" src={logo} alt="Logo" />
              <span className="text-yellow-600">Mohanraj</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Me
                </Link>
                <Link
                  to="/skills"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  href="https://drive.google.com/file/d/1Lp04Fd3DJGSTT8aFcOg7Ci5xVrZgti-k/view"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Responsive menu button for smaller screens */}
          <div className="block md:hidden">
            <button
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleNav}
            >
              {isNavOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive navigation links */}
      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </Link>
            <Link
              to="/skills"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <a
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="https://drive.google.com/file/d/1084zp-h3BMJg9uIwRX2kPdakEm1u8aYX/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
