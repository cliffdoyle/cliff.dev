// src/pages/ArticleDetailPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser'; // We'll install this next

const ArticleDetailPage = () => {
    const [article, setArticle] = useState(null);
    const { slug } = useParams(); // Get the 'slug' from the URL

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                // Fetch the single article using its slug
                const response = await axios.get(`http://127.0.0.1:8000/api/articles/${slug}/`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article details:', error);
            }
        };

        fetchArticle();
    }, [slug]); // Re-run the effect if the slug changes

    if (!article) {
        return <div>Loading...</div>; // Show a loading message
    }
    
    const imageUrl = `http://127.0.0.1:8000${article.featured_image}`;

    return (
        <article className="article-detail">
            <h1>{article.title}</h1>
            <p className="article-date">
              Published on {new Date(article.published_date).toLocaleDateString(
                  'en-US', { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </p>
            {article.featured_image && 
              <img src={imageUrl} alt={article.title} className="article-detail-image" />
            }
            <div className="article-content">
              {/* This will safely render the HTML from our rich text editor */}
              {parse(article.content)} 
            </div>
        </article>
    );
};

export default ArticleDetailPage;