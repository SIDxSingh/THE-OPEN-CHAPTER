import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <main className="cart-page">
        <section className="section bg-light text-center" style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <BookOpen size={64} className="text-accent mb-4" />
          <h2>Your Kart is Empty</h2>
          <p className="mt-2 mb-4">Looks like you haven't added any books to your kart yet.</p>
          <Link to="/" className="btn-primary">Browse Catalog</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="section page-header">
        <div className="section-container">
          <h1>Your Shopping Kart</h1>
          <p className="section-subtitle">Review your selected items before checkout.</p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="section-container">
          <div className="cart-grid">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-img" width="80" height="100" loading="lazy" />
                  <div className="cart-item-details">
                    <h3>{item.title}</h3>
                    <p className="text-small text-muted">{item.author}</p>
                    <div className="cart-item-price">
                      ₹{item.onSale ? item.salePrice : item.price}
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus size={16} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus size={16} />
                      </button>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary card">
              <h3>Order Summary</h3>
              <div className="summary-row mt-3">
                <span>Subtotal</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-3" />
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{getCartTotal()}</span>
              </div>
              <button className="btn-primary w-100 mt-4">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
