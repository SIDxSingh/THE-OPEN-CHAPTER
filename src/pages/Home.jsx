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
  question: "What kind of books does The Open Chapter offer?",
  answer: "The Open Chapter offers a wide collection of books including fiction, non-fiction, academic, self-help, and bestsellers. Our catalog is curated to suit readers of all ages and interests."
},
{
  question: "Can I buy books online from The Open Chapter?",
  answer: "Yes, you can easily browse and purchase books through our website. We provide a smooth and secure checkout experience for all customers."
},
{
  question: "Do you deliver books across India?",
  answer: "Yes, we deliver books all over India. No matter where you are, you can order from The Open Chapter and get your books delivered to your doorstep."
},
{
  question: "How long does delivery take?",
  answer: "Delivery usually takes 3–7 business days depending on your location. Metro cities may receive orders faster, while remote areas may take slightly longer."
},
{
  question: "What are the shipping charges?",
  answer: "Shipping charges may vary based on your location and order value. We also offer free shipping on selected orders or during special promotions."
},
{
  question: "Can I track my order?",
  answer: "Yes, once your order is shipped, you will receive a tracking link via email or SMS to monitor your delivery status in real-time."
},
{
  question: "What payment methods are available?",
  answer: "We accept multiple payment options including UPI, debit/credit cards, net banking, and cash on delivery (COD) where available."
},
{
  question: "What is your return or refund policy?",
  answer: "If you receive a damaged or incorrect book, you can request a return or replacement within a specified time. Refunds are processed quickly after verification."
},
{
  question: "Do you offer discounts or special deals?",
  answer: "Yes, we regularly provide discounts, seasonal sales, and exclusive offers on selected books. Stay updated by visiting our website frequently."
},
{
  question: "Who is The Open Chapter for?",
  answer: "The Open Chapter is designed for students, book lovers, and anyone who enjoys reading. Whether you're looking for academic resources or leisure reading, we have something for everyone."
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
