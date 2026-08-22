import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

function Home() {
  const API = process.env.REACT_APP_API_URL || "https://mern-portfolio-0idk.onrender.com";

  const [projects, setProjects] = useState([]);
  const [contactMessage, setContactMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skills = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "Git & GitHub",
    "Java",
    "Data Structures & Algorithms",
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API}/api/projects`);
      setProjects(response.data.data.slice(0, 2));
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API}/api/contact`,
        formData
      );

      if (response.data.success) {
        setContactMessage("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setContactMessage(""), 5000);
      }
    } catch (error) {
      setContactMessage("Error sending message. Please try again.");
      console.error("Error:", error);
      setTimeout(() => setContactMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Hero />
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.slice(0, 2).map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
          <p>Loading projects...</p>
        )}
        </div>
      </section>

{/* Contact Section */}
<section className="home-contact">
  <h2>Get In Touch</h2>

  <form className="home-contact-form" onSubmit={handleSubmit}>
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
      <label>Name</label>

      <input
        type="text"
        id="home-name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="home-form-group">
      <label>Email</label>

      <input
        type="email"
        id="home-email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className="home-form-group">
      <label>Message</label>

      <textarea
        id="home-message"
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>
    </div>

    <button
      type="submit"
      className="home-submit-btn"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>
  </form>
</section>
    </main>
  );
}

export default Home;
