


import React from 'react';

import Playersection from './Playersection';

import Userdetail from './Userdetail';

import Storedetail from './Storedetails';

const Store = () => {
    return (
        <div>

            <div >

                <Playersection text="STORE" showAddButton={true} buttonText="ADD PRODUCT" />
            </div>

            <div className='flex px-3'>

                <div className='flex-1 px-3 text-[#343A40] font-bold font-dmSans text-[14px]' >
                    <p className='px-2'>Image</p>

                </div>

                <div className='flex-[1]  text-[#343A40]  mx-[-40px] font-bold font-dmSans text-[14px]' >
                    <p className='px-2'>Name</p>

                </div>
                <div className='flex-[2.5]   text-[#343A40] font-bold font-dmSans text-[14px]'>
                    <p className="">Description</p>

                </div>

                <div className='flex-[1]  flex justify-end  text-[#343A40] font-bold font-dmSans text-[14px]'>
                    <p className='px-2'>Price</p>
                </div>

                <div className='flex-[0.8] text-[#343A40]  flex justify-center  font-bold font-dmSans text-[14px]'>
                    <p className=''>In Stock</p>
                </div>


                <div className='flex-[1] text-[#343A40]  flex justify-center font-bold font-dmSans text-[14px]'>
                    <p className='px-2'>Action</p>
                </div>

            </div>

            <div className='overflow-auto'>

                <Storedetail />


                <Storedetail />



            </div>
        </div>
    )
}

export default Store;

