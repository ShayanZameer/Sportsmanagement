import React from 'react'


const Asidedetails = ({text, icon}) => {
  return (
    <div className='flex bg-[#3669C9] items-center'>

        <div className='h-5 w-5'>{icon}</div>
        <p className=' px-2 font-normal font-bebas text-white'>{text}</p>


    </div>
  )
}

export default Asidedetails;