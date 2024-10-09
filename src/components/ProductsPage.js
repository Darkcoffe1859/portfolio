// src/components/ProductsPage.js
import { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };

        fetchProducts();
    }, []);

    return <ProductList products={products} />;
};

export default ProductsPage;

