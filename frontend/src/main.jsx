// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

import './index.css';

// The AppLayout component lives right here.
const AppLayout = () => (
  <>
    <Navbar />
    {/* This <main> tag is the wrapper we need */}
    <main className="app-container"> 
        <Outlet /> {/* This renders the content of the current page */}
    </main>
    {/* We can add a Footer component here later */}
  </>
);

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