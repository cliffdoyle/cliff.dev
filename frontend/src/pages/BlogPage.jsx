// CORRECTED - src/pages/BlogPage.jsx

import { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleCard from '../components/ArticleCard';

const BlogPage = () => {
    const [articles, setArticles] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTag, setSelectedTag] = useState(null);
 // --- EFFECT #1: Fetch tags only ONCE ---
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tags/')
            .then(response => {
                setTags(response.data);
            })
            .catch(error => console.error('Error fetching tags:', error));
    }, []); // Empty dependency array []

    // --- EFFECT #2: Fetch articles when selectedTag changes ---
    useEffect(() => {
        let articlesUrl = 'http://127.0.0.1:8000/api/articles/';
        if (selectedTag) {
            articlesUrl += `?tags=${selectedTag}`;
        }

        axios.get(articlesUrl)
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => console.error('Error fetching articles:', error));

    }, [selectedTag]); // Dependency on selectedTag
    return (
        <main>
            <h2>My Blog</h2>
            <p>Thoughts and learnings on technology and development.</p>

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

            <div className="article-list">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    );
};

export default BlogPage;