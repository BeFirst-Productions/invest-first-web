"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import * as LucideIcons from 'lucide-react';

const DocumentServiceProcessTime = ({ data }) => {
    if (!data || !data.items) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="bg-[#000F2B] border border-[#0099CC]/40 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative shadow-2xl overflow-hidden group">
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099CC]/10 blur-[100px] -z-10 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007EA7]/10 blur-[100px] -z-10" />

                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16 relative">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-wide">
                            {data.title}
                        </h2>
                        <h3 className="text-3xl md:text-4xl  font-semibold text-white">
                            {data.subtitle.split(data.highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <span className="text-[#0099CC]">{data.highlight}</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </h3>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {data.items.map((item, index) => {
                            const IconComponent =
                                LucideIcons[item.icon] || LucideIcons.FileText;
                            return (
                                <div
                                    key={index}
                                    className="bg-[#072357] border border-[#0099CC]/30 rounded-2xl p-6 lg:p-8 flex items-start gap-5 transition-all duration-500 hover:border-[#0099CC]/80 hover:bg-[#071835] group/card hover:shadow-[0_0_30px_rgba(0,153,204,0.15)]"
                                >
                                    {/* Icon Box */}
                                    <div className="bg-white rounded-xl p-3.5 shrink-0 flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-300">
                                        <IconComponent
                                            className="w-8 h-8 text-[#030B1B]"
                                            strokeWidth={2.5}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h4 className="text-[#0099CC] font-semibold text-lg md:text-xl leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className=" text-sm md:text-base leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DocumentServiceProcessTime;
