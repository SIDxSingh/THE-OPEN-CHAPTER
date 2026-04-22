import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
  return (
    <main>
      <Helmet>
        <title>Blog | The Open Chapter</title>
        <meta name="description" content="Read our latest blog posts about books, reading habits, and lifestyle tips including how to buy shoes online India for the perfect reading comfort." />
        <meta name="keywords" content="bookstore blog, reading habits, stylish sneakers, buy shoes online India, book recommendations" />
      </Helmet>

      <section className="section bg-light">
        <div className="section-container">
          <h1 className="section-title text-center">Our Literary Blog</h1>
          <p className="section-subtitle text-center">Insights, tips, and lifestyle advice for the modern reader</p>
          
          <div className="grid-2 mt-5">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card" style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  {post.date} | By {post.author}
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  <Link to={`/blog/${post.slug}`} style={{ color: 'var(--color-dark)', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-accent" style={{ fontWeight: 'bold' }}>
                  Read More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogList;
