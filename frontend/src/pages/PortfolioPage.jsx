// src/pages/PortfolioPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard'; // ../ to go up one directory

const PortfolioPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/projects/');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <main>
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    );
};

export default PortfolioPage;