import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">

      <p className="contact-tag">GET IN TOUCH</p>
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-sub">
        Have a project in mind or want to collaborate? I'd love to hear from you.
      </p>

      <div className="contact-container">

        {/* ---------------- LEFT: MESSAGE FORM ---------------- */}
        <div className="contact-form-box">
          <h3>Send Message</h3>

          <form>
            <label>Name *</label>
            <input type="text" placeholder="Your Name" />

            <label>Email *</label>
            <input type="email" placeholder="your.email@example.com" />

            <label>Subject</label>
            <input type="text" placeholder="Project Inquiry" />

            <label>Message *</label>
            <textarea rows="5" placeholder="Tell me about your project..."></textarea>

            <button className="btn-main full-btn">Send Message</button>
          </form>
        </div>

        {/* ---------------- RIGHT: INFORMATION + EDUCATION ---------------- */}
        <div className="contact-info-side">

          {/* Contact Details */}
          <div className="info-card">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> gayatri.raghuwanshi@example.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Dehradun, Uttarakhand, India</p>
          </div>

          {/* Social Links */}
          <div className="info-card">
            <h3>Connect With Me</h3>
                <div className="social-icons">
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    title="Instagram"
  >
    <FaInstagram />
  </a>
</div>

          </div>


          {/* Education Section */}
          <div className="info-card">
            <h3>Education</h3>
            <p><strong>B.Tech Computer Science (Honors)</strong></p>
            <p>Shivalik College of Engineering</p>
            <p>2022 – 2026</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
