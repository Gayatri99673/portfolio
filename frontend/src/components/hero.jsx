import React from "react";

const Hero = () => {
  return (
    <section className="hero vibrant-section">
      {/* Blobs */}
      <div className="vblob vblob-purple-large vblob-a1" />
      <div className="vblob vblob-cyan-mid vblob-a2" />
      <div className="vblob vblob-purple-small vblob-a3" />
      {/* Particles */}
      <div className="vparticle vp-cyan vp1" />
      <div className="vparticle vp-purple vp2" />
      <div className="vparticle vp-cyan vp3" />
      <div className="vparticle vp-purple vp4" />
      <div className="vparticle vp-cyan vp5" />
      <div className="vparticle vp-purple vp6" />
      <div className="vparticle vp-cyan vp7" />
      <div className="vparticle vp-purple vp8" />

      {/* ...your existing content unchanged... */}

      <span className="badge">Data Analyst & Web Developer</span>

      <h1 className="hero-title">Gayatri Raghuwanshi</h1>
      <p class="hero-subtitle"> Crafting Data-Driven Solutions.</p>

      <p className="hero-sub">
        Building innovative web experiences and transforming data into
        actionable insights with cutting-edge technology and creative
        problem-solving.
      </p>

      <div className="hero-btns">
        <button
          className="btn-main"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Hire Me →
        </button>
        <button
          className="btn-outline"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          View Projects ⭐
        </button>
      </div>

     

      {/* background gradient blobs */}
      <div className="blob blob-left"></div>
      <div className="blob blob-right"></div>

      
    </section>
  );
};

export default Hero;
