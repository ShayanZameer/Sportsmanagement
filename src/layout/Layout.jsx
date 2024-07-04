


import React from 'react';
import Aside from '../components/Aside';
import { Outlet, useLocation } from 'react-router-dom';
import Layout2 from './Layout2';

import UserProfileHeader from '../components/UserProfileHeader';

const Layout = () => {
    const location = useLocation();
    const isUserProfilingRoute = location.pathname === "/user-profile" || location.pathname === "/athlete" || location.pathname === "/users" || location.pathname === "/store";

    console.log(isUserProfilingRoute);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="relative top-0 left-0 bottom-0 lgg:w-56 lg:w-56 xm:bg-white xmm:bg-white smm:bg-white lg:bg-[#3669C9] lgg:bg-[#3669C9] md:bg-white mdd:bg-white">
                <Aside />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar and Playersection */}
                <Layout2 showPlayerSection={!isUserProfilingRoute} showUserProfileHeader={!isUserProfilingRoute} />


                <div className="flex-1 flex  justify-between overflow-auto main-section">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;



