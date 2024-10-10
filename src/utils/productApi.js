// src/utils/productApi.js
import axios from 'axios';

export const fetchBeautyProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/category/jewelery'); // Example category
    return response.data; // Array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

