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
              <p>To be the premier independent bookstore in New Delhi, fostering a vibrant community of readers and providing a thoughtfully curated selection of books for every interest and age group. At The Open Chapter, we believe in the transformative power of books and strive to create a welcoming space for discovery, learning, and connection.</p>
              <h4>Explore Our Book Categories</h4>
              <p>We take pride in offering a diverse range of books, including:</p>
              <ul>
                <li><strong>Fiction:</strong> From contemporary bestsellers to timeless classics, immerse yourself in stories that spark the imagination.</li>
                <li><strong>Non-Fiction:</strong> Biographies, memoirs, history, self-help, and more—expand your knowledge and perspective.</li>
                <li><strong>Academic & Reference:</strong> Syllabus books, competitive exam guides, and rare academic texts for students and professionals.</li>
                <li><strong>Children’s Books:</strong> Picture books, early readers, and young adult novels to inspire the next generation of readers.</li>
                <li><strong>Poetry & Drama:</strong> Collections from Indian and international poets, as well as classic and modern plays.</li>
                <li><strong>Art, Design & Photography:</strong> Beautifully illustrated books for creative minds and visual inspiration.</li>
                <li><strong>Regional & Indian Literature:</strong> Works in Hindi and other Indian languages, celebrating our literary heritage.</li>
              </ul>
              <p>Whether you’re searching for a rare academic title, the latest literary sensation, or a magical story for your child, our knowledgeable staff is here to help you find your next great read.</p>
              <ul className="info-list">
                <li><MapPin size={20}/> 15/A, Inner Circle, Connaught Place, New Delhi - 110001</li>
                <li><Phone size={20}/> +91 6386694642</li>
                <li><Mail size={20}/> siddharthwizard123@gmail.com</li>
                <li><Globe size={20}/> <a href="https://the-open-chapter.vercel.app/" target="_blank" rel="noopener noreferrer">the-open-chapter.vercel.app</a></li>
                <li><strong>Owner:</strong> Siddharth Singh</li>
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
