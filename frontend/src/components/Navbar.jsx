import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">MySite</NavLink>
      <ul className="nav-menu">
        <li><NavLink to="/portfolio" className="nav-link">Portfolio</NavLink></li>
        <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
        {/* We can add more links here later */}
      </ul>
    </nav>
  );
};

export default Navbar;