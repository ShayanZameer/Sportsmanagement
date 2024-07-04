import React from 'react'

import { RxCross2 } from "react-icons/rx";
import Custombutton from './Custombutton';
import image from "../assets/images/warning.png"


const Warning = ({ heading, warningText, onclose }) => {
  return (
    <div className='h-[450px] w-[480px] bg-slate-100 rounded-2xl'>


      <div className='flex justify-between items-center py-4 px-6 border-b'>

        <p className='font-dmSans  font-medium'>{heading}</p>
        <div className='bg-white rounded-sm'>

          <RxCross2 onclick={onclose} color='#5E5873' />
        </div>

      </div>

      <div className='flex flex-col items-center my-8'>

        <img className='h-[130px] w-[130px]' src={image} alt='this' />

        <p className='w-[300px] py-5'>{warningText}</p>
      </div>

      <div className='flex flex-col items-center my-6'>

        <Custombutton text="Yes" width="w-[335px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-white" onclick={""} />

        <div className='py-3'>

          <Custombutton text="No" width="w-[335px]" height="h-[42px]" bgColour="bg-[#D6D5D5]" bgTextColour="text-black" onclick={onclose} />
        </div>



      </div>




    </div>
  )
}

export default Warning;


