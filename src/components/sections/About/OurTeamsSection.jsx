import React from 'react';

import TeamMemberCard from './TeamMemberCard';
import SectionContainer from '@/components/layout/SectionContainer';
import { team } from '@/data/teamData';

const OurTeamsSection = () => {
 
    return (
        <section className=" bg-transparent overflow-hidden">
                     <SectionContainer
                            id="about-company"
                            className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
                            containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
                          >
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000]">
                         <span className="text-[#0099CC]">Our</span> Teams
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-6">
                    {team.map((member) => (
                        <div key={member.id} className="flex justify-center">
                            <TeamMemberCard
                                image={member.image}
                                name={member.name}
                                title={member.title}
                            />
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </section>
    );
};

export default OurTeamsSection;
