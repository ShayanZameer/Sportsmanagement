import React from 'react';

import mainpic from "../assets/images/Mainpic.png";

import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";

import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";
import pic5 from "../assets/images/5.png";

const Card = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden py-2 shadow-md max-w-72 ">

       <div className='flex justify-center'>
      {/* Image */}
      <img 
        src={mainpic} 
        alt="Card image"
        className="w-[260px] h-[180px]"
        />
        </div> 

      
      <div className="p-4">

        <div className='bg-gray-100 w-[66px] text-center'>


        
        <p className="text-lg font-medium text-gray-700">Tennis</p>
        </div>

        
        <div className="mt-2 text-[36px] font-bold font-bebas">ALIZA KHAN</div>


        <div className='my-3 flex justify-between' >

            <div className='flex items-center '>
            <img 
        src={pic1} 
        alt="Card image"
        className="w-[28px] h-[20px]"
        />

        <p className='text-gray-700 font-normal font-bebas px-1'>20 KM/H</p>
                
            </div>

            <div className='flex items-center '>
                
            <img 
        src={pic2} 
        alt="Card image"
        className="w-[28px] h-[20px] "
        />

        <p className='text-gray-700 font-normal font-bebas px-1 '>18M</p>

            </div>


        </div>

        <div className='my-3 flex justify-between'>

            <div className='flex items-center'>

            <img 
        src={pic3} 
        alt="Card image"
        className="w-[17px] h-[26px] "
        />

        <p className='text-gray-700 font-normal font-bebas px-1 '>40</p>

            </div>

            <div className='flex items-center'>
            <img 
        src={pic4} 
        alt="Card image"
        className="w-[28px] h-[22px] "
        />

        <p className='text-gray-700 font-normal font-bebas px-1 '>40</p>
            </div>

            <div className='flex items-center'>
            <img 
        src={pic5} 
        alt="Card image"
        className="w-[28px] h-[20px] "
        />

        <p className='text-gray-700 font-normal font-bebas px-1 '>40</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
