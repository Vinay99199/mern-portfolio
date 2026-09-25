import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";

const API =
  import.meta.env.VITE_API_BASE_URL ||
  "https://mern-portfolio-yow3.onrender.com";

function Home() {
  const [projects, setProjects] = useState([]);
  const [contactMessage, setContactMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skills = [
    "HTML5 & CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "Java",
    "DSA",
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/api/projects/featured`);

        setProjects(response.data.data || []);
      } catch (error) {
        console.error("Projects API Error:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/api/contact`, formData);

      if (response.data.success) {
        setContactMessage(
          "Message sent successfully! I will get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setContactMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);

      setContactMessage("Error sending message. Please try again.");

      setTimeout(() => {
        setContactMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="home-page">

      {/* Hero */}
      <Hero />

      {/* Quick introduction */}
      <ScrollReveal>
        <section className="home-intro">
          <div className="home-intro-content">
            <span className="section-eyebrow">A little about me</span>

            <h2>
              I build things for the
              <span> web.</span>
            </h2>

            <p>
              I'm a developer focused on building practical, responsive and
              user-friendly web applications. I enjoy working across the
              frontend and backend and turning ideas into working products.
            </p>

            <Link to="/about" className="text-link">
              More about me →
            </Link>
          </div>

          <div className="home-intro-note">
            <span className="note-number">01</span>

            <div>
              <strong>Currently learning</strong>
              <p>
                Java, Data Structures & Algorithms and improving my
                full-stack development skills.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal>
        <section className="skills home-section">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">What I work with</span>
              <h2>Technical Skills</h2>
            </div>

            <p>
              Technologies I use while building and learning modern web
              applications.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <h3>{skill}</h3>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Projects */}
      <ScrollReveal>
        <section className="projects-section home-section">
          <div className="section-heading-row">
            <div>
              <span className="section-eyebrow">Selected work</span>
              <h2>Featured Projects</h2>
            </div>

            <Link to="/projects" className="text-link">
              View all projects →
            </Link>
          </div>

          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              ))
            ) : (
              <div className="projects-loading">
                <span></span>
                <p>Loading projects...</p>
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>

      {/* Contact */}
      <ScrollReveal>
        <section className="home-contact">
          <div className="contact-intro">
            <span className="section-eyebrow">Let's connect</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's talk.</span>
            </h2>

            <p>
              Whether it's a project, opportunity or simply a conversation,
              feel free to send me a message.
            </p>
          </div>

          <form
            className="home-contact-form"
            onSubmit={handleSubmit}
          >
            {contactMessage && (
              <div
                className={`home-message ${
                  contactMessage.includes("successfully")
                    ? "success"
                    : "error"
                }`}
              >
                {contactMessage}
              </div>
            )}

            <div className="home-form-group">
              <label htmlFor="home-name">Name</label>

              <input
                type="text"
                id="home-name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-email">Email</label>

              <input
                type="email"
                id="home-email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-message">Message</label>

              <textarea
                id="home-message"
                name="message"
                placeholder="Tell me a little about your idea..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button
              type="submit"
              className="home-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Sending..."
                : "Send message"}
            </button>
          </form>
        </section>
      </ScrollReveal>

    </main>
  );
}

export default Home;