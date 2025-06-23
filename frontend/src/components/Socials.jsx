
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
  // Replace these with your actual profile links!
  const githubUrl = "https://github.com/cliffdoyle";
  const linkedinUrl = "https://www.linkedin.com/in/cliff-omollo-14b442269";

  return (
    <div className="socials-container">
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      )}
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      )}
      {/* You can add more icons here for Twitter, etc. */}
    </div>
  );
};

export default Socials;