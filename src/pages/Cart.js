// src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext'; // This imports the useCart hook
import './cart.css'; // Ensure this CSS file is created
import { MdDelete } from 'react-icons/md'; // Import delete icon from react-icons

const Cart = () => {
    const { cartItems, removeFromCart } = useCart(); // Access cartItems and removeFromCart from the context

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <div className="cart-item-details">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <button className="delete-button" onClick={() => removeFromCart(item.id)}>
                                <MdDelete size={24} />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default cart;

