import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="vibrant-section">
      <div className="vblob vblob-purple-large vblob-a1-alt"></div>
      <div className="vblob vblob-cyan-mid vblob-a2-alt"></div>

      <h1 className="section-tag">Highlights</h1>
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">

        {/* Project 1: Quila Beauty */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
            alt="Quila Beauty"
            style={{ width: "100%", borderRadius: "10px", height: "200px", objectFit: "cover" }}
          />
          <h3>Quila Beauty</h3>
          <p>
            An all-in-one web portal designed for beauticians and salon owners, enabling clients to discover services, book online appointments, and manage schedules seamlessly.
          </p>
          <span className="project-tech-stack">React.js • HTML5 • CSS3 • Bootstrap</span>
          {/* <div className="project-links">
            <a 
              href="https://gayatri99673.github.io/quila-beauty/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Live Demo
            </a>
            <a 
              href="https://github.com/Gayatri99673/quila-beauty" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Code
            </a>
          </div> */}
        </div>

        {/* Project 2: School Management System */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            alt="School Management System"
            style={{ width: "100%", borderRadius: "10px", height: "200px", objectFit: "cover" }}
          />
          <h3>School Management System</h3>
          <p>
            A multi-role academic platform supporting student registration, attendance trackers, course catalogs, teacher profiles, and grade management with dynamic search.
          </p>
          <span className="project-tech-stack">React.js • HTML5 • CSS3 • Bootstrap</span>
          {/* <div className="project-links">
            <a 
              href="https://gayatri99673.github.io/school-management-system/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Live Demo
            </a>
            <a 
              href="https://github.com/Gayatri99673/school-management-system" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Code
            </a>
          </div> */}
        </div>

        {/* Project 3: Portfolio - MERN */}
        <div className="project-card">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800"
            alt="MERN Portfolio"
            style={{ width: "100%", borderRadius: "10px", height: "200px", objectFit: "cover" }}
          />
          <h3>Personal Portfolio Website</h3>
          <p>
            A high-performance full-stack personal portfolio using a MERN architecture, featuring modern glassmorphic designs, contact form logging, and robust REST APIs.
          </p>
          <span className="project-tech-stack">React.js • Node.js • Express.js • MongoDB • CSS3</span>
          {/* <div className="project-links">
            <a 
              href="https://gayatri99673.github.io/portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Live Demo
            </a>
            <a 
              href="https://github.com/Gayatri99673/portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Code
            </a>
          </div> */}
        </div>

      </div>
    </section>
  );
};

export default Projects;
