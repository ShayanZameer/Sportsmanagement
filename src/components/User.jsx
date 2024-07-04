import React from 'react';

import Playersection from './Playersection';

import Userdetail from './Userdetail';

const User = () => {
    return (
        <div>

            <div >

                <Playersection text="USERS" showAddButton={false} />
            </div>

            <div className='flex px-3'>

                <div className='flex-[2] text-[#343A40] font-bold font-dmSans text-[14px]' >
                    <p className='px-2'>Name</p>

                </div>
                <div className='flex-[2]  text-[#343A40] font-bold font-dmSans text-[14px]'>
                    <p className='px-2'>Email</p>

                </div>

                <div className='flex-[3]  text-[#343A40] font-bold font-dmSans text-[14px]'>
                    <p className='px-2'>Joined on</p>
                </div>

                <div className='flex-[1] text-[#343A40] font-bold font-dmSans text-[14px]'>
                    <p className='px-2'>Action</p>
                </div>

            </div>

            <div className='overflow-auto'>

                <Userdetail />

                <Userdetail />

                <Userdetail />

                <Userdetail />


                <Userdetail />

                <Userdetail />
                <Userdetail />

                <Userdetail />


            </div>
        </div>
    )
}

export default User;    