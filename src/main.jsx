import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './Screens/Dashboard.jsx';
import Login from './Screens/Login.jsx';

import routes from './routes/routes.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />

    {/* <App /> */}
  </React.StrictMode>,
)
