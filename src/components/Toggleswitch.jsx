import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`relative inline-flex items-center cursor-pointer w-16 h-8 rounded-full ${isOn ? 'bg-gray-300' : 'bg-[#3669C9]'}`}
      onClick={handleToggle}
    >
      <span
        className={`block w-8 h-8 rounded-full transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-8 bg-gray-300' : 'translate-x-0 bg-[#3669C9]'}`}
      ></span>
      <span
        className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-8' : 'translate-x-0'}`}
      ></span>
    </div>
  );
};

export default ToggleSwitch;


