// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

import './index.css'; // Your main stylesheet

// This is our main layout component
const AppLayout = () => (
  <>
    <Navbar />
    <main className="app-container">
        <Outlet /> {/* This is where the page content will be rendered */}
    </main>
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    // Add an error element page later
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/blog/:slug', // The :slug part is a URL parameter
        element: <ArticleDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);