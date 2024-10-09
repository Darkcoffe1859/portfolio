// src/components/ProductDetail/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetail;

