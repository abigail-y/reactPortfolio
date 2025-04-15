import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Abigail Yanos. All rights reserved.</p>

      <div className="message">
      <p>
    Looking a little lost? Read <Link to="/about">about me</Link> instead!
  </p>
      </div>

      <div className="social-links">
        <a href="https://github.com/abigail-y" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/abigail-yanos/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
