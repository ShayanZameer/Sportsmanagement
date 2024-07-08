






import React, { useState } from 'react';
import wLogo from "../assets/images/WhiteLogo.png";
import Asidedetails from './Asidedetails';
import { LuLogOut } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { FaStore } from "react-icons/fa6";
import { TfiMedall } from "react-icons/tfi";
import { FaBars } from "react-icons/fa";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/players');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <>
      {/* Bar icon for small screens */}
      <div className="lg:hidden p-4 relative flex justify-between items-center">
        <button onClick={toggleSidebar} className="text-white">
          <FaBars color='#3669C9' size={34} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 lg:relative lg:translate-x-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:flex lg:flex-col xm:w-[150px] xmm:w-[150px] sm:w-[150px] lg:w-[200px] h-full justify-between xm:bg-[#3669C9] sm:bg-[#3669C9] transition-transform duration-300 ease-in-out`}>
        <div>
          <div className='py-4 flex justify-center'>
            <img className='h-7 w-7 mr-3' src={wLogo} alt="Logo" />
            <p className='text-[#ffffff] font-dmSans'>JBSKATE</p>
          </div>
          <div className='flex flex-col items-center mr-10 space-y-4 my-3'>
            <Asidedetails text="PLAYERS" icon={TfiMedall} link="/players" isActive={activeLink === "/players"} onClick={() => handleLinkClick("/players")} />
            <Asidedetails text="USERS" icon={TbUsers} link="/users" isActive={activeLink === "/users"} onClick={() => handleLinkClick("/users")} />
            <Asidedetails text="STORE" icon={FaStore} link="/store" isActive={activeLink === "/store"} onClick={() => handleLinkClick("/store")} />
            <Asidedetails text="BADGES" icon={TfiMedall} link="/badges" isActive={activeLink === "/badges"} onClick={() => handleLinkClick("/badges")} />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='my-1'>
            <LuLogOut color='white' />
          </div>
          <p className='px-2 pb-5 font-dmSans text-white'>Logout</p>
        </div>
      </div>

      {isOpen && <div onClick={toggleSidebar} className="fixed inset-0 z-10 bg-[#3669C9] opacity-0 lg:hidden"></div>}
    </>
  );
};

export default Aside;
