import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Searchinput = () => {
  return (
    <div className='relative '>
      <input
        type='text'
        placeholder='Search'
        className=' h-12 bg-slate-50 w-[500px] pl-10 pr-4 py-2 rounded-lg focus:outline-none '
      />
      <FaSearch
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AEB6CF]'
        size={20}
      />
    </div>
  );
};

export default Searchinput;
