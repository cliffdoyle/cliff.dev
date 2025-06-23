// src/pages/PortfolioPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import BackButton from '../components/BackButton';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);

     // --- EFFECT #1: Fetch tags only ONCE when the component first loads ---
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tags/')
            .then(response => {
                setTags(response.data);
            })
            .catch(error => console.error('Error fetching tags:', error));
    }, []); // Note the EMPTY dependency array []

    
    // --- EFFECT #2: Fetch projects whenever the selectedTag changes ---
    useEffect(() => {
        let projectsUrl = 'http://127.0.0.1:8000/api/projects/';
        if (selectedTag) {
            projectsUrl += `?tags=${selectedTag}`;
        }
        
        axios.get(projectsUrl)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error('Error fetching projects:', error));

    }, [selectedTag]); // This effect ONLY depends on selectedTag


return (
    // A simple fragment to hold the page structure
    <> 
      <BackButton />
      <header className="page-header">
          <div className="app-container"> {/* Center the text INSIDE the header */}
              <h2 className='page-title'>My Projects</h2>
              <p className="page-subtitle">A showcase of my recent work and a journey through technology.</p>
          </div>
      </header>

      {/* A second app-container for the main content grid */}
      <div className="app-container">
        <div className="filter-tags">
            {/* ... filter buttons are correct ... */}
        </div>
        
        <div className="item-grid">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </div>
    </>
);
};

export default PortfolioPage;