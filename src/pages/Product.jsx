import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, ArrowLeft, Star, MessageSquare } from 'lucide-react';
import { books } from '../data/books';
import { useCart } from '../context/CartContext';

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  useEffect(() => {
    const foundProduct = books.find(b => b.slug === slug);
    setProduct(foundProduct);
    
    // Load reviews from local storage if available
    const storedReviews = localStorage.getItem(`reviews_${slug}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      // Mock initial review
      setReviews([
        { id: 1, name: 'Rahul S.', rating: 5, comment: 'Amazing book! Highly recommended to anyone visiting The Open Chapter.', date: new Date().toLocaleDateString() }
      ]);
    }
  }, [slug]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    
    const reviewToAdd = {
      id: Date.now(),
      ...newReview,
      date: new Date().toLocaleDateString()
    };
    
    const updatedReviews = [reviewToAdd, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${slug}`, JSON.stringify(updatedReviews));
    
    // Reset form
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  if (!product) {
    return (
      <div className="section-container text-center mt-5">
        <h2>Product not found</h2>
        <Link to="/" className="btn-primary mt-3">Return to Home</Link>
      </div>
    );
  }

  // Generate SEO keywords based on the product
  const baseKeywords = product.category === 'Merchandise' 
    ? 'buy shoes online India, stylish sneakers, affordable shoes, comfortable reading shoes' 
    : 'buy books online India, best bookstore Delhi, buy novels, academic books';
  
  const seoTitle = `${product.title} | Buy Online | The Open Chapter`;
  const seoDescription = `Buy ${product.title} by ${product.author} at The Open Chapter. We offer the best collection of ${product.category.toLowerCase()} books and merchandise in India.`;

  return (
    <main>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={`${product.title}, ${product.author}, ${baseKeywords}`} />
      </Helmet>

      <section className="section bg-light">
        <div className="section-container">
          <Link to="/" className="text-accent mb-4 d-inline-flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Back to Catalog
          </Link>
          
          <div className="grid-2 mt-4" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div className="product-image-container" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', backgroundColor: 'var(--color-parchment-dark)', aspectRatio: '3 / 4' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                width="600"
                height="800"
                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '3 / 4', objectFit: 'cover' }}
              />
            </div>
            <div className="product-info">
              <span className="badge mb-2 d-inline-block" style={{ background: 'var(--color-primary)', color: 'var(--color-light)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem' }}>
                {product.category}
              </span>
              <h1 className="mb-2" style={{ fontSize: '2.5rem', color: 'var(--color-dark)' }}>{product.title}</h1>
              <p className="mb-4" style={{ fontSize: '1.25rem', color: 'var(--color-text-light)' }}>By {product.author}</p>
              
              <div className="price-section mb-4" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--color-dark)' }}>
                {product.onSale ? (
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <span className="text-accent">₹{product.salePrice}</span>
                    <span style={{ textDecoration: 'line-through', color: 'var(--color-text-light)', fontSize: '1.25rem' }}>₹{product.price}</span>
                  </div>
                ) : (
                  <span>₹{product.price}</span>
                )}
              </div>
              
              <p className="mb-4" style={{ lineHeight: '1.6' }}>
                {product.category === 'Merchandise' 
                  ? "Elevate your reading experience with these stylish sneakers. Whether you're standing in the bookstore aisles or taking a stroll to your favorite cafe, these affordable shoes are a must-have. Buy shoes online in India from a trusted source."
                  : "Dive into this incredible piece of literature. Perfectly curated for our readers in Delhi and across India, this book is guaranteed to provide hours of intellectual stimulation and entertainment."}
              </p>
              
              <button 
                className="btn-primary" 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', justifyContent: 'center', padding: '1rem' }}
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>
          </div>
          
          {/* Reviews & Comments Section */}
          <div id="reviews" className="reviews-section mt-5" style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h2 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '2px solid var(--color-light)', paddingBottom: '1rem' }}>
              <MessageSquare size={24} className="text-accent" /> Customer Reviews
            </h2>
            
            <div className="grid-2" style={{ gap: '3rem' }}>
              {/* Write a Review Form */}
              <div className="review-form-container">
                <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>Write a Review</h3>
                <form onSubmit={handleReviewSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="reviewerName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Your Name</label>
                    <input 
                      type="text" 
                      id="reviewerName"
                      className="form-control" 
                      placeholder="John Doe"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      required
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc' }}
                    />
                  </div>
                  
                  <div className="form-group mb-3">
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Rating</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button 
                          type="button" 
                          key={star}
                          onClick={() => setNewReview({...newReview, rating: star})}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          <Star 
                            size={24} 
                            fill={star <= newReview.rating ? 'var(--color-accent)' : 'none'} 
                            color={star <= newReview.rating ? 'var(--color-accent)' : '#ccc'} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group mb-3">
                    <label htmlFor="reviewComment" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Your Comment</label>
                    <textarea 
                      id="reviewComment"
                      className="form-control" 
                      rows="4" 
                      placeholder="What did you think about this book?"
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      required
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #ccc', resize: 'vertical' }}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                    Submit Review
                  </button>
                </form>
              </div>
              
              {/* Display Reviews */}
              <div className="reviews-list">
                <h3 className="mb-3" style={{ fontSize: '1.25rem' }}>Read Reviews</h3>
                {reviews.length === 0 ? (
                  <p className="text-muted">No reviews yet. Be the first to review this book!</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {reviews.map((review) => (
                      <div key={review.id} className="review-card" style={{ padding: '1rem', background: 'var(--color-light)', borderRadius: '0.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                          <div>
                            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{review.name}</h4>
                            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>{review.date}</span>
                          </div>
                          <div style={{ display: 'flex', gap: '0.2rem' }}>
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                fill={i < review.rating ? 'var(--color-accent)' : 'none'} 
                                color={i < review.rating ? 'var(--color-accent)' : '#ccc'} 
                              />
                            ))}
                          </div>
                        </div>
                        <p style={{ margin: 0, lineHeight: '1.5' }}>{review.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
};

export default Product;
