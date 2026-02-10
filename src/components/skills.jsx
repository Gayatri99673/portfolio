import React from "react";

const Skills = () => {
  return (
    <section id="skills">

      {/* ===== Title + Subtitle Section (New Added) ===== */}
      <div className="skills-header">
        <p className="skills-tag">WHAT I DO</p>
        <h2 className="section-title">My Skills & Expertise</h2>
        <p className="skills-subtext">
         My technical toolkit includes expertise in <b>Data Analytics</b>, 
    <b> Web Development</b>, <b>Databases</b> and <b>Machine Learning</b>. 
    I work with modern tools and frameworks to build interactive web 
    solutions, visualize insights, and create efficient ML pipelines with 
    clean, maintainable code.
        </p>
      </div>

      {/* =================== Skill Cards =================== */}
      <div className="skills-grid">

        {/* ================= Data Analytics ================= */}
        <div className="skill-card">
          <h3><div class="gradient-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column w-6 h-6" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
           Data Analytics
           </h3>

          <div className="skill-item"><span>Python</span><span>90%</span><div className="skill-bar"><div style={{width:"90%"}}></div></div></div>
          <div className="skill-item"><span>SQL</span><span>85%</span><div className="skill-bar"><div style={{width:"85%"}}></div></div></div>
          <div className="skill-item"><span>Power BI</span><span>88%</span><div className="skill-bar"><div style={{width:"88%"}}></div></div></div>
          <div className="skill-item"><span>Excel</span><span>92%</span><div className="skill-bar"><div style={{width:"92%"}}></div></div></div>
          <div className="skill-item"><span>Tableau</span><span>80%</span><div className="skill-bar"><div style={{width:"80%"}}></div></div></div>
          <div className="skill-item"><span>Statistics</span><span>85%</span><div className="skill-bar"><div style={{width:"85%"}}></div></div></div>
        </div>

        {/* ================= Web Development ================= */}
        <div className="skill-card">
          <h3><div class="gradient-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code w-6 h-6" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> </div>Web Development</h3>

          <div className="skill-item"><span>HTML & CSS</span><span>95%</span><div className="skill-bar"><div style={{width:"95%"}}></div></div></div>
          <div className="skill-item"><span>JavaScript</span><span>88%</span><div className="skill-bar"><div style={{width:"88%"}}></div></div></div>
          <div className="skill-item"><span>React.js</span><span>85%</span><div className="skill-bar"><div style={{width:"85%"}}></div></div></div>
          <div className="skill-item"><span>Node.js</span><span>80%</span><div className="skill-bar"><div style={{width:"80%"}}></div></div></div>
          <div className="skill-item"><span>Tailwind CSS</span><span>90%</span><div className="skill-bar"><div style={{width:"90%"}}></div></div></div>
          <div className="skill-item"><span>Responsive Design</span><span>92%</span><div className="skill-bar"><div style={{width:"92%"}}></div></div></div>
        </div>

        {/* ================= Database & Tools ================= */}
        <div className="skill-card">
          <h3><div class="gradient-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database w-6 h-6" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div>Database & Tools</h3>

          <div className="skill-item"><span>MongoDB</span><span>82%</span><div className="skill-bar"><div style={{width:"82%"}}></div></div></div>
          <div className="skill-item"><span>MySQL</span><span>85%</span><div className="skill-bar"><div style={{width:"85%"}}></div></div></div>
          <div className="skill-item"><span>PostgreSQL</span><span>78%</span><div className="skill-bar"><div style={{width:"78%"}}></div></div></div>
          <div className="skill-item"><span>Git</span><span>88%</span><div className="skill-bar"><div style={{width:"88%"}}></div></div></div>
          <div className="skill-item"><span>Jupyter</span><span>90%</span><div className="skill-bar"><div style={{width:"90%"}}></div></div></div>
          <div className="skill-item"><span>VS Code</span><span>95%</span><div className="skill-bar"><div style={{width:"95%"}}></div></div></div>
        </div>

        {/* ================= Machine Learning ================= */}
        <div className="skill-card">
          <h3><div class="gradient-box"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-6 h-6" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg></div> Machine Learning</h3>

          <div className="skill-item"><span>Pandas</span><span>88%</span><div className="skill-bar"><div style={{width:"88%"}}></div></div></div>
          <div className="skill-item"><span>NumPy</span><span>85%</span><div className="skill-bar"><div style={{width:"85%"}}></div></div></div>
          <div className="skill-item"><span>Scikit-learn</span><span>80%</span><div className="skill-bar"><div style={{width:"80%"}}></div></div></div>
          <div className="skill-item"><span>Data Preprocessing</span><span>87%</span><div className="skill-bar"><div style={{width:"87%"}}></div></div></div>
          <div className="skill-item"><span>Feature Engineering</span><span>82%</span><div className="skill-bar"><div style={{width:"82%"}}></div></div></div>
          <div className="skill-item"><span>Model Evaluation</span><span>78%</span><div className="skill-bar"><div style={{width:"78%"}}></div></div></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
