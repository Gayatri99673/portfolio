import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <span className="badge">Data Analyst & Web Developer</span>

      <h1 className="hero-title">Gayatri Raghuwanshi</h1>
      <p class= "hero-subtitle"> Crafting Data-Driven Solutions.</p>

      <p className="hero-sub">
        Building innovative web experiences and 
        transforming data into actionable insights with cutting-edge technology 
        and creative problem-solving.
      </p>

      <div className="hero-btns">
        <button className="btn-main">Hire Me →</button>
        <button className="btn-outline">View Projects ⭐</button>
      </div>

      <p className="scroll">Scroll Down ↓</p>

      {/* background gradient blobs */}
      <div className="blob blob-left"></div>
      <div className="blob blob-right"></div>

    </section>
  );
};

export default Hero;
