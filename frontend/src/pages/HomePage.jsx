// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';

const HomePage = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [latestArticles, setLatestArticles] = useState([]);

    useEffect(() => {
        // Fetch featured projects
        axios.get('http://127.0.0.1:8000/api/projects/featured/')
            .then(response => {
                setFeaturedProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching featured projects:', error);
            });

        // Fetch latest articles
        axios.get('http://127.0.0.1:8000/api/articles/featured/')
            .then(response => {
                setLatestArticles(response.data);
            })
            .catch(error => {
                console.error('Error fetching latest articles:', error);
            });
    }, []);

    return (
        <div>
            <Hero />
            <div className="app-container">
            <section className="home-section">
                <h2 className='section-title'>Featured Projects</h2>
                <div className="item-grid">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
            <section className="home-section">
                <h2 className='section-title'> Latest Articles</h2>
                <div className="item-grid">
                    {latestArticles.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
            </div>
        </div>
    );
};

export default HomePage;