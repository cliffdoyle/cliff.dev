// CORRECTED - src/pages/ArticleDetailPage.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse, { domToReact } from 'html-react-parser'; // Make sure domToReact is imported
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 
import AuthorBio from '../components/AuthorBio'
import BackButton from '../components/BackButton';

const ArticleDetailPage = () => {
    const [article, setArticle] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/articles/${slug}/`);
                setArticle(response.data);
            } catch (error) {
                console.error('Error fetching article details:', error);
            }
        };
        fetchArticle();
    }, [slug]);
    
    // --- THIS IS THE FIX ---
    // Define the 'options' object in the main component scope
    const options = {
        replace: ({ name, attribs, children }) => {
            // Find code blocks formatted by CKEditor
            if (name === 'pre' && children[0]?.name === 'code') {
                const codeElement = children[0];
                const lang = codeElement.attribs.class?.replace('language-', '') || 'plaintext';
                // Use domToReact to properly get the text content
                const codeText = domToReact(codeElement.children).toString() || '';

                return (
                    <SyntaxHighlighter language={lang} style={a11yDark} showLineNumbers>
                        {String(codeText).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                );
            }
            // Add a rule to add a class to external links
            if (name === 'a' && attribs.href) {
                if (attribs.href.startsWith('http')) {
                    attribs.target = '_blank';
                    attribs.rel = 'noopener noreferrer';
                    attribs.class = 'external-link';
                }
            }
        },
    };

    if (!article) return <div>Loading...</div>;
    
  return (
    
      <article className="article-detail">
        <BackButton/>
        <header className="article-header">
          <h1>{article.title}</h1>
          <div className="article-meta">
            {/* Check if the author exists before displaying */}
            {article.author_username && <p className="article-author">By {article.author_username}</p>}
            <p className="article-date">
              Published on {new Date(article.published_date).toLocaleDateString(
                  'en-US', { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </p>
          </div>
        </header>
        
        <div className="article-content">
          {parse(article.content, options)} 
        </div>
            {article && <AuthorBio article={article} />}
        
    </article>
);
};

export default ArticleDetailPage;