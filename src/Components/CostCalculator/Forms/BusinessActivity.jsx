
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const activities = [
    "Business Consultancy",
    "Advertising",
    "Architecture",
    "E-Commerce",
    "Fashion Design Consultancy",
    "Production",
    "Project Management Consultancy",
    "General Trading",
    "IT Services",
    "Marketing"
];

const BusinessActivity = ({ onNext, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = activities.filter(a => a.toLowerCase().includes(search.toLowerCase()));

    const handleSelect = (activity) => {
        onChange('businessActivity', activity);
        setIsOpen(false);
    };

    return (
        <div className="w-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">Which Business activity are you looking for?</h3>

            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-gray-200 text-gray-800 p-4 rounded-lg flex justify-between items-center hover:bg-white transition-colors"
                >
                    <span className={value ? "text-gray-900 font-medium" : "text-gray-500"}>
                        {value || "Select a business activity"}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-20">
                        <div className="p-2 border-b">
                            <div className="flex items-center px-2 bg-gray-100 rounded">
                                <Search className="w-4 h-4 text-gray-500" />
                                <input
                                    type="text"
                                    className="w-full p-2 bg-transparent outline-none text-gray-800"
                                    placeholder="Search..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>
                        <div className="max-h-40 overflow-y-auto">
                            {filtered.map((activity) => (
                                <div
                                    key={activity}
                                    onClick={() => handleSelect(activity)}
                                    className={`p-3 cursor-pointer hover:bg-blue-50 text-gray-800 ${value === activity ? 'bg-blue-100 font-medium' : ''}`}
                                >
                                    {activity}
                                </div>
                            ))}
                            {filtered.length === 0 && (
                                <div className="p-4 text-gray-500 text-center">No results found</div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 flex justify-end">
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

export default BusinessActivity;
