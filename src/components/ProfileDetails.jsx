import React, { useRef, useState } from 'react';
import { FaMessage } from "react-icons/fa6";
import Input from './Input';

const ProfileDetails = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleDivClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    }

    return (
        <div className='flex xm:justify-center'>

            <div className='flex-[2] my-5 px-3'>
                <div className="my-5 border-b-2 border-gray-100">
                    <p className='font font-dmSans font-medium'>Profile Details</p>
                </div>

                <div className='flex smm:justify-between sm:justify-evenly'>
                    {/* Inputs */}
                    <div className='2xl:w-[350px] xl:w-[350px] sm:w-[200px] lgg:w-[330px] lg:[300px] mdd:w-[270px] md:w-[250px] smm:w-[230px] xmm:w-[170px] xm:w-[150px]'>
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
                                Icon={""}
                            />
                        </div>
                        <div className='my-3'>
                            <Input
                                labelText="Username"
                                placeholder="Enter your email"
                                Icon={""}
                            />
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div onClick={handleDivClick} className='bg-black bg-cover xm:h-[50px] xm:w-[50px]
                        xmm:h-[75px] xmm:w-[75px]
                        sm:h-[100px] sm:w-[100px]
                        smm:h-[100px] smm:w-[100px]
                        mdd:h-[110px] mdd:w-[110px]
                        md:h-[110px] md:w-[110px]
                        mdd:my-[-10px]
                        mdd:ml-[15px]
                        md:my-[-10px]
                        md:ml-[15px]
                        lg:h-[160px] lg:w-[160px]
                        lgg:h-[170px] lgg:w-[170px]
                        xl:h-[180px] xl:w-[180px]
                        2xl:h-[190px] 2xl:w-[190px] cursor-pointer mt-4 rounded-full flex justify-center items-center font-normal' style={{
                            backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: selectedImage ? 'transparent' : 'black',
                        }}>
                        {!selectedImage && (
                            <p className='text-white font-dmSans xm:text-[12px] xmm:text-[14px] sm:text-[16px] smm:text-[18px] mdd:text-[20px] md:text-[24px] lg:text-[28px] lgg:text-[52px] xl:text-[70px] 2xl:text-[78px]'>JS</p>
                        )}
                    </div>
                    <input type="file" accept='image/*' ref={fileInputRef} className='hidden' onChange={handleFileChange} />
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;
