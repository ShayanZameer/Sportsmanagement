import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlusSquare } from "react-icons/fa";
import Tooltip from './Tooltip';
import toast from 'react-hot-toast';
const Badge = ({
    Name, Price, bgColor, buttonText, ptextColour,
    iconColour, buttonbg, buttonTextColor, showDiscardButton, monthColour,
    isMonthly, editclick, isEditMode, isDisabled
}) => {
    const [texts, setTexts] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [temporaryTexts, setTemporaryTexts] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTexts = async () => {
            try {
                const savedTexts = JSON.parse(localStorage.getItem(`texts_${Name}`)) || [];
                console.log(`Loaded texts for ${Name}:`, savedTexts);
                setTexts(savedTexts);
            } catch (error) {
                console.error('Error loading texts from localStorage:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadTexts();
    }, [Name]);

    useEffect(() => {
        if (!isLoading) {
            try {
                localStorage.setItem(`texts_${Name}`, JSON.stringify(texts));
                console.log(`Saving texts for ${Name}:`, texts);
            } catch (error) {
                console.error('Error saving texts to localStorage:', error);
            }
        }
    }, [texts, Name, isLoading]);

    const handlePlusClick = () => {
        setShowInput(prevState => !prevState);
    };

    const handleSaveClick = () => {
        if (temporaryTexts.length > 0) {
            setTexts(prevTexts => [...prevTexts, ...temporaryTexts]);
            setTemporaryTexts([]);
            setInputValue("");
            setShowInput(false);
        }
        toast.success('Successfully Saved');

    };

    const handleDiscardClick = () => {
        setShowInput(false);
        setInputValue("");
        setTemporaryTexts([]);
    };

    const handleDeleteClick = (index) => {
        setTexts(prevTexts => prevTexts.filter((_, i) => i !== index));
    };

    const handleTemporaryDeleteClick = (index) => {
        setTemporaryTexts(prevTexts => prevTexts.filter((_, i) => i !== index));
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== "") {
            setTemporaryTexts(prev => [...prev, inputValue.trim()]);
            setInputValue("");
        }
    };

    return (
        <div className={`w-[330px] h-[600px] px-8 py-8 rounded-lg ${bgColor} overflow-auto`} >
            <div>
                <p className={`text-[20px] ${ptextColour} font-dmSans font-semibold`}>{Name}</p>
            </div>

            <div className='flex'>
                <p className={`text-[44px] font-inter font-semibold ${ptextColour}`}>{Price}</p>
                <div className='flex items-end mb-2'>
                    <p className={`font-inter font-semibold text-[14px] ${monthColour}`}>{isMonthly ? "/monthly" : "/yearly"}</p>
                </div>
            </div>

            <div className='flex flex-col justify-evenly my-6 overflow-auto h-[250px]'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {texts.map((text, index) => (
                            <div key={index} className='flex items-center'>
                                {!isEditMode && <FaCheck color={iconColour} />}
                                <p className={`font-bold font-dmSans px-4 w-[230px] ${ptextColour}`}>{text}</p>
                                {isEditMode && (
                                    <div className='mb-4'>
                                        <Tooltip content="Remove">
                                            <TiDeleteOutline cursor="pointer" onClick={() => handleDeleteClick(index)} size={24} color={iconColour} />
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                        ))}
                        {showInput && temporaryTexts.map((text, index) => (
                            <div key={index} className='flex items-center'>
                                <p className={`font-bold font-dmSans px-4 w-[217px] ${ptextColour}`}>{text}</p>
                                {isEditMode && (
                                    <div className="ml-1 mb-4">
                                        <Tooltip content="Delete">
                                            <TiDeleteOutline cursor="pointer" onClick={() => handleTemporaryDeleteClick(index)} size={24} color={iconColour} className='cursor-pointer ml-2' />
                                        </Tooltip>
                                    </div>
                                )}
                            </div>
                        ))}
                    </>
                )}
            </div>

            {isEditMode && (
                <div className='flex flex-col items-end'>
                    {!showInput && (
                        <FaPlusSquare onClick={handlePlusClick} className="cursor-pointer" size={22} color="black" />
                    )}

                    {showInput && (
                        <>
                            <div className='mt-4 w-full'>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Enter new text"
                                    className="w-full px-2 py-1 border border-gray-400 rounded-md"
                                />
                            </div>
                            <div className='flex justify-center w-[270px]'>
                                <div className={`w-[200px] mt-2 ml-4 h-[40px] rounded-md flex items-center justify-center ${buttonbg}`}>
                                    <button className="text-black" onClick={handleDiscardClick}>Discard</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}

            <div className='flex justify-center items-end mt-1'>
                <div onClick={isDisabled ? null : (showInput ? handleSaveClick : editclick)} className={`w-[200px] h-[40px] rounded-md border border-gray-400 flex items-center justify-center hover:bg-slate-200 ${showInput ? (bgColor === 'bg-[#FFFFFF]' ? 'bg-blue-500' : 'bg-white') : buttonbg}`}>
                    <button className={`${buttonTextColor} flex justify-center`}>{showInput ? 'Save' : buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Badge;


