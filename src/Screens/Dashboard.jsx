// import React from 'react'
// import Aside from '../components/Aside'

// import Navbar from '../components/Navbar';
// import Mainsection from '../components/Mainsection';

// import Playersection from '../components/Playersection';

// const Dashboard = () => {
//   return (
//     <div className='flex  ' >

//         <div className=' flex-1 h-screen '>
//         <Aside/>


//         </div>

//         <div className='flex-[6] flex flex-col  '>

//         <div className=' '>

//             <Navbar/>
//         </div>

//         <div className='    '>
//             <Playersection/>

//          </div>

//          <div className='flex-1  overflow-auto '>

//             <Mainsection/>
//        </div>

//          </div>
//      </div>
//   )
// }

// export default Dashboard


import React from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import Mainsection from '../components/Mainsection';
import Playersection from '../components/Playersection';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="relative top-0  left-0 bottom-0  lgg:w-64 lg:w-64 xm:bg-white xmm:bg-white smm:bg-white lg:bg-[#3669C9] lgg:bg-[#3669C9] md:bg-white mdd:bg-white ">
        <Aside />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ">
        {/* Navbar */}
        <div className="relative top-0 left-0 right-0 h-16 bg-white z-10">
          <Navbar />
        </div>

        {/* Player section */}
        <div className=" ">
          <Playersection />
        </div>

        {/* Main section (scrollable content) */}
        <div className=" main-section flex-[1] p-4 mt-4 overflow-auto">
          <Mainsection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


































