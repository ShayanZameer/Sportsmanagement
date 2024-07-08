import React, { useState } from 'react';
import wLogo from "../assets/images/WhiteLogo.png";
import Asidedetails from './Asidedetails';
import { LuLogOut } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";
import { TfiMedall } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";
import toast from 'react-hot-toast';

import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Aside = () => { 

  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/players');
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = async () => {

    console.log("entering in logout");

    try {

      const auth = getAuth();

      await signOut(auth);

      toast.success("LOGOUT SUCCESSFULLY");

      navigate('/')

    } catch (error) {
      console.log("there is some error in logout", error);
      toast.error("ERROR IN LOGOUT");

    }

  }

  return (
    <>
      <div className="lg:hidden p-4 relative flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars color='#3669C9' size={34} />
        </button>
      </div>

      <div className={`fixed inset-0 z-50 lg:relative lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:flex lg:flex-col xm:w-[150px] xmm:w-[150px] sm:w-[150px] lg:w-[200px] h-full justify-between xm:bg-[#3669C9] sm:bg-[#3669C9] transition-transform duration-300 ease-in-out`}>
        <div>
          <div className='py-4 flex justify-center'>
            <img className='h-7 w-7 mr-3' src={wLogo} alt="Logo" />
            <p className='text-[#ffffff] font-dmSans'>JBSKATE</p>
          </div>
          <div className='flex flex-col items-center mr-10 space-y-4 my-3'>
            <Asidedetails text="PLAYERS" icon={TfiMedall} link="/dashboard/players" isActive={activeLink === "/players"} onClick={() => handleLinkClick("/players")} />
            <Asidedetails text="USERS" icon={TbUsers} link="/dashboard/users" isActive={activeLink === "/users"} onClick={() => handleLinkClick("/users")} />
            <Asidedetails text="STORE" icon={FaStore} link="/dashboard/store" isActive={activeLink === "/store"} onClick={() => handleLinkClick("/store")} />
            <Asidedetails text="BADGES" icon={TfiMedall} link="/dashboard/badges" isActive={activeLink === "/badges"} onClick={() => handleLinkClick("/badges")} />
          </div>
        </div>
        <div className='flex justify-center cursor-pointer  '>
          <div className='my-1'>
            <LuLogOut onClick={handleLogout} color='white' />
          </div>
          <p onClick={handleLogout} className='px-2 pb-5 font-dmSans text-white'>Logout</p>
        </div>
      </div>

      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 z-10 bg-[#3669C9] opacity-0 lg:hidden"></div>}
    </>
  );
};

export default Aside;
