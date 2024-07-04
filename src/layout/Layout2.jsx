


import React from 'react';
import Navbar from '../components/Navbar';
import Playersection from '../components/Playersection';
import UserProfileHeader from '../components/UserProfileHeader';
import Userprofile from '../components/Userprofile';

const Layout2 = ({ showPlayerSection, showUserProfileHeader }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            {showPlayerSection && (
                <div>
                    <Playersection text="PLAYERS" showAddButton={true} buttonText="ADD" />

                </div>
            )}

        </div>
    );
};

export default Layout2;


