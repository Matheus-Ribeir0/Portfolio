import React from 'react';
import './navigation.css';

function Navigation() {
  return (
    <div className="navigation_container">
      <div className="nav-links">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#tech-stack">Tech Stack</a>
        <a href="#contact-me">Contact Me</a>
      </div>
    </div>
  );
}

export default Navigation;
