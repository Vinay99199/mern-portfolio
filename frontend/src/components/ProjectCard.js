import React from "react";
import getProjectSummary from "../utils/projectSummary";
import getProjectTechnologies from "../utils/projectTechnologies";
import getProjectDisplayTitle from "../utils/projectDisplayTitle";
import ProjectPreview from "./ProjectPreview";

function ProjectCard({ project }) {
  if (!project) return null;

  const technologies = getProjectTechnologies(project);
  const title = getProjectDisplayTitle(project);
  const isAvonex = project.title?.toLowerCase().includes("avonex");

  return (
    <div className="project-card">
      <ProjectPreview
        image={project.image}
        title={title}
        imageClassName="project-image"
        placeholderClassName="project-image project-image-placeholder"
      />

      <div className="project-content">
        {technologies.length > 0 && (
          <div className="project-tech-badges" aria-label="Technologies used">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}
        <h3>{title}</h3>
        <p>{getProjectSummary(project)}</p>

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

          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live"
            >
              Live Demo
            </a>
          ) : isAvonex ? (
            <span
              className="live disabled"
              aria-disabled="true"
              title="Live demo is not available yet"
            >
              Live Demo
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;