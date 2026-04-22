import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <BookOpen size={24} className="logo-icon text-accent" />
              <span className="text-light">The Open Chapter</span>
            </div>
            <p className="mt-3 text-small">A sanctuary for bibliophiles in the heart of Delhi. Buy the best books, from fiction to academic texts, at our cozy store.</p>
            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/siddharthx_2000/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="https://www.linkedin.com/in/sidd06/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Our Blog</Link></li>
              <li><Link to="/login">My Account</Link></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Visit Us</h4>
            <p className="text-small">15/A, Inner Circle<br/>Connaught Place<br/>New Delhi - 110001</p>
            <p className="text-small mt-2"><strong>Phone:</strong> +91 98765 43210</p>
            <p className="text-small"><strong>Email:</strong> hello@theopenchapter.in</p>
          </div>
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p className="text-small mb-2">Subscribe to our newsletter for the latest book releases and exclusive merchandise.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input type="email" placeholder="Your email address" required style={{ padding: '0.5rem', borderRadius: '0.5rem', border: 'none', flex: 1 }} />
              <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1rem' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Open Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
