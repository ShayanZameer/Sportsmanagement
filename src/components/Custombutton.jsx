


import React from 'react';

const Custombutton = ({ text, height , width, bgColour , bgTextColour }) => {
  return (
    <button
      className={`text-white font-bebas font-bold rounded-md shadow-sm  ${height} ${width} ${bgColour} ${bgTextColour} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 [clip-path:polygon(3%_0%,_97%_0%,_100%_50%,_97%_100%,_3%_100%,_0%_50%)]`}
    >
      
      {text}

      

    </button>
  );
};

export default Custombutton;



