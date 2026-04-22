import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { getCartCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <BookOpen size={28} className="logo-icon" />
          <span>The Open Chapter</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/login" className="icon-link" aria-label="Login">
            <User size={24} />
          </Link>
          <Link to="/cart" className="icon-link cart-icon" aria-label="Cart">
            <ShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="cart-badge">{getCartCount()}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
