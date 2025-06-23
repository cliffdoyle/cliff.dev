// src/components/ArticleCard.jsx
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  // Format the date for better readability
  const formattedDate = new Date(article.published_date).toLocaleDateString(
    'en-US', { year: 'numeric', month: 'long', day: 'numeric' }
  );
  // const imageUrl = `http://127.0.0.1:8000${article.featured_image}`;

  return (
    <Link to={`/blog/${article.slug}`} className="article-card-link">
      <div className="article-card">
         {article.featured_image_url ? (
          <img 
            src={article.featured_image_url}
            alt={article.title} 
            className="article-card-image" 
          />
        ) : (
          // Optional: Render a placeholder if no image exists
          <div className="placeholder-image"></div>
        )}
        <div className="article-card-content">
          <h3>{article.title}</h3>
          <p className="article-date">{formattedDate}</p>
          {/* Optional: Add a short preview of content later if desired */}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;