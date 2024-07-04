



import React from 'react'

import UserProfileHeader from './UserProfileHeader'

import ProfileDetails from './ProfileDetails'

const Userprofile = () => {
    return (
        <div className='flex justify-between  '>

            <div><UserProfileHeader /></div>


            <div className='py-7'>

                <ProfileDetails />
            </div>

        </div>
    )
}

export default Userprofile

