


// routes/routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Userprofile from '../components/Userprofile';
import Layout from '../layout/Layout'; // Ensure the path is correct
import Players from '../components/Players';
import Badgesmain from '../components/Badgesmain';

import User from '../components/User';

import Playersection from '../components/Playersection';

import Mainsection from '../components/Mainsection';

import Layout2 from '../layout/Layout2';
import Athlete from '../components/Athlete';

import ProfileDetails from '../components/ProfileDetails';

import Store from '../components/Store';

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

            {
                path: "athlete",
                element: <Athlete />
            },
            {

                path: "users",
                element: <User />

            },

            {

                path: "store",
                element: <Store />
            },


            {

                path: "players",
                element: <Players />
            },

            {

                path: "badges",
                element: <Badgesmain />

            },

        ],
    },
    {
        path: "/login",
        element: <Login />,
    },






]);

export default router;

