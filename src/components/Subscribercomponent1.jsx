import React from 'react'

const Subscribercomponent1 = () => {
    return (

        <div className='flex px-3'>

            <div className='flex-[1] px-3 text-[#343A40] font-bold font-dmSans text-[14px]' >
                <p className='px-2'>Name</p>

            </div>

            <div className='flex-1  text-[#343A40] flex justify-center   font-bold font-dmSans text-[14px]' >
                <p className='px-2'>Package Type</p>

            </div>
            <div className='flex-1 flex  justify-end  text-[#343A40] font-bold font-dmSans text-[14px]'>
                <p className="">Durations</p>

            </div>

            <div className='flex-[2]  flex  justify-center  text-[#343A40] font-bold font-dmSans text-[14px]'>
                <p className='px-2'>Subscribed on</p>
            </div>

            <div className='flex-[0.8] text-[#343A40]    font-bold font-dmSans text-[14px]'>
                <p className=''>Payment Status</p>
            </div>


            <div className='flex-[1] text-[#343A40]  flex justify-center font-bold font-dmSans text-[14px]'>
                <p className='px-2'>Action</p>
            </div>

        </div>
    )
}

export default Subscribercomponent1