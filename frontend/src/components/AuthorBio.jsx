// src/components/AuthorBio.jsx

const AuthorBio = ({ article }) => {
  // Don't render anything if there's no author info
  if (!article.author_username) {
    return null;
  }
  
  // const imageUrl = `http://127.0.0.1:8000${article.author_image}`;

  return (
    <div className="author-bio-box">
      {article.author_image_url && (
        <img src={article.author_image_url} alt={article.author_username} className="author-image" />
      )}
      <div className="author-info">
        <p className="author-written-by">WRITTEN BY</p>
        <h4 className="author-name">{article.author_username}</h4>
        <p className="author-bio">{article.author_bio}</p>
      </div>
    </div>
  );
};

export default AuthorBio;