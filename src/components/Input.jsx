

import React from 'react';

const Input = ({ labelText, placeholder = '', Icon, placeholderColor = '', type, value, onChange }) => {
  return (
    <div className="flex flex-col space-y-2  ml-2 w-full max-w-sm">
      <label className="text-sm font-normal text-[#525252]">{labelText}</label>

      <div className="relative w-full ">
        <input

          onChange={onChange}
          type={type}
          placeholder={placeholder}
          value={value}
          className="px-3 py-2 bg-gray-200 shadow-sm focus:outline-none focus:ring-0 h-[48px] xm:w-[95%] xmm:w-full sm:w-full smm:w-full mdd:w-full md:w-full lgg:w-full lg:w-full  xl:w-full 2xl:w-full  placeholder-black "


        />
        {/* Icon */}
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex justify-center items-center xmm:pr-3 xm:pr-7  xl:pr-3 2xl:pr-3">
            <Icon className="w-5 h-5 text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;

