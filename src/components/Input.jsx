import React from 'react';

const Input = ({ labelText, type = 'text', placeholder = '', Icon, placeholderColor = '' }) => {
  return (
    <div className="flex flex-col space-y-2 ml-2">
    
      <label className="text-sm font-normal text-[#525252]">{labelText}</label>
      
      
      <div className="relative w-[450px]">
        <input
          type={type}
          placeholder={placeholder}
          className=" px-3 py-2  bg-gray-100 shadow-sm focus:outline-none focus:ring-0  h-[48px] w-full placeholder-black "
        />
        {/* Icon */}
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
