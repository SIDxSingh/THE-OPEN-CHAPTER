import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { books } from '../data/books';
import { blogPosts } from '../data/blogPosts';
import BookCard from '../components/BookCard';

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main>
      <Helmet>
        <title>The Open Chapter | Best Bookstore in Delhi</title>
        <meta name="description" content="Discover the magic of literature at The Open Chapter in Connaught Place, New Delhi. Buy books online India, and explore our new merchandise including affordable shoes and stylish sneakers." />
        <meta name="keywords" content="bookstore Delhi, buy books online India, affordable shoes, stylish sneakers, buy shoes online India" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Where Every Book Finds Its Reader.</h1>
          <p>Delivering the magic of literature to the heart of Connaught Place, New Delhi. Discover our curated collection and explore our strategy for organic growth.</p>
          <div className="hero-buttons">
            <a href="#catalog" className="btn-primary">Browse Catalog</a>
            <Link to="/about" className="btn-secondary">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Book Catalog Section */}
      <section id="catalog" className="section bg-light">
        <div className="section-container">
          <h2 className="section-title text-center">Featured Collection</h2>
          <p className="section-subtitle text-center">Handpicked selections across all genres</p>
          <div className="book-grid">
            {books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section bg-dark text-light">
        <div className="section-container">
          <div className="text-center mb-4">
            <h2 className="section-title text-light">From Our Blog</h2>
            <p className="section-subtitle text-light">Insights and stories for the modern reader</p>
          </div>
          
          <div className="grid-2">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card" style={{ background: 'var(--color-light)', color: 'var(--color-dark)', padding: '2rem', borderRadius: '1rem' }}>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  {post.date}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{post.title}</h3>
                <p style={{ marginBottom: '1.5rem' }}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-accent" style={{ fontWeight: 'bold' }}>Read More &rarr;</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/blog" className="btn-primary">View All Posts</Link>
          </div>
        </div>
      </section>

      {/* Testimonial with Rating */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title text-center">What Our Readers Say</h2>
          <div className="grid-3">
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
              </div>
              <p className="testimonial-text">"The Open Chapter isn't just a bookstore, it's a sanctuary. Their selection of academic texts is unmatched in CP."</p>
              <div className="testimonial-author">- Priya M., Student</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
              </div>
              <p className="testimonial-text">"I always find the rare sci-fi books I'm looking for. The organic way they recommend books online is brilliant."</p>
              <div className="testimonial-author">- Rahul S., Developer</div>
            </div>
            <div className="testimonial-card">
              <div className="stars">
                {[1,2,3,4].map(i => <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />)}
                <Star size={16} color="var(--color-gold)" />
              </div>
              <p className="testimonial-text">"Beautiful ambiance, lovely staff, and the kids' section is fantastic. My weekend go-to place."</p>
              <div className="testimonial-author">- Anita K., Parent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Business Page */}
      <section className="section">
        <div className="section-container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <h2 className="section-title">Visit Our Store</h2>
              <p className="mb-3">Experience our curated collection of books in person. Our cozy bookstore in the heart of Delhi offers a quiet sanctuary for all bibliophiles.</p>
              <div className="gbp-features mb-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p><strong>✓ In-store shopping</strong></p>
                <p><strong>✓ In-store pick-up</strong></p>
                <p><strong>✓ Wheelchair accessible entrance</strong></p>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">View on Google Maps</a>
            </div>
            <div className="map-container" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112282200507!2d77.21442116035293!3d28.632616111003468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdef8ef7a096c4d!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="The Open Chapter Bookstore Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Organic SEO FAQs */}
      <section className="section bg-light">
        <div className="section-container faq-container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          
          <div className="faq-list">
            {[
              {
                question: "Why focus on Organic SEO instead of Paid Ads?",
                answer: "Organic SEO builds long-term authority and trust. While ads stop the moment you stop paying, high-quality content and strong technical SEO continue to bring in highly targeted readers month after month."
              },
              {
                question: "How do you optimize for local searches in Delhi?",
                answer: "By heavily optimizing our Google Business Profile, ensuring consistent NAP (Name, Address, Phone) citations across local directories, and creating location-specific content like 'Best Bookstores in CP'."
              },
              {
                question: "Do you ship books outside of New Delhi?",
                answer: "Yes! While we love seeing our customers in our Connaught Place store, we ship our books and merchandise anywhere in India. You can easily buy books online right here."
              },
              {
                question: "What makes your 'Reading Sneakers' special?",
                answer: "Our reading sneakers are designed for ultimate comfort, perfect for spending hours browsing aisles or walking to your favorite reading spot. They hit all the right notes if you're looking for stylish sneakers or affordable shoes."
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item" onClick={() => toggleFaq(index)} style={{ cursor: 'pointer', marginBottom: '1rem', background: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div className="faq-question" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ margin: 0 }}>{faq.question}</h4>
                  {openFaqIndex === index ? <ChevronUp size={20} className="text-accent" /> : <ChevronDown size={20} className="text-accent" />}
                </div>
                {openFaqIndex === index && (
                  <div className="faq-answer mt-3 open">
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
