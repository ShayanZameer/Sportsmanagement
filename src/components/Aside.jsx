import React from 'react'
import wLogo from "../assets/images/WhiteLogo.png";

import Asidedetails from './Asidedetails';
import { TbUsers } from "react-icons/tb";



const Aside = () => {
  return (
    <div className='w-[250px]   bg-[#3669C9]'>


        <div className='py-4 flex justify-center'>

            <img className='h-7 w-7 mr-3' src={wLogo} color='white'  alt ="this" />
            <p className=' text-[#ffffff] font-dmSans'>JBSKATE</p>


        </div>

        <div className='flex flex-col items-center mr-10 space-y-4 my-3'>

            <Asidedetails text="Users" icon={<TbUsers color='white ' height="20" width="20"/>}/>
            <Asidedetails text="Users" icon={<TbUsers color='white ' height="20" width="20"/>}/>
            <Asidedetails text="Users" icon={<TbUsers color='white ' height="20" width="20"/>}/>
            <Asidedetails text="Users" icon={<TbUsers color='white ' height="20" width="20"/>}/>

        </div>

        <div className='flex flex-col justify-end'>

            <p>Logout</p>
        </div>
    </div>
  )
}

export default Aside