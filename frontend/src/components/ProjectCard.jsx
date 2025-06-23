// src/components/ProjectCard.jsx

import { FaGithub } from 'react-icons/fa';      // Imports the GitHub icon
import { CgWebsite } from 'react-icons/cg';    // Imports a generic "website" icon for live demo

const ProjectCard = ({ project }) => {
  return (
    // We use a new main class name to avoid conflicts with old styles
    <div className="new-project-card">

      {/* This container will hold the image and all overlays */}
      <div className="card-image-container">
        
        {/* Step 1: Display the background image or a placeholder */}
        {project.featured_image_url ? (
          <img
            src={project.featured_image_url}
            alt={project.title}
            className="card-img"
          />
        ) : (
          <div className="card-img-placeholder"></div>
        )}

        {/* Step 2: Add the icon links that appear on hover */}
        <div className="card-icon-links">
          {project.live_demo_url && (
            <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <CgWebsite />
            </a>
          )}
          {project.source_code_url && (
            <a href={project.source_code_url} target="_blank" rel="noopener noreferrer" aria-label="Source Code">
              <FaGithub />
            </a>
          )}
        </div>

        {/* Step 3: Add the tag badge at the bottom */}
        {/* This checks if tags exist and takes only the first one to display */}
        {project.tags && project.tags.length > 0 && (
            <div className="card-tag-overlay">
                {project.tags[0].name}
            </div>
        )}
      </div>
      
      {/* Step 4: Add the text content below the image */}
      <div className="card-text-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
      </div>

    </div>
  );
};

export default ProjectCard;