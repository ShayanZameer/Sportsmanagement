// import React, { useRef, useState } from 'react'

// import { FaLongArrowAltLeft } from "react-icons/fa";

// import { FaMessage } from "react-icons/fa6";

// import Input from './Input';

// import UserProfileHeader from './UserProfileHeader';
// import ProfileDetails from './ProfileDetails';

// const Userprofile = () => {

//     const fileInputRef = useRef(null);

//     const [selectedImage, setSelectedImage] = useState(null);

//     const [showButtons, setShowButtons] = useState(false);


//     const handleDivClick = () => {
//         fileInputRef.current.click();
//     }

//     const toggleButtons = () => {
//         console.log("buttpon clicked ");
//         setShowButtons(!showButtons);
//     }

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];

//         if (file) {

//             const imageUrl = URL.createObjectURL(file);
//             setSelectedImage(imageUrl)
//         }
//     }

//     console.log(selectedImage);

//     console.log("file inpur ref is ", fileInputRef)

//     return (
//         <div className='p-5'>
//             {/* below div is  for user profile */}
//             <div className='flex items-center' onClick={toggleButtons}>

//                 <FaLongArrowAltLeft />
//                 <p className='px-3 font-dmSans font-bold' >User Profile</p>

//             </div>



//             <div className='flex '>
//                 {/* for initially buttons */}


//                 <div className={` flex flex-col py-5 flex-1 ${showButtons ? "hidden" : 'hidden'} sm:flex `}  >
//                     <div className='w-60 h-12 bg-[#3669C9] px-2 py-3 text-[#FFFFFF] cursor-pointer'>
//                         <button>Profile details</button>
//                     </div>
//                     <div className='w-72 h-12 bg-white px-2 py-3 text-black my-4 cursor-pointer'>

//                         <button>Athelete Stats</button>
//                     </div>
//                 </div>


//                 <div className='flex-[2] my-5 px-3  '>

//                     <div className="my-5 border-b-2   border-gray-100">
//                         <p className='font font-dmSans font-medium'>Profile Details</p>
//                     </div>


//                     <div className='flex smm:justify-between sm:justify-evenly  '>



//                         {/* Inputs */}
//                         <div className='  2xl:w-[350px] xl:w-[350px] sm:w-[200px] lgg:w-[330px] lg:[300px] mdd:w-[270px] md:w-[250px] smm: w-[230px] xmm:w-[170px] xm:w-[150px]  '>
//                             <div className='my-3'>

//                                 <Input
//                                     labelText="Username"
//                                     placeholder="Enter your email"
//                                     Icon={FaMessage}
//                                 />
//                             </div>

//                             <div className='my-3'>

//                                 <Input
//                                     labelText="Username"
//                                     placeholder="Enter your email"
//                                     Icon={""}
//                                 />
//                             </div>

//                             <div className='my-3'>

//                                 <Input
//                                     labelText="Username"
//                                     placeholder="Enter your email"
//                                     Icon={""}
//                                 />
//                             </div>

//                         </div>

//                         {/* IMAGE */}

//                         <div onClick={handleDivClick} className='bg-black bg-cover  xm:h-[50px] xm:w-[50px]
//                                 xmm:h-[75px] xmm:w-[75px]
//                                 sm:h-[100px] sm:w-[100px]
//                                 smm:h-[100px] smm:w-[100px]
//                                 mdd:h-[110px] mdd:w-[110px]
//                                 md:h-[110px] md:w-[110px]

//                                 mdd:my-[-10px]
//                                 mdd:ml-[15px]
//                                 md:my-[-10px]
//                                 md:ml-[15px]
//                                 lg:h-[160px] lg:w-[160px]
//                                 lgg:h-[170px] lgg:w-[170px]
//                                 xl:h-[180px] xl:w-[180px]
//                                 2xl:h-[190px] 2xl:w-[190px] cursor-pointer mt-4 rounded-full flex justify-center items-center font-normal ' style={{
//                                 backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
//                                 backgroundSize: "cover",
//                                 backgroundPosition: "center",
//                                 backgroundRepeat: "no-repeat",
//                                 backgroundColor: selectedImage ? 'transparent' : 'black',
//                             }} >



//                             {!selectedImage && (
//                                 <p className='text-white font-dmSans xm:text-[12px] xmm:text-[14px] sm:text-[16px] smm:text-[18px] mdd:text-[20px] md:text-[24px] lg:text-[28px] lgg:text-[52px] xl:text-[70px] 2xl:text-[78px] '>JS</p>
//                             )}
//                         </div>

//                         <input type="file" accept='image/* ' ref={fileInputRef} className='hidden' onChange={handleFileChange} />
//                     </div>


//                 </div>
//             </div>


//             {/* Modal for small screens */}
//             {showButtons && (
//                 <div id="user-profile-popup" className='absolute top-32 left-10 bg-white p-5 rounded-lg shadow-lg sm:hidden'>
//                     <div className='w-40 h-10 bg-[#3669C9] px-2 py-3 text-[#FFFFFF] cursor-pointer'>
//                         <button onClick={toggleButtons}>Profile details</button>
//                     </div>
//                     <div className='w-40 h-10 bg-white px-2 py-3 text-black my-4 cursor-pointer'>
//                         <button onClick={toggleButtons}>Athlete Stats</button>
//                     </div>
//                 </div>
//             )}





//         </div >
//     )
// }

// export default Userprofile



import React from 'react'

import UserProfileHeader from './UserProfileHeader'

import ProfileDetails from './ProfileDetails'

const Userprofile = () => {
    return (
        <div className='flex justify-between '>

            <div><UserProfileHeader /></div>


            <div className='py-7'>

                <ProfileDetails />
            </div>

        </div>
    )
}

export default Userprofile

