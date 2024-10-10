// src/components/PrivateRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook instead of AuthContext

const PrivateRoute = () => {
  const { currentUser } = useAuth(); // Access the currentUser using useAuth

  // If the user is not logged in, redirect to the login page
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the nested routes
  return <Outlet />;
};

export default PrivateRoute;

