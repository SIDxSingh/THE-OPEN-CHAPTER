import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(books.map((book) => book.category))].sort();
    return ['All', ...uniqueCategories];
  }, []);

  const filteredBooks = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    return books.filter((book) => {
      const matchesCategory =
        activeCategory === 'All' || book.category === activeCategory;

      const matchesSearch =
        normalizedQuery.length === 0 ||
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery) ||
        book.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main>
      <Helmet>
        <title>Book Categories | The Open Chapter</title>
        <meta
          name="description"
          content="Browse book categories at The Open Chapter and search across fiction, academic, children, self-help, and more."
        />
        <meta
          name="keywords"
          content="book categories, bookstore Delhi, fiction books, academic books, childrens books, buy books online India"
        />
        <link rel="canonical" href="https://theopenchapter.in/categories" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Book Categories | The Open Chapter" />
        <meta
          property="og:description"
          content="Explore all book categories at The Open Chapter and find your next read by title, author, or genre."
        />
        <meta property="og:url" content="https://theopenchapter.in/categories" />
        <meta property="og:site_name" content="The Open Chapter" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Book Categories | The Open Chapter" />
        <meta
          name="twitter:description"
          content="Search across all books and browse categories like fiction, academic, children, and more."
        />
      </Helmet>

      <section className="section page-header">
        <div className="section-container text-center">
          <h1>Book Categories</h1>
          <p className="section-subtitle">
            Explore by genre or search all books from one place.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="section-container">
          <div className="categories-toolbar">
            <div className="categories-search-wrapper">
              <Search size={18} className="categories-search-icon" />
              <input
                type="text"
                className="form-control categories-search-input"
                placeholder="Search by title, author, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="categories-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`category-chip ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="categories-results-count">
            Showing {filteredBooks.length} book{filteredBooks.length === 1 ? '' : 's'}
            {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
            {searchTerm.trim() ? ` for "${searchTerm.trim()}"` : ''}.
          </p>

          {filteredBooks.length > 0 ? (
            <div className="book-grid">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="card text-center">
              <h3>No books found</h3>
              <p className="text-muted">
                Try a different keyword or switch to another category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Categories;
