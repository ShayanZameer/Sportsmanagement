import React, { useRef, useState } from 'react'

import { FaLongArrowAltLeft } from "react-icons/fa";

import { FaMessage } from "react-icons/fa6";

import Input from './Input';


const Userprofile = () => {

    const fileInputRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);


    const handleDivClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setSelectedImage(reader.result);
            // }

            // reader.readAsDataURL(file);
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl)
        }
    }

    console.log(selectedImage);

    console.log("file inpur ref is ", fileInputRef)

    return (
        <div className='p-5'>
            {/* below div is  for user profile */}
            <div className='flex items-center'>

                <FaLongArrowAltLeft />
                <p className='px-3 font-dmSans font-bold' >User Profile</p>

            </div>



            <div className='flex '>
                {/* for initially buttons */}
                <div className=' flex flex-col py-5 flex-1'>
                    <div className='w-60 h-12 bg-[#3669C9] px-2 py-3 text-[#FFFFFF] cursor-pointer'>
                        <button>Profile details</button>
                    </div>
                    <div className='w-72 h-12 bg-white px-2 py-3 text-black my-4 cursor-pointer'>

                        <button>Athelete Stats</button>
                    </div>
                </div>

                <div className='flex-[2] my-5 px-3  '>

                    <div className="my-5 border-b-2   border-gray-100">
                        <p className='font font-dmSans font-medium'>Profile Details</p>
                    </div>


                    <div className='flex justify-between  '>



                        {/* Inputs */}
                        <div className='  w-[350px] '>
                            <div className='my-3'>

                                <Input
                                    labelText="Username"
                                    placeholder="Enter your email"
                                    Icon={FaMessage}
                                />
                            </div>

                            <div className='my-3'>

                                <Input
                                    labelText="Username"
                                    placeholder="Enter your email"
                                    Icon={FaMessage}
                                />
                            </div>

                            <div className='my-3'>

                                <Input
                                    labelText="Username"
                                    placeholder="Enter your email"
                                    Icon={FaMessage}
                                />
                            </div>

                        </div>

                        {/* IMAGE */}

                        <div onClick={handleDivClick} className='bg-black bg-cover h-[150px] w-[150px] cursor-pointer mt-4 rounded-full flex justify-center items-center font-normal ' style={{
                            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: selectedImage ? 'transparent' : 'black',
                        }} >



                            {!selectedImage && (
                                <p className='text-white font-dmSans text-[78px] '>JS</p>
                            )}
                        </div>

                        <input type="file" accept='image/* ' ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                    </div>


                </div>
            </div>





        </div >
    )
}

export default Userprofile