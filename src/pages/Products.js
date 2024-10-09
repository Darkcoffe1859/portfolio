// src/pages/Products.js
import React from 'react';
import ProductList from '../components/ProductList/ProductList';

function Products() {
  return (
    <div>
      <h2>Our Products</h2>
      <ProductList /> {/* This component fetches and displays the products */}
    </div>
  );
}

export default Products;

