import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Badge = ({Name,Price, p1text,p2text, p3text, p4text ,bgColor,buttonText, ptextColour }) => {
  return (
    <div className= {`w-[330px] h-[525px]  px-8 py-8  rounded-lg ${bgColor}`} >

        <div >
            <p className='text-[20px] font-dmSans font-semibold'>{Name}</p>
        </div>

        <div className=' flex'>
            <p className='text-[44px] font-inter font-semibold' >{Price}</p>
            <div className='flex items-end mb-2'>
                <p className='font-inter font-semibold text-[14px] text-[#656565]'>/month</p>

            </div>


        </div>

        <div className='flex flex-col justify-evenly  my-6 h-60'>

            <div className='flex items-center'>


            <FaCheck color='#3669C9'/>


            <p className='font-bold font-dmSans px-4'>{p1text}</p>
            </div>
            

            <div className='flex items-center' >

      
            <FaCheck color='#3669C9'/>


            <p className='font-bold font-dmSans px-4'>{p2text}</p>
            </div>
            <div className="flex items-center">

            <FaCheck color='#3669C9'/>


            <p className='font-bold font-dmSans px-4'>{p3text}</p>
            </div>

            <div className='flex items-center'>

            <FaCheck color='#3669C9'/>


            <p className='font-bold font-dmSans px-4'>{p4text}</p>
            </div>

        </div>


        <div className='w-[230px] h-[50px] rounded-md border border-gray-400 flex items-center justify-center'>
            <button >{buttonText}</button>
        </div>


    </div>
  )
}

export default Badge