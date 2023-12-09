// App.js

import React from 'react';

const App = () => {
  const sampleOrder = {
    product: 'Example Product',
    quantity: 3,
    totalPrice: 150,
  };

  const cardStyles = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    margin: 'auto',
  };

  const buttonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const containerStyles = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url("your-background-image.jpg")',
    backgroundSize: 'cover',
  };

  return (
    <div style={containerStyles}>
      <div style={cardStyles}>
        <h2 style={{ color: '#333', textAlign: 'center' }}>Order Details</h2>
        <p style={{ marginBottom: '8px' }}>Product: {sampleOrder.product}</p>
        <p style={{ marginBottom: '8px' }}>Quantity: {sampleOrder.quantity}</p>
        <p style={{ marginBottom: '8px' }}>Total Price: ${sampleOrder.totalPrice}</p>
        <button
          style={buttonStyles}
          onClick={"getNativeModal"}
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default App;
