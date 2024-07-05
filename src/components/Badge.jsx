import React from 'react'
import { FaCheck } from "react-icons/fa6";

const Badge = ({ Name, Price, p1text, p2text, p3text, p4text, bgColor, buttonText, ptextColour, iconColour, buttonbg, buttonTextColor, showDiscardButton }) => {
    return (
        <div className={`w-[330px] h-[525px]  px-8 py-8  rounded-lg ${bgColor}`} >

            <div >
                <p className={`text-[20px] ${ptextColour} font-dmSans font-semibold`}>{Name}</p>
            </div>

            <div className=' flex'>
                <p className={`text-[44px] font-inter font-semibold ${ptextColour}`} >{Price}</p>
                <div className='flex items-end mb-2'>
                    <p className={`font-inter font-semibold text-[14px] text-[#656565]`}>/month</p>

                </div>


            </div>

            <div className='flex flex-col justify-evenly  my-6 h-60'>

                <div className='flex items-center'>


                    <FaCheck color={iconColour} />


                    <p className={`font-bold font-dmSans px-4 ' ${ptextColour}`}>{p1text}</p>
                </div>


                <div className='flex items-center' >


                    <FaCheck color={iconColour} />


                    <p className={`font-bold font-dmSans px-4 ${ptextColour}`}>{p2text}</p>
                </div>
                <div className="flex items-center">

                    <FaCheck color={iconColour} />


                    <p className={`font-bold font-dmSans px-4 ${ptextColour}`}>{p3text}</p>
                </div>

                <div className='flex items-center'>

                    <FaCheck color={iconColour} />


                    <p className={`font-bold font-dmSans px-4 ${ptextColour}`}>{p4text}</p>
                </div>

                {showDiscardButton && (
                    <div className={`w-[230px] mb-[-40px] h-[50px] rounded-md   flex items-center justify-center  ${buttonbg}`}>
                        <button className="text-black">Discard</button>
                    </div>
                )}

            </div>




            <div className={`w-[230px] h-[50px] rounded-md border border-gray-400 flex items-center justify-center ${buttonbg}`}>
                <button className={`${buttonTextColor}`}  >{buttonText}</button>
            </div>




        </div>
    )
}

export default Badge