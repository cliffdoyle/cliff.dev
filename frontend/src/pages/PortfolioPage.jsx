// src/pages/PortfolioPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);

    useEffect(() => {
        // --- Fetch Projects ---
        // Build the URL based on whether a tag is selected
        let projectsUrl = 'http://127.0.0.1:8000/api/projects/';
        if (selectedTag) {
            projectsUrl += `?tags__name=${selectedTag}`;
        }
        
        axios.get(projectsUrl)
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));

        // --- Fetch Tags (only once) ---
        if (tags.length === 0) {
            axios.get('http://127.0.0.1:8000/api/tags/')
                .then(response => setTags(response.data))
                .catch(error => console.error('Error fetching tags:', error));
        }
    }, [selectedTag]); // <-- Re-run the effect when selectedTag changes!

    return (
        <main>
            <h2>My Projects</h2>

            {/* --- FILTERING BUTTONS --- */}
            <div className="filter-tags">
                <button 
                    onClick={() => setSelectedTag(null)}
                    className={!selectedTag ? 'active' : ''}
                >
                    All
                </button>
                {tags.map(tag => (
                    <button 
                        key={tag.id} 
                        onClick={() => setSelectedTag(tag.name)}
                        className={selectedTag === tag.name ? 'active' : ''}
                    >
                        {tag.name}
                    </button>
                ))}
            </div>
            
            <div className="project-list">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
};

export default PortfolioPage;