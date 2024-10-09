// src/components/ProductList/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products = [] }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div className="product-item" key={product.id}>
                    <h2>{product.Name}</h2>
                    <p>{product.Description}</p>
                    <p>Price: ${product.price}</p>
                    <img src={product.imageUrl} alt={product.Name} style={{ width: '200px', height: 'auto' }} />
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;

