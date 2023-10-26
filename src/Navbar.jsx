
import React, { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('about');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
      <div className="font-bold text-2xl">Mohanraj</div>
      <div className="space-x-6">
        <a
          href="#About"
          className={`text-sm font-medium ${
            activeLink === 'about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => handleLinkClick('about')}
        >
          About
        </a>
        <a
          href="#Project"
          className={`text-sm font-medium ${
            activeLink === 'project' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => handleLinkClick('project')}
        >
          Project
        </a>
        <a
          href="#Contact Me"
          className={`text-sm font-medium ${
            activeLink === 'contact' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
          }`}
          onClick={() => handleLinkClick('contact')}
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}


