import React from 'react';
import { MapPin, Map } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Contact Us & Local SEO | The Open Chapter</title>
        <meta name="description" content="Reach out to The Open Chapter. We are the best independent bookstore in New Delhi. Buy shoes online India, and explore our literature collection." />
        <meta name="keywords" content="contact bookstore, best bookstore Delhi, local SEO, buy shoes online India, stylish sneakers" />
      </Helmet>
      <section className="section page-header">
        <div className="section-container text-center">
          <h1>Contact & Local SEO</h1>
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
              <FaInstagram size={40} className="social-icon instagram" />
              <h4>Instagram</h4>
              <p>@siddharthx_2000</p>
              <a href="https://www.instagram.com/siddharthx_2000/" target="_blank" rel="noopener noreferrer" className="btn-secondary mt-2 w-100 d-inline-block text-center" style={{textDecoration: 'none'}}>Follow</a>
            </div>
            <div className="social-plugin-card">
              <FaLinkedin size={40} className="social-icon linkedin" color="#0077b5" />
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
