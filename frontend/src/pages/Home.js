import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import profileImage from "../assets/vinayimage.png";
import ProjectPreview from "../components/ProjectPreview";
import getProjectSummary from "../utils/projectSummary";
import getProjectTechnologies from "../utils/projectTechnologies";
import getProjectDisplayTitle from "../utils/projectDisplayTitle";
import { avonexProject, ensureAvonexProject } from "../utils/featuredProjects";

const API =
  import.meta.env.VITE_API_BASE_URL ||
  "https://mern-portfolio-yow3.onrender.com";

const roleOptions = [
  "Aspiring Full Stack Developer",
  "MERN Stack Enthusiast",
  "Passionate Problem Solver",
];

const skillCategories = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Programming",
    items: ["Java", "JavaScript", "DSA", "OOP"],
  },
  {
    title: "Tools & Concepts",
    items: ["Git", "GitHub", "JWT", "MVC", "Postman"],
  },
];

const developmentTimeline = [
  {
    phase: "Foundation",
    title: "Computer Science learning and web fundamentals",
    text: "Building the base in JavaScript, problem solving, and modern web concepts.",
  },
  {
    phase: "Current",
    title: "Full-stack product development",
    text: "Designing and building practical features across frontend, backend, and database layers.",
  },
  {
    phase: "Growth",
    title: "Java, DSA, and interview preparation",
    text: "Strengthening problem-solving skills and preparing for technical interviews with disciplined practice.",
  },
];

function Home() {
  const [projects, setProjects] = useState([]);
  const [isProjectsLoading, setIsProjectsLoading] = useState(true);
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeletingRole, setIsDeletingRole] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/api/projects/featured`);
        setProjects(ensureAvonexProject(response.data.data || []));
      } catch (error) {
        console.error("Projects API Error:", error);
        setProjects([avonexProject]);
      } finally {
        setIsProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const currentRole = roleOptions[roleIndex];
    const isRoleComplete = typedRole === currentRole;
    const isRoleEmpty = typedRole.length === 0;
    const delay = isDeletingRole ? 45 : isRoleComplete ? 1400 : 90;

    const timer = setTimeout(() => {
      if (isDeletingRole && isRoleEmpty) {
        setIsDeletingRole(false);
        setRoleIndex((currentIndex) => (currentIndex + 1) % roleOptions.length);
      } else if (isDeletingRole) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
      } else if (isRoleComplete) {
        setIsDeletingRole(true);
      } else {
        setTypedRole(currentRole.slice(0, typedRole.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isDeletingRole, roleIndex, typedRole]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/api/contact`, formData);

      if (response.data.success) {
        setContactMessage("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setContactMessage(""), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setContactMessage("Error sending message. Please try again.");
      setTimeout(() => setContactMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="premium-home" id="top">
      <section className="hero-section container-shell">
        <div className="hero-copy">
          <span className="status-pill">
            <span className="status-dot"></span>
            Available for opportunities
          </span>

          <h1>
            Hi, I&apos;m <span>Vinay.</span>
          </h1>

          <div className="role-stack" aria-live="polite">
            <div className="role-text">{typedRole}</div>
            <span className="typing-cursor" aria-hidden="true"></span>
          </div>

          <p>
            I&apos;m a final-year Computer Science student focused on building responsive,
            scalable web applications that blend clean UX with dependable engineering.
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/Vinay99199"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vinay-jaiswal-1b470b297"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vinay profile image">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>
          <div className="visual-card">
            <img src={profileImage} alt="Vinay portrait" />
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="about-section container-shell" id="about">
          <div className="about-copy">
            <span className="eyebrow">About me</span>
            <h2>Full-stack thinking with a product mindset.</h2>
            <p>
              I’m Vinay, a Computer Science student building practical, user-friendly
              applications across the full stack. I enjoy turning ideas into working
              experiences that combine strong frontend design with reliable backend logic.
            </p>
            <p>
              My interest lies in building meaningful solutions, improving problem solving,
              and continuously learning how software systems work together in real-world use.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h3>Clean Code</h3>
            </div>
            <div className="highlight-card">
              <span>02</span>
              <h3>Full-Stack Development</h3>
            </div>
            <div className="highlight-card">
              <span>03</span>
              <h3>Problem Solving</h3>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="skills-section container-shell" id="skills">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Technical skills</span>
              <h2>Building with modern tools.</h2>
            </div>
          </div>

          <div className="skill-category-grid">
            {skillCategories.map((category) => (
              <article className="skill-category" key={category.title}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="featured-projects container-shell" id="projects">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Featured projects</span>
              <h2>Selected work.</h2>
            </div>
            <Link to="/projects" className="section-link">View All Projects</Link>
          </div>

          {isProjectsLoading ? (
            <div className="projects-loading">
              <span></span>
              <p>Loading projects...</p>
            </div>
          ) : projects.length > 0 ? (
            <div className="projects-grid-home">
              {projects.map((project) => {
                const title = getProjectDisplayTitle(project);
                const techBadges = getProjectTechnologies(project);
                const isAvonex = project.title?.toLowerCase().includes("avonex");

                return (
                  <article className="project-feature-card" key={project._id || project.title}>
                    <div className="project-visual">
                      <ProjectPreview
                        image={project.image}
                        title={title}
                        imageClassName=""
                        placeholderClassName="project-visual-placeholder"
                      />
                    </div>

                    <div className="project-body">
                      <div className="project-badges">
                        {techBadges.map((badge) => (
                          <span key={`${title}-${badge}`}>{badge}</span>
                        ))}
                      </div>

                      <h3>{title}</h3>
                      <p>{getProjectSummary(project)}</p>

                      <div className="project-actions">
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                        )}
                        {project.liveLink ? (
                          <a href={project.liveLink} target="_blank" rel="noreferrer" className="primary-link">Live Demo</a>
                        ) : isAvonex ? (
                          <span
                            className="primary-link disabled"
                            aria-disabled="true"
                            title="Live demo is not available yet"
                          >
                            Live Demo
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="projects-loading">
              <p>Featured projects are currently unavailable.</p>
            </div>
            )}
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="journey-section container-shell" id="journey">
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Development journey</span>
              <h2>Learning by building.</h2>
            </div>
          </div>

          <div className="timeline">
            {developmentTimeline.map((item, index) => (
              <article className="timeline-item" key={item.phase}>
                <div className="timeline-marker">{index + 1}</div>
                <div className="timeline-content">
                  <span>{item.phase}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="connect-section container-shell" id="contact">
          <div className="connect-copy">
            <span className="eyebrow">Let&apos;s connect</span>
            <h2>Have a project in mind? Let&apos;s talk.</h2>
            <p>
              I’m open to discussions around development opportunities, collaborative projects,
              and practical product ideas.
            </p>

            <div className="contact-links">
              <a href="mailto:jaiswalvinay539@gmail.com">jaiswalvinay539@gmail.com</a>
              <a href="https://github.com/Vinay99199" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/vinay-jaiswal-1b470b297" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="home-name">Name</label>
              <input
                id="home-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="home-email">Email</label>
              <input
                id="home-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="home-message">Message</label>
              <textarea
                id="home-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your idea..."
                rows="5"
                required
              />
            </div>

            {contactMessage && <div className="contact-status">{contactMessage}</div>}

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </ScrollReveal>
    </main>
  );
}

export default Home;