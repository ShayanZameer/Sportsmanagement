import React, { useState } from 'react'
import mainpic from "../assets/images/Mainpic.png"


import Warning from './Warning';


const Subscribercomponent2 = () => {

    const [warning, setshowWarning] = useState(false);


    const toggleWarning = () => {


        setshowWarning(true);
    }

    const onclose = () => {
        setshowWarning(false);

    }
    return (
        <div className='flex items-center border-b-2 px-3 py-3'>


            <div className='flex-[1] px-3 flex items-center space-x-4  mb-1 '>



                <img className='rounded-[50%] w-[36px] h-[36px] ' src={mainpic} alt='mainpic' />

                <p className='text-[#48525B] '>Test Title</p>




            </div>



            <div className='flex-[2] flex px-3  justify-center    '>


                <p className='text-[#48525B] mr-16 text-[14px]'>Business</p>
            </div>
            <div className='flex-[1] flex  items-center  '>

                <p className='text-[#48525B] mr-5 '>Monthly</p>
            </div>

            <div className='flex-[2.5]   flex justify-start '>

                <p className='text-[#48525B] px-3 mx-5'>September 9,2023</p>
            </div>


            <div className='flex-[1]  h-[30px] rounded-md w-[110px] bg-[#28A7451A] text-center   '>


                <p className=' text-[#28A745]'>Not paid</p>
            </div>



            <div className="mb-1 flex-1 flex  justify-center  cursor-pointer mr-3" >


                <svg onClick={toggleWarning} color='#48525B' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </div>

            {warning && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative">
                        <Warning
                            heading="Cancel Subscription"
                            warningText="Are you sure you want to cancel Subscription?"
                            onclose={onclose}
                        />
                    </div>
                </div>
            )}



        </div>
    )
}

export default Subscribercomponent2;

