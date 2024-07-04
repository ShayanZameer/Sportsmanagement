import React from 'react';


const AthleteComponent = ({ text, image, inputValue }) => {
    return (
        <div className='my-6'>


            <div className='flex items-center'>

                <img className="h-4 w-6" src={image} alt="this" />

                <p className='font-bebas font-normal px-1 text-[16px]'>{text}</p>
            </div>



            <div>

                <input
                    className='w-[228px] my-2 h-10 border px-4 border-gray-200 text-2xl font-bebas "'
                    value={inputValue}
                />


            </div>
        </div>
    )
}

export default AthleteComponent
