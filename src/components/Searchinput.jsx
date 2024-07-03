import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Searchinput = () => {
  return (
    <div className='relative '>
      <input
        type='text'
        placeholder='Search'
        className=' h-12 bg-slate-50 xmm:w-[270px]  xm:w-[250px] sm:w-[270px] smm:w-[300px] md:w-[350px] mdd:w-[330px] lg:w-[380px]  lgg:w-[400px] xl:w-[450px] 2xl:w-[500px] pl-10 pr-4 py-2 rounded-lg focus:outline-none '
      />
      <FaSearch
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AEB6CF]'
        size={20}
      />
    </div>
  );
};

export default Searchinput;
