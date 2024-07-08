import React, { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const UserProfileHeader = () => {
    const [showButtons, setShowButtons] = useState(false);
    const location = useLocation(); // Get the current route path

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };

    // Determine the active route
    const isUserProfileActive = location.pathname === "/dashboard/user-profile";
    const isAthleteActive = location.pathname === "/dashboard/athlete";

    return (
        <div className='p-5'>
            {/* Header Section */}
            <div className='flex items-center' onClick={toggleButtons}>
                <FaLongArrowAltLeft />
                <p className='px-3 font-dmSans font-bold'>User Profile</p>
            </div>

            {/* Desktop buttons */}
            <div className={`flex flex-col py-5 flex-1 ${showButtons ? "hidden" : 'hidden'} sm:flex`}>
                <div
                    className={`w-60 h-12 px-2 py-3 cursor-pointer ${isUserProfileActive ? 'bg-[#3669C9] text-[#FFFFFF]' : 'bg-white text-black'}`}
                >
                    <Link to="/dashboard/user-profile">Profile Details</Link>
                </div>
                <div
                    className={`w-72 h-12 px-2 py-3 my-4 cursor-pointer ${isAthleteActive ? 'bg-[#3669C9] text-[#FFFFFF]' : 'bg-white text-black'}`}
                >
                    <Link to="/dashboard/athlete">Athlete Stats</Link>
                </div>
            </div>

            {/* Modal for small screens */}
            {showButtons && (
                <div id="user-profile-popup" className='absolute top-36 left-10 bg-white p-5 rounded-lg shadow-lg sm:hidden'>
                    <div
                        className={`w-40 h-10 px-2 py-3 cursor-pointer ${isUserProfileActive ? 'bg-[#3669C9] text-[#FFFFFF]' : 'bg-[#3669C9] text-[#FFFFFF]'}`}
                    >
                        <Link className="cursor-pointer" to="/dashboard/user-profile" onClick={toggleButtons}>Profile Details</Link>
                    </div>
                    <div
                        className={`w-40 h-10 px-2 py-3 my-4 cursor-pointer ${isAthleteActive ? 'bg-[#3669C9] text-[#FFFFFF]' : 'bg-white text-black'}`}
                    >
                        <Link className="cursor-pointer" to="/dashboard/athlete" onClick={toggleButtons}>Athlete Stats</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserProfileHeader;

