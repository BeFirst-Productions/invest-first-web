"use client";
import Link from 'next/link';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '../Common/Buttons/PrimaryButton';
import { documentServicesOverview } from '@/data/DocumentServicesData';

const DocumentServices = () => {
    return (
        <section className="md:py-20 py-10 relative  overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold bg-clip-text text-transparent bg-[#0099CC]">
                        {documentServicesOverview.title.highlight} <span className="text-white">{documentServicesOverview.title.rest}</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg  leading-relaxed">
                        {documentServicesOverview.description}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
                    {documentServicesOverview.services.map((service) => (
                        // Adjusted aspect ratio and max-width for better responsiveness
                        <Link href={service.href} key={service.id} className="relative group w-full max-w-[420px] aspect-339/360 min-[370px]:aspect-339/280 min-[450px]:aspect-339/260">
                            {/* SVG Background */}
                            <div className="absolute inset-0 w-full h-full drop-shadow-2xl">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 339 272"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                    preserveAspectRatio="none"
                                >
                                    <mask id={`path-1-inside-1_${service.id}`} fill="white">
                                        <path d="M339 254C339 263.941 330.941 272 321 272H18C8.05888 272 0 263.941 0 254V131.51C0 121.569 8.05887 113.51 18 113.51H74.4541C84.3952 113.51 92.4541 105.451 92.4541 95.5098V55.8369C92.4541 45.8958 84.3952 37.8369 74.4541 37.8369H18C8.05887 37.8369 0 29.778 0 19.8369V18C0 8.05887 8.05887 0 18 0H321C330.941 0 339 8.05888 339 18V254Z" />
                                    </mask>
                                    <path d="M339 254C339 263.941 330.941 272 321 272H18C8.05888 272 0 263.941 0 254V131.51C0 121.569 8.05887 113.51 18 113.51H74.4541C84.3952 113.51 92.4541 105.451 92.4541 95.5098V55.8369C92.4541 45.8958 84.3952 37.8369 74.4541 37.8369H18C8.05887 37.8369 0 29.778 0 19.8369V18C0 8.05887 8.05887 0 18 0H321C330.941 0 339 8.05888 339 18V254Z" fill="#1A2333" fillOpacity="0.9" />

                                    <path d="M321 272V269H18V272V275H321V272ZM0 254H3V131.51H0H-3V254H0ZM18 113.51V116.51H74.4541V113.51V110.51H18V113.51ZM92.4541 95.5098H95.4541V55.8369H92.4541H89.4541V95.5098H92.4541ZM74.4541 37.8369V34.8369H18V37.8369V40.8369H74.4541V37.8369ZM0 19.8369H3V18H0H-3V19.8369H0ZM18 0V3H321V0V-3H18V0ZM339 18H336V254H339H342V18H339ZM321 0V3C329.284 3 336 9.71573 336 18H339H342C342 6.40202 332.598 -3 321 -3V0ZM0 18H3C3 9.71573 9.71573 3 18 3V0V-3C6.40202 -3 -3 6.40202 -3 18H0ZM18 37.8369V34.8369C9.71573 34.8369 3 28.1212 3 19.8369H0H-3C-3 31.4349 6.40202 40.8369 18 40.8369V37.8369ZM92.4541 55.8369H95.4541C95.4541 44.2389 86.0521 34.8369 74.4541 34.8369V37.8369V40.8369C82.7384 40.8369 89.4541 47.5526 89.4541 55.8369H92.4541ZM74.4541 113.51V116.51C86.0521 116.51 95.4541 107.108 95.4541 95.5098H92.4541H89.4541C89.4541 103.794 82.7384 110.51 74.4541 110.51V113.51ZM0 131.51H3C3 123.225 9.71573 116.51 18 116.51V113.51V110.51C6.40202 110.51 -3 119.912 -3 131.51H0ZM18 272V269C9.71573 269 3 262.284 3 254H0H-3C-3 265.598 6.40203 275 18 275V272ZM321 272V275C332.598 275 342 265.598 342 254H339H336C336 262.284 329.284 269 321 269V272Z" fill={`url(#paint0_linear_${service.id})`} mask={`url(#path-1-inside-1_${service.id})`} />
                                    <defs>
                                        <linearGradient id={`paint0_linear_${service.id}`} x1="0" y1="148.94" x2="339" y2="148.94" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#780343" />
                                            <stop offset="1" stopColor="#00335A" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            {/* Icon in the Cutout */}
                            <div className="absolute top-[18%] border rounded-2xl border-white p-2 left-[6%] w-[14%] h-[20%] flex items-center justify-center z-20">
                                <Image
                                    src="/assets/images/shapes/settings.svg"
                                    alt="settings"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain animate-spin-slow"
                                />
                            </div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 h-full flex flex-col pt-6 pb-6 pr-6 md:pr-8 pl-[30%]">

                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#0099CC] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-base mb-6 leading-relaxed grow">
                                    {service.description}
                                </p>
                            </div>

                            <div className="absolute inset-x-0 bottom-6 flex justify-center z-20 pointer-events-auto">
                                <PrimaryButton text="Button" className="px-6! py-2! text-base! scale-90 md:scale-100" />
                            </div>

                            {/* Count at Left Bottom (outside content padding) */}
                            <span className="absolute bottom-6 left-6 text-5xl md:text-6xl font-bold text-white/10 select-none z-10 pointer-events-none">
                                {service.id}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Footer Text - Positioned like the top description */}
                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        {documentServicesOverview.footerText}
                    </p>
                </div>
            </Container>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default DocumentServices;
