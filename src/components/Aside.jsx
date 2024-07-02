import React from 'react'
import wLogo from "../assets/images/WhiteLogo.png";

import Asidedetails from './Asidedetails';
import { LuLogOut } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";
import { TfiMedall } from "react-icons/tfi";



const Aside = () => {
  return (
    <div className='w-[200px] flex flex-col justify-between  h-[1010px]   bg-[#3669C9]'>

        <div>

        <div className='py-4 flex justify-center'>

            <img className='h-7 w-7 mr-3' src={wLogo} color='white'  alt ="this" />
            <p className=' text-[#ffffff] font-dmSans'>JBSKATE</p>


        </div>

        <div className='flex flex-col items-center mr-10 space-y-4 my-3'>

            <Asidedetails text="PLAYERS" icon={<TfiMedall color='white ' height="20" width="20"/>}/>
            <Asidedetails text="USERS" icon={<TbUsers color='white ' height="20" width="20"/>}/>
            <Asidedetails text="STORE" icon={<FaStore color='white ' height="20" width="20"/>}/>
            <Asidedetails text="BADGES" icon={<TfiMedall color='white ' height="20" width="20"/>}/>

        </div>

        </div>
            

        <div className='flex justify-center'>
        
        <div className='my-1'>
        <LuLogOut color='white' />
</div>

            <p className='px-2 pb-5 font-dmSans text-white '>Logout</p>
        </div>
    </div>
  )
}

export default Aside