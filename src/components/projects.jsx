import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800" 
               alt="Dashboard" style={{width:"100%",borderRadius:"10px"}} />

          <h3>Sales Dashboard Analytics</h3>
          <p>
            Power BI dashboard analysing sales trends, customer behavior and revenue forecasts 
            using data visualization and predictive modelling.
          </p>
          <span>Power BI • Python • SQL • Excel</span>

          <br/><br/>
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Project</a> &nbsp;|&nbsp;
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Code</a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800" 
               alt="Ecommerce" style={{width:"100%",borderRadius:"10px"}} />

          <h3>E-Commerce Website</h3>
          <p>
            Fully responsive ecommerce web application with product catalog, cart system, 
            user authentication and payment integration.
          </p>
          <span>React.js • Node.js • MongoDB • Tailwind CSS</span>

          <br/><br/>
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Project</a> &nbsp;|&nbsp;
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Code</a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=800"
               alt="ML Model" style={{width:"100%",borderRadius:"10px"}} />

          <h3>Customer Churn Prediction</h3>
          <p>
            Machine learning model that helps businesses retain customers using classification 
            algorithms and feature engineering.
          </p>
          <span>Python • Sklearn • Pandas • Matplotlib</span>

          <br/><br/>
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Project</a> &nbsp;|&nbsp;
          <a href="https://example.com" style={{color:"#6c47ff"}}>View Code</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
