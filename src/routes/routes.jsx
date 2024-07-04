


// routes/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Userprofile from '../components/Userprofile';
import Layout from '../layout/Layout'; // Ensure the path is correct

import Playersection from '../components/Playersection';

import Mainsection from '../components/Mainsection';

import Layout2 from '../layout/Layout2';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [

            {
                path: "/",
                element: <Mainsection />,
            },
            {
                path: "user-profile",
                element: <Userprofile />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;

