import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import SectionTag from '../Common/SectionTag';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <SectionContainer
            id="contact-info"
            className="py-[60px] lg:py-[100px] bg-white overflow-hidden"
        >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
                <div className="flex flex-col items-start text-left max-w-2xl">
                    <SectionTag text="Get In Touch" />
                    <h2 className="text-3xl md:text-4xl font-semibold mt-4 text-black leading-tight">
                        Contact <span className="text-[#0099CC]">Our </span> <br /> Consulting Team
                    </h2>
                </div>
                <p className="text-black max-w-md text-left lg:text-right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
                {/* Phone Card */}
                <div className="bg-[#000F2B] border border-[#1e293b] p-6 rounded-2xl flex items-center gap-4 hover:border-[#0099CC] transition-colors group">
                    <div className="h-12 w-12 rounded-full bg-[#0099CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0099CC] transition-colors">
                        <Phone className="h-6 w-6 text-[#0099CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Have Question ?</p>
                        <p className="text-white font-medium">+92 333 555 11</p>
                    </div>
                </div>

                {/* Email Card */}
                <div className="bg-[#000F2B] border border-[#1e293b] p-6 rounded-2xl flex items-center gap-4 hover:border-[#BE185D] transition-colors group">
                    <div className="h-12 w-12 rounded-full bg-[#BE185D]/10 flex items-center justify-center shrink-0 group-hover:bg-[#BE185D] transition-colors">
                        <Mail className="h-6 w-6 text-[#BE185D] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white font-medium">info@investfirst.ae</p>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-[#000F2B] border border-[#1e293b] p-6 rounded-2xl flex items-center gap-4 hover:border-[#0099CC] transition-colors group">
                    <div className="h-12 w-12 rounded-full bg-[#0099CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0099CC] transition-colors">
                        <MapPin className="h-6 w-6 text-[#0099CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Our Location</p>
                        <p className="text-white font-medium">Dubai ..............</p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default ContactInfo;
