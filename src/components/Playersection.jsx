


import Searchinput from './Searchinput';


import React from 'react';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';

const handleClick = () => {
  console.log("handle click");
};

const Playersection = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8'>
      <div className='flex items-center'>
        <p className='font-normal font-bebas text-[56px]'>PLAYERS</p>
        <div className='ml-4'>
          <button
            onClick={handleClick}
            className="flex items-center px-3 py-2 bg-blue-600 text-white relative"
            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
          >
            <span className="mr-2">ADD</span>
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <div className=''>
        <div className="flex items-center  rounded-md p-2">
          <Searchinput/>
        </div>
      </div>
    </div>
  );
};

export default Playersection;
