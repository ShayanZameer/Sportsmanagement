

import Searchinput from './Searchinput';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';



const handleClick = () => {

  console.log("handle click");

};

const Playersection = () => {
  return (
    <div className='flex flex-col xm:flex-col xmm:flex-col sm:flex-row items-center py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 xmm:justify-between'>
      <div className='flex items-center mb-4 xm:mb-0 '>
        <p className='font-normal font-bebas text-[36px] xm:text-[40px] sm:text-[44px] md:text-[48px] lg:text-[52px] xl:text-[56px]'>PLAYERS</p>
        <div className='ml-4'>
          <Link
            to="/user-profile"
            onClick={handleClick}
            className="flex items-center px-3 py-2 bg-blue-600 text-white relative text-sm sm:text-base"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
          >
            <span className="mr-2 text-xs sm:text-sm md:text-base">ADD</span>
            <AiOutlinePlus className="text-base sm:text-lg md:text-xl" />
          </Link>
        </div>
      </div>
      <div className='flex items-center'>
        <div className="flex items-center rounded-md p-2 w-full sm:w-auto">
          <Searchinput />
        </div>
      </div>
    </div>
  );
};

export default Playersection;


