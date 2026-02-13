import React from 'react';

const ProductCard = ({ title, price, description, stockCount }) => {
  const isOutOfStock = stockCount === 0;

  return (
    <div style={styles.card}>
      {/* Stock Badge */}
      <div style={{
        ...styles.badge,
        background: isOutOfStock ? '#fee2e2' : '#dcfce7',
        color: isOutOfStock ? '#dc2626' : '#16a34a'
      }}>
        {isOutOfStock ? 'Out of Stock' : `${stockCount} in stock`}
      </div>

      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.price}>₹ {price.toLocaleString()}</div>
        
        <button 
          disabled={isOutOfStock}
          style={{
            ...styles.button,
            background: isOutOfStock ? '#e5e7eb' : '#2563eb',
            cursor: isOutOfStock ? 'not-allowed' : 'pointer'
          }}
        >
          {isOutOfStock ? 'Unavailable' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#ffffff',
    borderRadius: '16px',
    padding: '25px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '220px',
    position: 'relative',
    transition: 'transform 0.2s',
  },
  badge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  content: { marginTop: '20px' },
  title: { fontSize: '1.25rem', margin: '0 0 10px 0', color: '#1f2937' },
  description: { color: '#6b7280', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.5' },
  price: { fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '20px' },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    transition: 'background 0.2s',
  }
};

export default ProductCard;