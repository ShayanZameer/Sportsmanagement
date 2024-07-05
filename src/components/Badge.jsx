import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from 'react';



const Badge = ({ Name, Price, p1text, p2text, p3text, p4text, bgColor, buttonText, ptextColour, iconColour, buttonbg, buttonTextColor, showDiscardButton, monthColour, isMonthly, editclick, isEditMode }) => {

    const [showInput, setShowInput] = useState(false);

    const [showPlusIcon, setShowPlusIcon] = useState(true);

    const handlePlusClick = () => {
        setShowInput(!showInput);
        setShowPlusIcon(false);
    };
    return (
        <div className={`w-[330px] h-[525px]  px-8 py-8  rounded-lg ${bgColor}`} >

            <div >
                <p className={`text-[20px] ${ptextColour} font-dmSans font-semibold`}>{Name}</p>
            </div>

            <div className=' flex'>
                <p className={`text-[44px] font-inter font-semibold ${ptextColour}`} >{Price}</p>
                <div className='flex items-end mb-2'>
                    <p className={`font-inter font-semibold text-[14px] ${monthColour}`}>{isMonthly ? "/monthly" : "/yearly"}</p>

                </div>


            </div>

            <div className='flex flex-col justify-evenly  my-6 h-60'>

                <div className='flex items-center'>


                    {/* <FaCheck color={iconColour} /> */}

                    {isEditMode ? "" : <FaCheck color={iconColour} />}



                    <p className={`font-bold font-dmSans px-4 w-[250px] ' ${ptextColour}`}>{p1text}</p>

                    {isEditMode ? <TiDeleteOutline size={24} color={iconColour} /> : ""}

                </div>


                <div className='flex items-center' >


                    {isEditMode ? "" : <FaCheck color={iconColour} />}


                    <p className={`font-bold font-dmSans px-4 w-[250px] ${ptextColour}`}>{p2text}</p>

                    {isEditMode ? <TiDeleteOutline size={24} color={iconColour} /> : ""}

                </div>
                <div className="flex items-center">

                    {isEditMode ? "" : <FaCheck color={iconColour} />}



                    <p className={`font-bold font-dmSans px-4 w-[250px] ${ptextColour}`}>{p3text}</p>

                    <div className='flex justify-center cursor-pointer'>


                        {isEditMode ? <TiDeleteOutline size={24} color={iconColour} /> : ""}
                    </div>
                </div>

                <div className='flex items-center'>

                    {isEditMode ? "" : <FaCheck color={iconColour} />}


                    <p className={`font-bold font-dmSans px-4 w-[250px] ${ptextColour}`}>{p4text}</p>


                    <div className='flex justify-center'>


                        {isEditMode ? <TiDeleteOutline size={24} color={iconColour} /> : ""}
                    </div>

                </div>

                {
                    isEditMode && (
                        <div className='flex justify-end'>

                            <FaPlusSquare onClick={handlePlusClick} className="cursor-pointer" size={28} color="black" />
                        </div>
                    )}


                {isEditMode && showInput && (
                    <div className='mt-4'>
                        <input
                            type="text"
                            placeholder="Enter new text"
                            className="w-full px-2 py-1 border border-gray-400 rounded-md"
                        />
                    </div>
                )}

                {showInput && (
                    <div className={`w-[230px] mb-[-40px] h-[50px] rounded-md   flex items-center justify-center  ${buttonbg}`}>
                        <button className="text-black">Discard</button>
                    </div>
                )}

            </div>




            <div onClick={editclick} className={`w-[230px] h-[50px] rounded-md border border-gray-400 flex items-center justify-center ${buttonbg}`}>
                <button className={`${buttonTextColor}`}  >{buttonText}</button>
            </div>




        </div>
    )
}

export default Badge