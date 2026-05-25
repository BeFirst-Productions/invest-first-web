import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";


const AboutCompanySection = () => {
    return (
        <section className="py-16 md:py-24  overflow-hidden relative">
             <SectionContainer
                id="about-company"
                className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
                containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
              >
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-left z-10 relative">
                    <h2 className="text-3xl md:text-[2.5rem] font-semibold mb-8">
                        <span className="text-[#0099CC]">About</span>{" "}
                        <span className="text-[#000000]">The Company</span>
                    </h2>

                    <div className="space-y-6  text-sm md:text-lg  font-normal">
                        <p>
                            Invest First is a professional business setup and corporate services consultancy in the UAE, dedicated to supporting entrepreneurs, SMEs, and multinational companies in establishing and growing their businesses confidently. With years of experience in company formation, PRO services, and UAE government relations, our experts ensure a seamless and efficient business setup experience from start to finish.
                        </p>
                        <p>
                            Starting a business in the UAE can be complex if you are unfamiliar with local regulations, licensing requirements, and government procedures. At Invest First, we simplify this journey. Our mission is to make company formation in Dubai and across the UAE clear, fast, and stress-free, providing complete transparency and professional guidance every step of the way. Whether you are an individual entrepreneur, a corporate investor, or an expanding global enterprise, we tailor our services to meet your needs and help you build a strong, legally compliant foundation for success.
                        </p>
                    </div>
                </div>
               </SectionContainer>
           

            {/* Right Graphic - Only Image */}
            <div className="w-full lg:w-1/2 relative lg:absolute lg:right-0 lg:top-10 lg:h-full flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
                <div className="relative w-full h-[250px] md:h-[300px] lg:h-[50%]">
                    <Image
                        src="/images/about/about.webp"
                        alt="About Invest First"
                        fill
                        className="object-contain object-right"
                    />
                 
                </div>
            </div>
        </section>
    );
};

export default AboutCompanySection;
