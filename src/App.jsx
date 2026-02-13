import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Library from './Library'; // Make sure filename matches
import ProductCard from './ProductCard';
import SchoolSystem from './SchoolSystem';

// Helper for active link styling
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link 
      to={to} 
      style={isActive ? { ...styles.link, ...styles.activeLink } : styles.link}
    >
      {children}
    </Link>
  );
};

function App() {
  // Data for the Store Page
  const products = [
    { id: 1, title: "Wireless Headphones", price: 9900, description: "Noise-canceling, 20h battery", stockCount: 15 },
    { id: 2, title: "Smart Watch", price: 3000, description: "Health tracking & notifications", stockCount: 0 },
    { id: 3, title: "Mechanical Keyboard", price: 12000, description: "RGB Backlit, Blue Switches", stockCount: 5 },
    { id: 4, title: "Gaming Mouse", price: 1500, description: "High DPI, Programmable buttons", stockCount: 8 },
    { id: 5, title: "Gaming Laptop", price: 150000, description: "RTX 4060, 32GB RAM", stockCount: 2 },
  ];

  return (
    <Router>
      <div style={styles.appContainer}>
        
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <div style={styles.navContent}>
            <div style={styles.navLinks}>
              <NavLink to="/">Store</NavLink>
              <NavLink to="/library">Library</NavLink>
              <NavLink to="/school">School</NavLink>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div style={styles.mainWrapper}>
          <Routes>
            
            {/* 1. Store Route */}
            <Route path="/" element={
              <div style={styles.pageContainer}>
                <header style={styles.pageHeader}>
                  <h1 style={styles.pageTitle}>Tech Store</h1>
                  <p style={styles.pageSubtitle}>Latest gadgets and gear</p>
                </header>
                <div style={styles.productGrid}>
                  {products.map(product => (
                    <ProductCard
                      key={product.id}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                      stockCount={product.stockCount}
                    />
                  ))}
                </div>
              </div>
            } />

            {/* 2. Library Route */}
            <Route path="/library" element={<Library />} />

            {/* 3. School System Route */}
            <Route path="/school" element={<SchoolSystem />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    background: '#f3f4f6',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    background: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: '1.5rem',
    fontWeight: '800',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: { display: 'flex', gap: '8px' },
  link: {
    textDecoration: 'none',
    color: '#4b5563',
    fontWeight: '600',
    padding: '8px 16px',
    borderRadius: '6px',
    transition: 'all 0.2s',
  },
  activeLink: { background: '#eff6ff', color: '#2563eb' },
  mainWrapper: { flex: 1, width: '100%' },
  pageContainer: { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' },
  pageHeader: { marginBottom: '40px', textAlign: 'center' },
  pageTitle: { fontSize: '2.5rem', color: '#111827', marginBottom: '10px', fontWeight: '800' },
  pageSubtitle: { color: '#6b7280', fontSize: '1.1rem' },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    justifyContent: 'center',
  }
};

export default App;