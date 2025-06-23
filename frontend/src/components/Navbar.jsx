// FINAL - src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    // The header is a full-width wrapper for the background and border
    <header className="navbar-wrapper">
      {/* The nav itself is the centered container with the items */}
      <nav className="navbar app-container">
        <NavLink to="/" className="nav-logo"></NavLink>
        <ul className="nav-menu">
          <li><NavLink to="/portfolio" className="nav-link">Projects</NavLink></li>
          <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;