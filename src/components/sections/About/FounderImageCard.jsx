import React from 'react';

const FounderImageCard = ({ image, name, title, alt }) => {
    return (
        <div className="relative group w-full max-w-[400px]">
            {/* Main Card Container */}
            <div className="relative transition-all duration-500 ease-out">
                
                {/* Decorative Background Frame */}
                <div className="absolute -inset-4 border-2 border-[#0099CC]/10 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
                
                {/* Image Wrapper */}
                <div 
                    className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl bg-gray-50 border border-gray-100"
                    style={{ aspectRatio: '3.5/4.5' }}
                >
                    {/* Using standard img for these specific large SVGs to ensure immediate rendering */}
                    <img
                        src={image}
                        alt={alt || name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                </div>

                {/* Floating Info Tag - Re-positioned for better creative flow */}
                <div className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur-xl p-4 md:p-5 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 min-w-[180px] z-30">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="h-[2px] w-4 bg-[#0099CC] rounded-full" />
                            <span className="text-[9px] uppercase tracking-widest font-black text-[#0099CC]">Executive</span>
                        </div>
                        <h4 className="text-base md:text-lg font-bold text-gray-900 tracking-tight leading-tight">
                            {name}
                        </h4>
                        <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FounderImageCard;




