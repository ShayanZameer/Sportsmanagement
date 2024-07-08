


import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const ProtectedRoute = ({ element: Component, ...rest }) => {
    const auth = getAuth();
    const user = auth.currentUser; // Check if user is authenticated

    // Render the component if authenticated, otherwise redirect to login
    return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;


