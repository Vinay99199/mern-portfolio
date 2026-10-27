import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import ScrollReveal from "../components/ScrollReveal";
import { avonexProject, ensureAvonexProject } from "../utils/featuredProjects";

const API =
  import.meta.env.VITE_API_BASE_URL ||
  "https://mern-portfolio-yow3.onrender.com";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/api/projects`);

        const projectsData = ensureAvonexProject(response.data.data || []);

        // Fixed project order
        const order = {
          Wanderlust: 1,
          "InterviewAI – AI-Powered Job Preparation Platform": 2,
          "AVONEX – Verified Smart Ride-Sharing Platform": 3,
          "URL Shortener": 4,
          "Full Stack Portfolio Website": 5,
        };

        const sortedProjects = [...projectsData].sort((a, b) => {
          return (order[a.title] || 999) - (order[b.title] || 999);
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([avonexProject]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="page-container projects-page">
      <ScrollReveal>
        <header className="projects-page-header">
          <span className="eyebrow">Selected work</span>
          <h1>Projects built to solve real problems.</h1>
          <p>
            A collection of full-stack applications, experiments, and tools
            built through hands-on learning.
          </p>
        </header>
      </ScrollReveal>

      {loading ? (
        <div className="projects-page-state" role="status">
          <span className="projects-loading-indicator" aria-hidden="true"></span>
          <p>Loading projects...</p>
        </div>
      ) : projects.length > 0 ? (
        <div className="projects-grid projects-gallery">
          {projects.map((project) => (
            <ScrollReveal key={project._id}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="projects-page-state">
          <p>No projects found.</p>
        </div>
      )}
    </main>
  );
}

export default Projects;