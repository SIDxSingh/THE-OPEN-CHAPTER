import React from 'react';
import { MapPin, Map, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const InstagramIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const LinkedinIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Contact Us | The Open Chapter</title>
        <meta name="description" content="Reach out to The Open Chapter. We are the best independent bookstore in New Delhi. Buy shoes online India, and explore our literature collection." />
        <meta name="keywords" content="contact bookstore, best bookstore Delhi, local SEO, buy shoes online India, stylish sneakers" />
      </Helmet>
      <section className="section page-header">
        <div className="section-container text-center">
          <h1>Contact Us</h1>
          <p className="section-subtitle">Reach out to us and see how we dominate local search.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="section-container">
          <div className="grid-2">
            {/* Contact Form */}
            <div className="card">
              <h3>Get In Touch</h3>
              <form className="contact-form mt-3" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="form-control" rows="4" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="btn-primary mt-2">Send Message</button>
              </form>
            </div>

            {/* Google Business & Local SEO */}
            <div className="card gb-card">
              <div className="gb-header">
                <Map size={32} className="text-accent mb-2" />
                <h3>Google Business Page Strategy</h3>
              </div>
              <div className="gb-content mt-3">
                <p>Our strategy to dominate local map packs in New Delhi involves strict adherence to Local SEO principles:</p>
                <ul className="strategy-list mt-2">
                  <li><strong>Review Generation:</strong> Automated email prompts post-purchase leading to a 4.8★ rating on Google.</li>
                  <li><strong>Weekly Posts:</strong> Updates on new arrivals, book signings, and store events published directly to GBP.</li>
                  <li><strong>Local Citations:</strong> Consistent NAP (Name, Address, Phone) across JustDial, LBB, and Yelp.</li>
                  <li><strong>Q&A Seeding:</strong> Proactively answering common customer queries directly on our Google profile.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Plugins Section */}
      <section className="section">
        <div className="section-container text-center">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-subtitle">Follow us for daily literary inspiration and store updates.</p>
          
          <div className="social-plugins-container mt-4" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <div className="social-plugin-card">
              <InstagramIcon size={40} className="social-icon instagram" />
              <h4>Instagram</h4>
              <p>@siddharthx_2000</p>
              <a href="https://www.instagram.com/the_open_chapter_x/" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-2 w-100 d-inline-block text-center" style={{textDecoration: 'none'}}>Follow</a>
            </div>
            <div className="social-plugin-card">
              <LinkedinIcon size={40} className="social-icon linkedin" color="#0077b5" />
              <h4>LinkedIn</h4>
              <p>@sidd06</p>
              <a href="https://www.linkedin.com/in/sidd06/" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-2 w-100 d-inline-block text-center" style={{textDecoration: 'none'}}>Connect</a>
            </div>
            <div className="social-plugin-card">
              <Mail size={40} className="social-icon gmail" color="#EA4335" />
              <h4>Gmail</h4>
              <p>siddharthwizard123@gmail.com</p>
              <a href="mailto:siddharthwizard123@gmail.com" className="btn-secondary mt-2 w-100 d-inline-block text-center" style={{textDecoration: 'none'}}>Email</a>
            </div>
            <div className="social-plugin-card">
              <Phone size={40} className="social-icon phone" color="#34A853" />
              <h4>Phone</h4>
              <p>+91 6386694642</p>
              <a href="tel:+916386694642" className="btn-secondary mt-2 w-100 d-inline-block text-center" style={{textDecoration: 'none'}}>Call</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
