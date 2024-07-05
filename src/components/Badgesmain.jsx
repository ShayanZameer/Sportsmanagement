import React from 'react';
import Toggleswitch from './Toggleswitch';
import { useState } from 'react';

import Custombutton from './Custombutton';

import Playersection from './Playersection';

import Subscribercomponent1 from './Subscribercomponent1';

import Badge from './Badge';
import Subscribercomponent2 from './Subscribercomponent2';

const Badgesmain = () => {

  const [isOn, setIsOn] = useState(false);

  const [isMonthly, setIsMonthly] = useState(true);
  const [editMode, setEditMode] = useState({});


  const handleToggle = () => {
    setIsOn(prevState => !prevState);
    setIsMonthly(!isMonthly);


  };

  const handleEditClick = (badgeName) => {
    setEditMode(prevState => ({
      ...prevState,
      [badgeName]: !prevState[badgeName]
    }));
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

          <p>Monthly</p>


          <Toggleswitch isOn={isOn} handleToggle={handleToggle} />

          <p>Yearly</p>

        </div>

        <Custombutton text="Assign Badge" width="w-[158px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-black" onclick={handleAssignBadge} />


      </div>

      <div className='flex space-x-4 justify-center mt-3 '>

        <Badge Name="Business" Price="$120" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-[#FFFFFF]" ptextColour="text-black" iconColour="#3669C9" buttonTextColor="text-[#3669C9]"
          buttonbg="bg-[white]" showDiscardButton={true} isMonthly={isMonthly} monthColour="text-[#656565]" editclick={() => handleEditClick('Business')} isEditMode={editMode['Business'] || false}

        />


        <Badge Name="Videographer" Price="$12" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-white" ptextColour="text-black" iconColour="#3669C9" buttonTextColor="text-black"
          buttonbg="bg-[white]" monthColour="text-[#656565]" showDiscardButton={false} isMonthly={isMonthly} editclick={() => handleEditClick('Videographer')}
          isEditMode={editMode['Videographer'] || false} />


        <Badge Name="Organization" Price="$40" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-[#3669C9]" ptextColour="text-[#FFFFFF]" iconColour="white" buttonTextColor="text-[#3669C9] " monthColour="text-white"
          buttonbg="bg-[white]" showDiscardButton={false} isMonthly={isMonthly} editclick={() => handleEditClick('Organization')}
          isEditMode={editMode['Organization'] || false} />




      </div>


      <div>
        {/* text, showAddButton, buttonText */}
        <Playersection text="SUBSCRIBERS" showAddButton={false} />
      </div>


      <div>

        <Subscribercomponent1 />


      </div>

      <div>
        <Subscribercomponent2 />
        <Subscribercomponent2 />

        <Subscribercomponent2 />
        <Subscribercomponent2 />




      </div>





    </div>
  )
}

export default Badgesmain