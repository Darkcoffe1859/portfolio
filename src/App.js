// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/cart'; // Ensure Cart is properly imported
import Login from './pages/Login';
import Signup from './pages/Signup'; // Add Signup import
import Products from './pages/Products';
import Header from './components/Header/Header'; // Corrected import for Header
import Footer from './components/Footer/Footer'; // Corrected import for Footer
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />  {/* Display Header at the top */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
        <Footer />  {/* Display Footer at the bottom */}
      </Router>
    </AuthProvider>
  );
}

export default App;

