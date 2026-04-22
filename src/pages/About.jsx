import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us | The Open Chapter</title>
        <meta name="description" content="Discover the story behind The Open Chapter, Delhi's favorite independent bookstore offering literature, academic texts, and unique merchandise like stylish sneakers." />
        <meta name="keywords" content="about The Open Chapter, independent bookstore Delhi, literature, buy shoes online India" />
      </Helmet>
      <section className="section page-header">
        <div className="section-container text-center">
          <h1>About Us</h1>
          <p className="section-subtitle">Discover the story behind Delhi's favorite independent bookstore.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="section-container">
          <div className="grid-2">
            <div className="card about-card">
              <h3>Our Mission</h3>
              <p>To be the premier independent bookstore in New Delhi, fostering a community of readers and providing a curated selection of literature, academic texts, and unique finds.</p>
              <ul className="info-list">
                <li><MapPin size={20}/> 15/A, Inner Circle, Connaught Place, New Delhi - 110001</li>
                <li><Phone size={20}/> +91 98765 43210</li>
                <li><Mail size={20}/> hello@theopenchapter.in</li>
                <li><Globe size={20}/> www.theopenchapter.in</li>
              </ul>
            </div>
            <div className="image-placeholder about-image"></div>
          </div>
        </div>
      </section>

      {/* Target Audience Personas */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title text-center">Our Audience Personas</h2>
          <p className="section-subtitle text-center">Understanding our core demographic in Delhi to tailor our organic strategy.</p>
          
          <div className="grid-3">
            <div className="persona-card">
              <div className="persona-header">
                <div className="persona-avatar">AR</div>
                <div>
                  <h3>The Academic Researcher</h3>
                  <span className="persona-tag">Age: 20-35 | Student/Prof</span>
                </div>
              </div>
              <p>Looking for specific syllabus books, rare academic texts, and quiet places to study. Values deep selection and knowledgeable staff.</p>
              <div className="search-intent">
                <strong>Search Intent:</strong> "buy sociology books connaught place"
              </div>
            </div>
            
            <div className="persona-card">
              <div className="persona-header">
                <div className="persona-avatar">LW</div>
                <div>
                  <h3>The Literature Walker</h3>
                  <span className="persona-tag">Age: 25-50 | Professional</span>
                </div>
              </div>
              <p>Enjoys browsing physical books, values aesthetics, attends weekend events. Seeking fiction, poetry, and beautiful editions.</p>
              <div className="search-intent">
                <strong>Search Intent:</strong> "best bookstores in cp for fiction"
              </div>
            </div>
            
            <div className="persona-card">
              <div className="persona-header">
                <div className="persona-avatar">YP</div>
                <div>
                  <h3>The Young Parent</h3>
                  <span className="persona-tag">Age: 30-45 | Parent</span>
                </div>
              </div>
              <p>Looking for children's books, educational materials, and a welcoming environment for kids.</p>
              <div className="search-intent">
                <strong>Search Intent:</strong> "childrens book shop delhi"
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
