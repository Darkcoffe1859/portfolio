// src/components/Header/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>My E-Commerce Site</h1>
            <nav>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/products" activeClassName="active-link">Products</NavLink></li>
                    <li><NavLink to="/cart" activeClassName="active-link">Cart</NavLink></li>
                    <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
                </ul>
            </nav>
            <form className="search-form">
                <input type="text" placeholder="Search products..." />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

export default Header;

