// src/pages/Home.js
import React from 'react';
import './Home.css';
import ProductList from '../components/ProductList/ProductList';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Stylish product for modern living.',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1703174323653-0455deaf7f11?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Durable and reliable item for everyday use.',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1681880096619-0fe10e24b048?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'A versatile product for any occasion.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1646109324106-2427a6341f55?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Perfect for maximizing your workspace.',
      price: 59.99,
      image: 'https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?w=500&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to FirstShop</h1>
        <p>Your one-stop shop for quality products</p>
        <button className="shop-now-button">Shop Now</button>
      </div>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <ProductList products={products} />
      </section>
    </div>
  );
}

export default Home;

