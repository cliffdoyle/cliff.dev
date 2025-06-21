// src/pages/BlogPage.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const BlogPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Fetch data from our new '/api/articles/' endpoint
                const response = await axios.get('http://127.0.0.1:8000/api/articles/');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <main>
            <h2>My Blog</h2>
            <p>Thoughts and learnings on technology and development.</p>
            <div className="article-list">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    );
};

export default BlogPage;