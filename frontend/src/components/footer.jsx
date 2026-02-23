import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left */}
        <div className="footer-brand">
          <h3>Gayatri Raghuwanshi</h3>
          <p>Data Analyst & Web Developer</p>
        </div>

        {/* Right */}
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        © 2025 Gayatri Raghuwanshi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
