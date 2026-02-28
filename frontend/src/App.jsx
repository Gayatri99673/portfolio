import { useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ScrollTop from "./components/scrolltop";

const App = () => {

  useEffect(() => {

    // ── 1. SCROLL REVEAL ──────────────────────────────────────
    const reveals = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => revealObserver.observe(el));

    // ── 2. SKILL BAR ANIMATION ────────────────────────────────
    const bars = document.querySelectorAll(".skill-bar div");
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target;
            const width =
              target.style.width || target.getAttribute("data-width");
            target.style.setProperty("--bar-width", width);
            target.style.width = "0";
            setTimeout(() => target.classList.add("animated"), 50);
            barObserver.unobserve(target); // animate only once
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach((bar) => {
      bar.setAttribute("data-width", bar.style.width);
      barObserver.observe(bar);
    });

    // ── 3. HAMBURGER MENU ─────────────────────────────────────
    const ham = document.querySelector(".hamburger");
    const navUl = document.querySelector("nav ul");
    const handleHam = () => {
      ham.classList.toggle("active");
      navUl.classList.toggle("nav-open");
    };
    if (ham) ham.addEventListener("click", handleHam);

    // ── CLEANUP on unmount ────────────────────────────────────
    return () => {
      reveals.forEach((el) => revealObserver.unobserve(el));
      bars.forEach((bar) => barObserver.unobserve(bar));
      if (ham) ham.removeEventListener("click", handleHam);
    };

  }, []); // runs once after first render

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default App;
