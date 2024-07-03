import React from 'react';
import Navbar from '../components/Navbar';
import Aside from '../components/Aside';
import Playersection from '../components/Playersection';

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="relative top-0  left-0 bottom-0  lgg:w-64 lg:w-64 xm:bg-white xmm:bg-white smm:bg-white lg:bg-[#3669C9] lgg:bg-[#3669C9] md:bg-white mdd:bg-white">
                <Aside />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar at the top */}
                <div className="w-full h-16 bg-white shadow-md border-b">
                    <Navbar />
                </div>

                <div>
                    <Playersection />
                </div>

                {/* Main content */}
                <main className="flex-1 p-4 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
