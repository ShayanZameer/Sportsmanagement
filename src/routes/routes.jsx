// routes/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;
