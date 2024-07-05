import React from 'react';
import Toggleswitch from './Toggleswitch';
import { useState } from 'react';

import Custombutton from './Custombutton';

import Badge from './Badge';

const Badgesmain = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  const handleAssignBadge = () => {
    console.log("ASSIGN BADGE IS CLICKED");
  }


  return (
    <div className='relative w-[190vh] bg-custom-gradient h-[90%]'>

      <div className='flex  items-center'>


        <div className='flex-1 justify-start px-3'>

          <p className='texr-black font-bebas font-medium text-[60px]'>Badges</p>
        </div>

        <div className='flex flex-1 space-x-2'>

          <p>Monthy</p>


          <Toggleswitch isOn={isOn} handleToggle={handleToggle} />

          <p>Yearly</p>

        </div>

        <Custombutton text="Assign Badge" width="w-[158px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-black" onclick={handleAssignBadge} />


      </div>

      <div className='flex space-x-4 justify-center mt-3 '>

        <Badge Name="Business" Price="$120" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Save" bgColor="bg-[#FFFFFF]" ptextColour="text-black" iconColour="#3669C9" buttonTextColor="text-[#3669C9]"
          buttonbg="bg-[white]" showDiscardButton={true} />


        <Badge Name="Videographer" Price="$12" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-white" ptextColour="text-black" iconColour="#3669C9" buttonTextColor="text-black"
          buttonbg="bg-[white]" showDiscardButton={false} />


        <Badge Name="Organization" Price="$40" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-[#3669C9]" ptextColour="text-[#FFFFFF]" iconColour="white" buttonTextColor="text-[#3669C9]"
          buttonbg="bg-[white]" showDiscardButton={false} />




      </div>



    </div>
  )
}

export default Badgesmain