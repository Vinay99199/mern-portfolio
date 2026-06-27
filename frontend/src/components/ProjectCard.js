import React from "react";

function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="project-card">
      <img
        src={project.image || "/fallback.png"}
        alt={project.title || "Project Image"}
        className="project-image"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "/fallback.png"; 
        }}
      />

      <div className="project-content">
        <h3>{project.title || "No Title"}</h3>
        <p>{project.description || "No Description Available"}</p>

        <div className="project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>
          )}

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;