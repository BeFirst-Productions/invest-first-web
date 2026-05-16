import React from 'react';

const SectionTag = ({ text, className = "", dotColor = "#8e0b4a" }) => {
    return (
        <div className={`flex items-center gap-[8px] w-fit h-[36px] px-4 bg-[#FAFAFA] border border-[#FDFAFA] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] rounded-[12px] mb-4 ${className}`}>
            <span 
                className="w-[8px] h-[8px] rounded-full" 
                style={{ backgroundColor: dotColor }}
            ></span>
            <span className="text-[14px] md:text-[15px] font-semibold text-[#111111] tracking-tight font-sans">
                {text}
            </span>
        </div>
    );
};

export default SectionTag;
