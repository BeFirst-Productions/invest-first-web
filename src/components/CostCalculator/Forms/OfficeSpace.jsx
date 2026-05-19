
import React from 'react';

const OfficeSpace = ({ onNext, onPrev, value, onChange }) => {
    const options = ["Yes", "No", "Not Sure"];

    const handleSelect = (option) => {
        onChange('officeSpace', option);
    };

    return (
        <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">Do you require an Office Space?</h3>

            <div className="space-y-4">
                {options.map((option) => (
                    <label
                        key={option}
                        className={`
              flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 border
              ${value === option
                                ? 'bg-blue-900/40 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                                : 'bg-gray-800/40 border-gray-700 hover:border-gray-500 hover:bg-gray-800/60'
                            }
            `}
                    >
                        <input
                            type="radio"
                            name="officeSpace"
                            value={option}
                            checked={value === option}
                            onChange={() => handleSelect(option)}
                            className="mr-3 w-5 h-5 accent-cyan-500"
                        />
                        <span className="text-white font-medium">{option}</span>
                    </label>
                ))}
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={onPrev}
                    className="px-6 py-2 rounded-full text-gray-300 font-medium hover:text-white transition-colors flex items-center gap-2"
                >
                    Previous
                </button>

                <button
                    onClick={onNext}
                    disabled={!value}
                    className={`px-8 py-3 rounded-full text-white font-medium transition-all duration-300
            ${value
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:shadow-cyan-500/50'
                            : 'bg-gray-700 cursor-not-allowed opacity-50'
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default OfficeSpace;
