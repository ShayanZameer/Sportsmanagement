


import React from 'react'

import { RxCross2 } from "react-icons/rx";
import Custombutton from './Custombutton';
import Toggleswitch from './Toggleswitch';

import { useState } from 'react';
import image from "../assets/images/warning.png"


const Assignbadge = ({heading}) => {

    
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };
  return (
    <div className='h-[450px] w-[480px] bg-slate-100 rounded-2xl'>


        <div className='flex justify-between items-center py-4 px-6 border-b'>

            <p className='font-dmSans  font-medium'>{heading}</p>
            <div className='bg-white rounded-sm'> 

            <RxCross2 color='#5E5873' />
            </div>

        </div>

        <div className='flex flex-col px-6   my-8'>

            <p className='font-dmSans font-medium'>User Email</p>

            <input className='my-4 bg-[#D6D5D5] w-[430px] py-4 h-12' type='text' value="   iamzai@gmail.com"/>
        </div>
        <div className='flex flex-col px-6 mt-[-30px]    '>

            <p className='font-dmSans font-medium'>Subscription Type</p>

            <div className='flex flex-row justify-between py-4'>
            <Custombutton  text="Business" width="w-[120px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-white"/>
            <Custombutton  text="Videographer" width="w-[120px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-white"/>
            <Custombutton  text="Organization" width="w-[120px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-white"/>




            </div>





        </div>


        <div className='flex justify-between px-6'>

            <p className='font-dmSans font-medium'>Duration</p>

            <div className='flex items-center'>
                <p className='font-normal font-dmSans px-2'>Monthly</p>

                <Toggleswitch isOn={isOn} handleToggle={handleToggle} />


                <p className='font-normal font-dmSans px-2 '>Yearly</p>
            </div>
        </div>

        <div className='flex flex-col items-center my-6'>

        <Custombutton  text="Yes" width="w-[335px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-white"/>

        <div className='py-3'>

        <Custombutton  text="No" width="w-[335px]" height="h-[42px]" bgColour="bg-[#D6D5D5]" bgTextColour="text-black"/>
        </div>



        </div>




    </div>
  )
}

export default Assignbadge