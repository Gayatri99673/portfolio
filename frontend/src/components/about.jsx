import React from "react";

const About = () => {
  return (
    <section id="about">
      <h1 class="section-tag"> About Me</h1>
      <h2 className="section-title">My Journey</h2>

      <div className="about-box">
        <p>
          I'm <strong className="highlight name">Gayatri Raghuwanshi</strong>, a passionate 
          Computer Science student at Shivalik College of Engineering, pursuing 
          <strong className="highlight"> B.Tech (Class of 2026)</strong>. I'm deeply enthusiastic 
          about <strong className="highlight">Data Analytics</strong> and 
          <strong className="highlight"> Web Development</strong>, constantly exploring the 
          intersection of data-driven insights and creative web solutions.
        </p>

        <p>
          My journey involves transforming complex datasets into meaningful visualizations,building responsive web applications, and leveraging modern technologies to solve real-world problems. I believe in continuous learning and staying 
          updated with the latest tech trends.
        </p>
      </div>
    </section>
  );
};

export default About;
