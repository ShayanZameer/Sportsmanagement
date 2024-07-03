// // routes/routes.jsx
// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';
// import Login from '../Screens/Login';
// import Dashboard from '../Screens/Dashboard';
// import Userprofile from '../components/Userprofile';

// import Layout from '../layout/Layout';
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout />, // Use the layout component
//         children: [
//             {
//                 path: "/",
//                 element: <Dashboard />, // Main content
//             },
//             {
//                 path: "/user-profiling",
//                 element: <Userprofile />, // User Profiling section
//             },
//         ],
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     },
// ]);

// export default router;


// routes/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Userprofile from '../components/Userprofile';
import Layout from '../layout/Layout'; // Ensure the path is correct
import Mainsection from '../components/Mainsection';

const router = createBrowserRouter([
    {
        path: "/", // Default route
        element: <Layout />, // Layout should be the wrapper
        children: [
            {
                path: "/", // Default child route
                element: <Mainsection />, // Main content
            },
            {
                path: "user-profiling",
                element: <Userprofile />, // User Profiling section
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router;

