import React from 'react';

import { FaMessage } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

import Logo from "../assets/images/Logo.png";
import bgvector from "../assets/images/Vector.png"

import Custombutton from '../components/Custombutton';


import Input from '../components/Input';

const Login = () => {

    const hanldeclick=()=>{
        console.log("Login button is pressed")
    }
  return (


    <div  className='flex flex-col h-screen justify-center  items-center bg-blue-50 '>

         {/* Background Image */}
      <div className="absolute  bottom-0 w-full h-full flex justify-end  ">
        <img src={bgvector} alt="Background" className="object-cover w-[280px] h-[90%]"/>
      </div>

<div className=" flex justify-end absolute right-0 top-0 h-full  bg-no-repeat" style={{ backgroundImage: `url(${bgvector})` }}></div>



        {/* for image icon and  Header */}

        <div className='flex flex-col  items-center'>

            <img className='h-10 w-10  xm:h-3 xm:w-3 sm:w-9 sm:h-9 smm:w-9 smm:h-9 md:h-7 md:w-7  lg:w-9 lg:h-9  xl:w-10 xl:h-10'  src={Logo}  alt="this" />
            <p className='font-dmSans font-bold sm:text-[20px] xl:text-[48px] text-[#3669C9]'>JBSKATE</p>
        </div>

        {/* welcome admin */}

        <div className='  flex  flex-col justify-center items-center '>

            <p className='font-dmSans font-bold xl:text-[36px] sm:[20px] md-[24px] lg:[28px] text-[#000000]'>Welcome Admin!</p>
            <p className='font-dmSans font-medium text-xl:text-[20px] sm:[12px] md-[16px] lg:[20px] text-gray-400'>Please login to continue</p>


        </div>


        {/* inputs */}


        <div className='py-8 w-full flex flex-col items-center justify-center'>

        <Input
        labelText="Username"
        placeholder="Enter your email"
        Icon={FaMessage} 
      />

<Input
        labelText="Password"
        placeholder="Enter your Password"
        Icon={FaEyeSlash} 
        type="password"
      />
        </div>

        {/* button */}


        <div>

        <Custombutton  text="Login" width=" xm:w-[200px] xmm:w-[180px] sm:w-[250px] xl:w-[335px] lg:w-[300px] md:w-[300px] " height=" h-[42px]  "  bgColour="bg-[#3669C9]" bgTextColour="text-white" onclick={hanldeclick}/>
        </div>


    </div>
  )
}

export default Login