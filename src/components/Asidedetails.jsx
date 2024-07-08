


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Asidedetails = ({ text, icon: Icon, link, isActive, onClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div onClick={onClick}
//       className={`rounded-md cursor-pointer flex items-center h-[100%] w-[90%] px-4 group ${isActive ? 'bg-white' : 'bg-[#3669C9] hover:bg-white'}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link to={link} className='flex items-center  justify-center py-3'>

//         <Icon color={isHovered ? '#3669C9' : 'white'} />

//         <p className={`px-4 font-normal font-bebas text-white group-hover:text-[#3669C9]  ${isActive ? 'group:text-[#3669C9]' : 'group:text-white'}`}>
//           {text}
//         </p>
//       </Link>
//     </div>
//   );
// }

// export default Asidedetails;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Asidedetails = ({ text, icon: Icon, link, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`rounded-md cursor-pointer flex items-center h-[100%] w-[90%] px-4 ${isActive ? 'bg-white' : 'bg-[#3669C9] hover:bg-white'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className='flex items-center justify-center py-3'>
        <Icon color={isHovered ? '#3669C9' : (isActive ? '#3669C9' : 'white')} />
        <p className={`px-4 font-normal font-bebas ${isActive ? 'text-[#3669C9]' : (isHovered ? 'text-[#3669C9]' : 'text-white')}`}>
          {text}
        </p>
      </Link>
    </div>
  );
}

export default Asidedetails;




