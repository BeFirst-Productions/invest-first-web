import React from 'react';
import Container from '@/Components/Common/Layout/Contianer';
import TeamMemberCard from './TeamMemberCard';

const OurTeamsSection = () => {
    const team = [
        {
            id: 1,
            name: "SHAFI ABOOBACKER",
            title: "Designer Of InvestFirst",
            image: "/assets/images/founders/team1.svg"
        },
        {
            id: 2,
            name: "VISMAYA",
            title: "Designer Of InvestFirst",
            image: "/assets/images/founders/team2.svg"
        },
        {
            id: 3,
            name: "DASARATH",
            title: "Designer Of InvestFirst",
            image: "/assets/images/founders/team3.svg"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-transparent overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
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
            </Container>
        </section>
    );
};

export default OurTeamsSection;
