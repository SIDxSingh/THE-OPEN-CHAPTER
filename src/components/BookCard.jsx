import React from 'react';
import { ShoppingCart, Star, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <Link to={`/product/${book.slug}`} className="book-image-container" style={{ display: 'block', textDecoration: 'none', backgroundColor: 'var(--color-parchment-dark)', aspectRatio: '3 / 4' }}>
        <img src={book.image?.default || book.image} alt={book.title} className="book-image" loading="lazy" width="300" height="400" style={{ aspectRatio: '3 / 4', objectFit: 'cover' }} />
        {book.onSale && <span className="sale-badge">Sale</span>}
        <div className="book-category">{book.category}</div>
      </Link>
      <div className="book-details">
        <Link to={`/product/${book.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="book-title">{book.title}</h3>
        </Link>
        <p className="book-author">{book.author}</p>
        
        <div className="book-rating" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={14} fill="var(--color-accent)" color="var(--color-accent)" />
            ))}
          </div>
          <Link to={`/product/${book.slug}#reviews`} style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <MessageSquare size={12} /> Give Review
          </Link>
        </div>
        <div className="book-price-container">
          {book.onSale ? (
            <>
              <span className="book-price sale">₹{book.salePrice}</span>
              <span className="book-price original">₹{book.price}</span>
            </>
          ) : (
            <span className="book-price">₹{book.price}</span>
          )}
        </div>
        <button
          className="btn-primary w-100 add-to-cart-btn"
          onClick={() => addToCart(book)}
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
