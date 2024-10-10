// src/components/ProductList/ProductList.js
import React from 'react';
import Product from '../Product/Product'; // Ensure Product component exists
import './ProductList.css'; // Import CSS for styling

const ProductList = () => {
  const sampleProducts = [
    { id: 1, name: 'Product 1', price: 10.0, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20.0, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 15.0, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="product-list">
      {sampleProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

