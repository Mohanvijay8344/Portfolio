import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import logo from "./images/the.jpg";
import "./App.css";
import { motion } from "framer-motion";
import { Chrono } from "react-chrono";
import "react-vertical-timeline-component/style.min.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Contact from "./Contact";
import { Projects } from "./Projects";
import { About } from "./About";
import { Home } from "./Home";
import { AllSkills } from "./Skills";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/skills" component={AllSkills} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8 logo" src={logo} alt="Logo" />
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
                  href="https://drive.google.com/file/d/1z35FgfFq0aEd6uYSqVF6NxchEnLvcXod/view?usp=drivesdk"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
