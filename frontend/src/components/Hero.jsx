import { Link } from 'react-router-dom';
import Socials from './Socials';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
      <pre><h1>Cliff Omollo</h1></pre>
       <pre><h1>Full-Stack Engineer</h1></pre>
        <p>I build robust, scalable web applications from scratch, turning complex problems into elegant software solutions. Welcome to my digital space.</p>
        <Link to="/portfolio" className="hero-button">View My Work</Link>
        <Socials/>
      </div>
    </div>
  );
};

export default Hero;