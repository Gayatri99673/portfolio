import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setLoading(true);
      setStatus(""); 

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }

      // 🔥 Auto remove popup after 3 seconds
      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
    setLoading(false);

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };
  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const popupStyle = {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "10px",
    textAlign: "center",
    position: "relative",
    minWidth: "600px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: "10px",
    right: "15px",
    border: "none",
    background: "none",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <>
      <section id="contact">
        <p className="contact-tag">GET IN TOUCH</p>
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-sub">
          Have a project in mind or want to collaborate? I'd love to hear from
          you.
        </p>

        <div className="contact-container">
          {/* LEFT: FORM */}
          <div className="contact-form-box">
            <h3>Send Message</h3>
            <form onSubmit={handleSubmit}>
              <label>Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email *</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
              />

              <label>Message *</label>
              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="btn-main full-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-info-side">
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> gayatriraghuwanshi975@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9368758705
              </p>
              <p>
                <strong>Location:</strong> Dehradun, Uttarakhand, India
              </p>
            </div>

            <div className="info-card">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a
                  href="www.linkedin.com/in/gayatriraghuwanshi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/miss_raghuwanshii_?igsh=em45d2Y1dmhkbHV6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3>Education</h3>
              <p>
                <strong>B.Tech Computer Science</strong>
              </p>
              <p>Shivalik College of Engineering</p>
              <p>2022 – 2026</p>
               {/* ── Download CV Button (matches screenshot style) ── */}
            <a
              href="/cv/Gayatri_Raghuwanshi_CV.pdf"
              download="Gayatri_Raghuwanshi_CV.pdf"
              className="cv-download-btn"
            >
              <span className="cv-btn-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="#00d4ff"/>
                  <path d="M5 20H19V18H5V20Z" fill="#00d4ff"/>
                </svg>
              </span>
              Download CV
            </a>
            </div>
          </div>
        </div>
      </section>

      {status && (
        <div style={overlayStyle}>
          <div style={popupStyle}>
            <button onClick={() => setStatus("")} style={closeButtonStyle}>
              ✖
            </button>

            <h3 style={{ color: status === "success" ? "green" : "red" }}>
              {status === "success"
                ? "Message Sent Successfully!"
                : "Failed to send message."}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
