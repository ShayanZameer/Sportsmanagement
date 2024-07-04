







import React from 'react';
import UserProfileHeader from './UserProfileHeader';
import AthleteComponent from './AthleteComponent';
import pic1 from "../assets/images/1.png";
import pic2 from "../assets/images/2.png";
import pic3 from "../assets/images/3.png";
import pic4 from "../assets/images/4.png";
import pic5 from "../assets/images/5.png";

import Custombutton from './Custombutton';

const handleClick = () => {
    console.log("handle click is pressed")
}

const Athlete = () => {
    return (
        <div className='p-4 xm:p-2'>
            <div className='flex flex-col items-center sm:flex-row sm:items-start'>
                <UserProfileHeader />

                <div className='flex flex-col my-10 sm:my-20 w-full sm:w-[80%] lg:w-[70%]'>
                    <div className='border-b-2 h-8 border-gray-500'>
                        <p className='font-dmSans text-[16px] font-bold'>Athlete Stats</p>
                    </div>

                    <div className='flex flex-wrap justify-between space-x-2 mt-4'>
                        <AthleteComponent image={pic1} text="TOP SPEED" inputValue="20" />
                        <AthleteComponent image={pic2} text="LONG JUMP" inputValue="20" />
                        <AthleteComponent image={pic3} text="SPINS" inputValue="20" />
                        <AthleteComponent image={pic4} text="SKATING FORWARD" inputValue="20" />
                        <AthleteComponent image={pic5} text="SKATING BACKWARD" inputValue="20" />
                        <AthleteComponent image={pic1} text="TOP SPEED" inputValue="20" />
                    </div>

                    {/* <div className='my-2 space-x-2'> */}

                    <div className='flex flex-col gap-2 xm:flex-row xm:gap-4 space-x-3 xm:w-full  '>

                        <Custombutton text="DISCARD" width=" xm:w-[100px] xmm:w-[130px] sm:w-[150px] smm:w-[170px] mdd:w-[200px] md:w-[230px] lg:w-[250px] lgg:w-[270px] xl:w-[300px] 2xl:w-[335px]" height="h-[42px]" bgColour="bg-[#D6D5D5]" bgTextColour="text-black" onclick={handleClick} />

                        <Custombutton text="SAVE" width=" xm:w-[100px] xmm:w-[130px] sm:w-[150px] smm:w-[170px] mdd:w-[200px] md:w-[230px] lg:w-[250px] lgg:w-[270px] xl:w-[300px] 2xl:w-[335px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-black" onclick={handleClick} />



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Athlete;

