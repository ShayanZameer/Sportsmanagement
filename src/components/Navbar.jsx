import React from 'react';

import mainpic from "../assets/images/Mainpic.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center shadow-md border-b'>

        <div className='px-3'>

            <p className=' text-[40px] font-bebas'>HELLO ADMIN, <span className='text-[#3669C9] font-bebas'>GOOD MORNING</span></p>
        </div>


        <div>


            <div className='flex items-center'>
                <p className='font-bebas px-2 text-[24px]'>TETIANA</p>
                <img src={mainpic} alt = "this" className=' mr-6 h-12 w-12 rounded-full'/>
            </div>
        </div>


    </div>
  )
}

export default Navbar