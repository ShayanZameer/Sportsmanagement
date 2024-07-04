import React from 'react';
import { Link } from 'react-router-dom';


const Asidedetails = ({ text, icon, link }) => {
  return (
    <Link to={link} className='flex bg-[#3669C9] items-center'>

      <div className='h-5 w-5'>{icon}</div>
      <p className=' px-2 font-normal font-bebas text-white'>{text}</p>


    </Link>
  )
}

export default Asidedetails;