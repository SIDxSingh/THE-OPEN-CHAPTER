import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <div className="section-container text-center mt-5">
        <h2>Post not found</h2>
        <Link to="/blog" className="btn-primary mt-3">Return to Blog</Link>
      </div>
    );
  }

  return (
    <main>
      <Helmet>
        <title>{post.title} | Blog | The Open Chapter</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`bookstore blog, reading habits, stylish sneakers, buy shoes online India, ${post.title}`} />
      </Helmet>

      <section className="section bg-light" style={{ minHeight: '80vh' }}>
        <div className="section-container" style={{ maxWidth: '800px' }}>
          <Link to="/blog" className="text-accent mb-4 d-inline-flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <article className="mt-4" style={{ background: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ color: 'var(--color-text-light)', marginBottom: '1rem' }}>
              {post.date} | By {post.author}
            </div>
            <h1 className="mb-4" style={{ fontSize: '2.5rem', color: 'var(--color-dark)' }}>{post.title}</h1>
            
            <div 
              className="blog-content"
              style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--color-text)' }}
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
