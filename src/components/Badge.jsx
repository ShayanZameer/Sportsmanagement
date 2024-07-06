import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaPlusSquare } from "react-icons/fa";

const Badge = ({
    Name, Price, bgColor, buttonText, ptextColour,
    iconColour, buttonbg, buttonTextColor, showDiscardButton, monthColour,
    isMonthly, editclick, isEditMode
}) => {
    const [texts, setTexts] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");

    // Load texts from localStorage when component mounts or Name changes
    useEffect(() => {
        try {
            const savedTexts = JSON.parse(localStorage.getItem(`texts_${Name}`)) || [];
            console.log(`Loaded texts for ${Name}:`, savedTexts);
            setTexts(savedTexts);
        } catch (error) {
            console.error('Error loading texts from localStorage:', error);
        }
    }, [Name]);

    // Save texts to localStorage whenever texts or Name changes
    useEffect(() => {
        try {
            localStorage.setItem(`texts_${Name}`, JSON.stringify(texts));
            console.log(`Saving texts for ${Name}:`, texts);
        } catch (error) {
            console.error('Error saving texts to localStorage:', error);
        }
    }, [texts, Name]);

    const handlePlusClick = () => {
        setShowInput(prevState => !prevState);
    };

    const handleSaveClick = () => {
        if (inputValue.trim() !== "") {
            setTexts(prevTexts => [...prevTexts, inputValue]);
            setInputValue("");
            setShowInput(false);
        }
    };

    const handleDiscardClick = () => {
        setShowInput(false);
        setInputValue("");
    };

    const handleDeleteClick = (index) => {
        setTexts(prevTexts => prevTexts.filter((_, i) => i !== index));
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
                {texts.map((text, index) => (
                    <div key={index} className='flex items-center'>
                        {!isEditMode && <FaCheck color={iconColour} />}
                        <p className={`font-bold font-dmSans px-4 w-[250px] ${ptextColour}`}>{text}</p>
                        {isEditMode && <TiDeleteOutline onClick={() => handleDeleteClick(index)} size={24} color={iconColour} />}
                    </div>
                ))}
            </div>

            {isEditMode && (
                <div className='flex flex-col items-end'>
                    <FaPlusSquare onClick={handlePlusClick} className="cursor-pointer" size={22} color="black" />
                    {showInput && (
                        <>
                            <div className='mt-4 w-full'>
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Enter new text"
                                    className="w-full px-2 py-1 border border-gray-400 rounded-md"
                                />
                            </div>
                            <div className='flex justify-center w-[270px]'>
                                <div className={`w-[200px] mt-2 h-[40px] rounded-md flex items-center justify-center ${buttonbg}`}>
                                    <button className="text-black" onClick={handleDiscardClick}>Discard</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}

            <div className='flex justify-center'>
                <div onClick={showInput ? handleSaveClick : editclick} className={`w-[200px] h-[40px] rounded-md border border-gray-400 flex items-center justify-center ${showInput ? (bgColor === 'bg-[#FFFFFF]' ? 'bg-blue-500' : 'bg-white') : buttonbg}`}>
                    <button className={`${buttonTextColor} flex justify-center`}>{showInput ? 'Save' : buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Badge;




