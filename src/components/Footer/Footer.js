import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Core Tech Solutions</h3>
            <p>Your partner for innovative web development and digital marketing solutions.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/web-applications">Web Applications</Link></li>
              <li><Link to="/services/chat-bots">Chat Bots</Link></li>
              <li><Link to="/services/google-ads">Google Ads</Link></li>
              <li><Link to="/services/social-media">Social Media Marketing</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about" onClick={() => scrollToSection('about')}>About Us</a></li>
              <li><a href="/#portfolio" onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              <li><a href="/#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2020-2025 Core Tech Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;