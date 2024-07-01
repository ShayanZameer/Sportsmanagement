import React from 'react';

import Input from './components/Input';

import { FaMessage } from "react-icons/fa6";

import Custombutton from './components/Custombutton';

import Card from './components/Card';

import Userdetail from './components/Userdetail';

import Badge from './components/Badge';

const App = () => {
  return (

    <div className="m-10">
{/* 
<Input
        labelText="Username"
        placeholder="Enter your email"
        Icon={FaMessage} 
      /> */}



      {/* <Custombutton  text="Login" width="w-[335px]" height="h-[42px]"/> */}

      {/* <Card/> */}



      {/* <Userdetail/> */}


      <Badge Name="Business" Price="$120" p1text="Employee Notifications" p2text="Marketing and Promotion" p3text="Employee Verification" p4text="Subscriber Notifications" buttonText="Edit" bgColor="bg-[#3669C9]"  />




    </div>
    
  )
}

export default App