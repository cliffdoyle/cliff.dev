// src/components/ProjectCard.jsx

// We pass 'project' as a prop from App.jsx
const ProjectCard = ({ project }) => {
  // Construct the full image URL
  // const imageUrl = `http://127.0.0.1:8000${project.featured_image}`;

  return (
    <div className="project-card">
       {project.featured_image_url ? (
        <img
          src={project.featured_image_url}
          alt={project.title}
          className="project-card-image"
        />
      ) : (
        // You can add a placeholder for projects too if you like
        <div className="placeholder-image" style={{height: '200px'}}></div>
      )}
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
           {/* --- ADD THIS SECTION --- */}
        <div className="tag-list">
          {project.tags.map(tag => (
            <span key={tag.id} className="tag">{tag.name}</span>
          ))}
        </div>
        {/* --- END OF NEW SECTION --- */}
        <div className="card-links">
          {project.live_demo_url && <a href={project.live_demo_url} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          {project.source_code_url && <a href={project.source_code_url} target="_blank" rel="noopener noreferrer">Source Code</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;