"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import { Users, Calendar, BarChart3, Zap, Radio, Settings } from 'lucide-react';

const iconMap = {
    Users: Users,
    Calendar: Calendar,
    BarChart: BarChart3,
    Zap: Zap,
    Radio: Radio,
    Settings: Settings
};

const LicenseBenefits = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20 ">
            <Container>
                <div className="">
                    {/* Header */}
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-3xl md:text-4xl  font-semibold max-w-xl 2xl:max-w-2xl text-white leading-tight">
                            <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleText}
                        </h2>
                        <p className=" mt-6 text-sm md:text-base lg:text-lg max-w-3xl leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {data.items.map((item) => {
                            const IconComponent = iconMap[item.icon] || Settings;
                            return (
                                <div
                                    key={item.id}
                                    className="bg-[#660033]  rounded-3xl px-5 py-8 md:p-10 border-2 border-[#660033] hover:border-[#0099CC] transition-all duration-300 group"
                                >
                                    {/* Icon Container */}
                                    <div className="w-14 h-14 rounded-xl border-2 border-[#0099CC] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-7 h-7 text-[#0099CC]" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className=" text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LicenseBenefits;
