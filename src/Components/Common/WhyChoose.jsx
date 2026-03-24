"use client";
import React from 'react';
import Container from './Layout/Contianer';

const WhyChoose = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white  mb-8">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleText}
                    </h2>
                    <div className="">
                        {data.descriptions?.map((desc, index) => (
                            <p key={index} className="text-sm md:text-base lg:text-lg ">
                                {desc}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default WhyChoose;
