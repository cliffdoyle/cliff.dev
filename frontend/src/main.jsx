// FINAL - src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar'; // Assuming your Navbar component is separate

// Import all your page components
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

// Import your main stylesheet
import './index.css';

// This is our "master template" component
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the current page's content */}
      </main>
      <footer className="footer">
        <div className="app-container">
          <p>© {new Date().getFullYear()} Cliff Omollo. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/portfolio', element: <PortfolioPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/blog/:slug', element: <ArticleDetailPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);