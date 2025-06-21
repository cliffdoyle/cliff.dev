import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Cliff O. - Full-Stack Engineer</h1>
        <p>I build robust, scalable web applications from scratch, turning complex problems into elegant software solutions. Welcome to my digital space.</p>
        <Link to="/portfolio" className="hero-button">View My Work</Link>
      </div>
    </div>
  );
};

export default Hero;