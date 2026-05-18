import React from 'react';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import { valueAddedServicesData } from '@/data/ValueAddedServicesData';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionContainer from '@/components/layout/SectionContainer';

const ValueAddedServicesListing = () => {
    // Helper to generate slug from title - matching the ones in map
    const getSlug = (title) => {
        if (title.includes("VAT")) return "vat-corporate-tax";
        if (title.includes("Medical")) return "medical-insurance";
        if (title.includes("Trademark")) return "trademark-registration";
        if (title.includes("Branding")) return "branding-design";
        if (title.includes("Digital")) return "digital-marketing";
        if (title.includes("Web")) return "web-development";
        return "#";
    };

    return (
        <>
            <CommonHerosection
                title="Value Added Services"
                description="Elevate your business with our range of professional support services designed for growth and compliance in the UAE."
            />
            
            <section className="py-20 bg-black">
                <SectionContainer>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {valueAddedServicesData.map((service) => (
                            <Link 
                                key={service.id} 
                                href={`/value-added-services/${getSlug(service.title)}`}
                                className="group bg-[#010b14] border border-[#0099CC]/20 p-8 rounded-3xl hover:border-[#0099CC] transition-all duration-300 flex flex-col justify-between h-full"
                            >
                                <div>
                                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#0099CC] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 line-clamp-3 mb-6">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="flex items-center text-[#0099CC] font-medium gap-2">
                                    Learn More <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </SectionContainer>
            </section>

        </>
    );
};

export default ValueAddedServicesListing;
