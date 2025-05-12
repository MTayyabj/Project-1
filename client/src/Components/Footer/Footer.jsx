import React from "react";
import Facebook from "../../assets/facebook.png";
import { Link } from "react-router-dom"; // Import Link
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/share/167tZrpBcR/" aria-label="Facebook">
        <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/official.tahmas/" target="_blank" aria-label="Instagram">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"  alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/naik-muhammad-ansari-2b5b60289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/MTayyabj" target="_blank" aria-label="GitHub">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
      </a>
        <a href="https://www.youtube.com/@TJsketches" aria-label="YouTube">
          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />
        </a>
      </div>

      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/policy">Policy</Link></li>
      </ul> 

      <div className="footer-bottom">
        <p>Copyright ©2024; Designed by <span>Tayyab</span></p>
      </div>
    </footer>
  );
};  

export default Footer;
