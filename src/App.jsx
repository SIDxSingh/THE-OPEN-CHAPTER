import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages lazily loaded for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Login = React.lazy(() => import('./pages/Login'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Product = React.lazy(() => import('./pages/Product'));
const BlogList = React.lazy(() => import('./pages/BlogList'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const Categories = React.lazy(() => import('./pages/Categories'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '5rem', color: 'var(--color-mahogany)' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:slug" element={<Product />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
