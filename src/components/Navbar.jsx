import React from 'react';

import mainpic from "../assets/images/Mainpic.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center 2xl:w-[100%] xl:w-full  md:w-[100%] mdd:w-full smm:w-[100%] sm:w-[100%] xmm:w-[100%] xm:w-[100%] xmm:h-[100%]   shadow-md border-b  '>

      <div className='px-3 lgg:w-full lg:w-[100%]'>

        <p className=' 2xl:text-[40px] xl:text-[38px] lgg:text-[36px] lg:text-[34px] md:text-[32px] mdd:text-[34px] smm:text-[28px] sm:text-[20px] xmm:text-[20px] xm-text-[40px] font-bebas'>HELLO ADMIN, <span className='text-[#3669C9] font-bebas'>GOOD MORNING</span></p>
      </div>


      <div>


        <div className='flex items-center p-5'>
          <p className='font-bebas px-2 text-[24px]'>TETIANA</p>
          <img src={mainpic} alt="this" className=' mb-1  h-10 w-10 rounded-full mr-3 cursor-pointer' />
        </div>
      </div>


    </div>
  )
}

export default Navbar


