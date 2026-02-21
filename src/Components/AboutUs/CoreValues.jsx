import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';
import { Target, Shield, Award, Lightbulb } from 'lucide-react'; // Placeholder icons
import PrimaryButton from '../Common/Buttons/PrimaryButton';

const CoreValues = () => {
    return (
        <section className="relative py-10 md:py-20 max-w-[1980px] mx-auto  overflow-hidden">
            {/* Background Wave Pattern (Placeholder - can be replaced with an image) */}
            <div className="mx-4 md:mx-6 lg:mx-12  bg-linear-to-b from-[#14293A] to-[#0B223E] rounded-[40px] overflow-hidden relative">

                {/* <Container> */}
                <div className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-[140px] 2xl:px-[200px] w-full relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: Sticky Header & Description */}
                        <div className="flex flex-col items-start justify-center lg:sticky lg:top-32 self-start">
                            <SectionTag text="Our Core Values" className="mb-4 uppercase" />

                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                                We are a <span className="text-[#0099CC]">values-driven</span><br />
                                organization committed<br />
                                to excellence.
                            </h2>

                            <PrimaryButton title="Button" />
                        </div>

                        {/* RIGHT COLUMN: Value Cards Stack */}
                        <div className="flex flex-col gap-6">
                            {/* Card 1: Client Success */}
                            <ValueCard
                                icon={<Target className="w-8 h-8 text-white" />}
                                title="Client Success"
                                description="We prioritize client success by understanding unique goals, challenges, and markets, delivering tailored solutions, proactive guidance, and measurable outcomes that help businesses grow confidently, make informed decisions, and achieve sustainable success across UAE competitive environments with long term trust, transparency, reliability, excellence."
                                gradientFrom="from-pink-500"
                                gradientTo="to-purple-500"
                            />

                            {/* Card 2: Integrity */}
                            <ValueCard
                                icon={<Shield className="w-8 h-8 text-white" />}
                                title="Integrity"
                                description="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
                                gradientFrom="from-purple-500"
                                gradientTo="to-indigo-500"
                            />

                            {/* Card 3: Excellence */}
                            <ValueCard
                                icon={<Award className="w-8 h-8 text-white" />}
                                title="Excellence"
                                description="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
                                gradientFrom="from-indigo-500"
                                gradientTo="to-blue-500"
                            />

                            {/* Card 4: Innovation */}
                            <ValueCard
                                icon={<Lightbulb className="w-8 h-8 text-white" />}
                                title="Innovation"
                                description="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus."
                                gradientFrom="from-blue-500"
                                gradientTo="to-sky-500"
                            />
                        </div>
                    </div>
                </div>
                {/* </Container> */}
            </div>
        </section>
    );
};

const ValueCard = ({ icon, title, description, gradientFrom, gradientTo }) => {
    return (
        <div className="relative group overflow-hidden rounded-2xl bg-[#0f172a] border border-gray-800/50 hover:border-gray-700 transition-colors duration-300">
            {/* Left Gradient Border */}
            <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${gradientFrom} ${gradientTo}`}></div>

            <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8 items-start">

                {/* Icon & Title Column */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4 flex-shrink-0 md:w-1/4">
                    <div className="w-14 h-14 rounded-full bg-[#1e293b] flex items-center justify-center border border-gray-700 shadow-inner">
                        {/* Custom SVG logo placeholder or Lucide Icon */}
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                {/* Description Column */}
                <div className="flex-grow">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
