import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";

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

        const projectsData = response.data.data || [];

        // Fixed project order
        const order = {
          "Wanderlust": 1,
          "InterviewAI – AI-Powered Job Preparation Platform": 2,
          "URL Shortener": 3,
          "Full Stack Portfolio Website": 4
        };

        const sortedProjects = [...projectsData].sort((a, b) => {
          return (order[a.title] || 999) - (order[b.title] || 999);
        });

        setProjects(sortedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="page-container">
      <h1>My Projects</h1>

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p>No projects found</p>
      )}
    </div>
  );
}

export default Projects;