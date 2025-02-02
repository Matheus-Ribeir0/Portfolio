import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="footer-right">
        <a href="https://github.com/Matheus-Ribeir0" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/matheus-ribeiro-301450220/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;