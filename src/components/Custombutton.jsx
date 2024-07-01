


import React from 'react';

const Custombutton = ({ text, height , width }) => {
  return (
    <button
      className={`text-white font-bebas font-bold rounded-md shadow-sm bg-[#3669C9] ${height} ${width}  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
    >
      
      {text}

      

    </button>
  );
};

export default Custombutton;



