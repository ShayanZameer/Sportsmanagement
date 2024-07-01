import React from 'react';

import Input from './components/Input';

import { FaMessage } from "react-icons/fa6";

import Custombutton from './components/Custombutton';

import Card from './components/Card';

import Userdetail from './components/Userdetail';

import Badge from './components/Badge';

import Warning from './components/Warning';

import Toggleswitch from './components/Toggleswitch';

import { TbUsers } from "react-icons/tb";
import Asidedetails from './components/Asidedetails';
import { useState } from 'react';



const App = () => {

  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };
  return (

    <div className="m-10">
{/* 
<Input
        labelText="Username"
        placeholder="Enter your email"
        Icon={FaMessage} 
      /> */}



      {/* <Custombutton  text="Login" width="w-[335px]" height="h-[42px]" bgColour="bg-[#3669C9]" bgTextColour="text-black"/> */}

      {/* <Card/> */}



      {/* <Userdetail/> */}

{/* 
      <Badge Name="Business" Price="$120" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-[#3669C9]" ptextColour="text-[#FFFFFF]" iconColour="white" buttonTextColor="text-[#3669C9]" 
        buttonbg="bg-[white]"/> */}

{/* 
        <Warning heading="Remove User" warningText="Are you sure you want to remove
“User Name” from the app" /> */}

{/* <Toggleswitch isOn={isOn} handleToggle={handleToggle} /> */}


<Asidedetails text="Users" icon={<TbUsers color='white ' height="20" width="20"/>}/>













        


        




    </div>
    
  )
}

export default App