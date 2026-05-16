"use client";
import Link from 'next/link';

import SectionContainer from '../layout/SectionContainer';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '../Common/Buttons/PrimaryButton';
import { documentServicesOverview } from '@/data/DocumentServicesData';

const DocumentServices = () => {
    return (
        <SectionContainer className="md:py-20 py-10">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-[2.5rem] font-bold bg-clip-text text-transparent bg-[#0099CC]">
                    {documentServicesOverview.title.highlight} <span className="text-black">{documentServicesOverview.title.rest}</span>
                </h2>
                <p className="max-w-2xl mx-auto text-base md:text-lg text-black leading-relaxed">
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
                        <div className="absolute top-[18%]  border rounded-2xl border-   p-2 left-[6%] w-[14%] h-[20%] flex items-center justify-center z-20">
                            <svg width="71" height="65" viewBox="0 0 71 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain animate-spin-slow">
                                <rect x="0.5" y="0.5" width="69.4731" height="63.0818" rx="11.5" stroke="white" stroke-opacity="0.5" />
                                <path d="M37.2272 44.5306C37.3355 44.0973 37.3355 43.5556 37.3355 43.0139C37.3355 42.4723 37.3355 42.0389 37.2272 41.4973L40.2605 39.3306C40.5855 39.1139 40.6938 38.6806 40.4772 38.3556L37.5522 33.3723C37.3355 33.0473 37.0105 32.9389 36.6855 33.0473L33.3272 34.6723C32.5688 34.0223 31.7022 33.5889 30.7272 33.1556L30.4022 29.4723C30.4022 29.1473 30.0772 28.8223 29.7522 28.8223H24.0105C23.6855 28.8223 23.3605 29.1473 23.3605 29.4723L22.9272 33.2639C21.9522 33.5889 21.1938 34.1306 20.3272 34.7806L16.9688 33.2639C16.6438 33.1556 16.2105 33.2639 16.1022 33.5889L13.1772 38.5723C12.9605 38.8973 13.0688 39.3306 13.3938 39.5473L16.4272 41.7139C16.3188 42.1473 16.3188 42.6889 16.3188 43.2306C16.3188 43.7723 16.3188 44.2056 16.4272 44.7473L13.3938 46.9139C13.0688 47.1306 12.9605 47.5639 13.1772 47.8889L16.1022 52.8723C16.3188 53.1973 16.6438 53.3056 16.9688 53.1973L20.3272 51.6806C21.0855 52.3306 21.9522 52.7639 22.9272 53.1973L23.2522 56.8806C23.2522 57.2056 23.5772 57.5306 23.9022 57.5306H29.6438C29.9688 57.5306 30.2938 57.2056 30.2938 56.8806L30.6188 53.1973C31.5938 52.8723 32.3522 52.3306 33.2188 51.6806L36.5772 53.1973C36.9022 53.3056 37.3355 53.1973 37.4438 52.8723L40.3688 47.8889C40.5855 47.5639 40.4772 47.1306 40.1522 46.9139L37.2272 44.5306ZM26.8272 48.4306C23.7938 48.4306 21.4105 46.0473 21.4105 43.0139C21.4105 39.9806 23.7938 37.5973 26.8272 37.5973C29.8605 37.5973 32.2438 39.9806 32.2438 43.0139C32.2438 46.0473 29.8605 48.4306 26.8272 48.4306Z" fill="#0099CC" />
                                <path d="M54.8845 23.839C54.9928 23.2973 54.9928 22.864 54.9928 22.4307C54.9928 21.9973 54.9928 21.564 54.8845 21.0223L57.5928 19.0723C57.9178 18.8557 57.9178 18.5307 57.8095 18.2057L55.1011 13.5473C54.8845 13.2223 54.5595 13.114 54.2345 13.3307L51.0928 14.739C50.3345 14.1973 49.5761 13.764 48.7095 13.3307L48.3845 9.97233C48.4928 9.64733 48.2761 9.43066 47.9511 9.43066H42.6428C42.3178 9.43066 41.9928 9.64733 41.9928 9.97233L41.6678 13.3307C40.8011 13.6557 40.0428 14.089 39.2845 14.739L36.1428 13.3307C35.8178 13.2223 35.4928 13.3307 35.2761 13.5473L32.5678 18.2057C32.3511 18.5307 32.4595 18.8557 32.7845 19.0723L35.4928 21.0223V22.4307C35.4928 22.864 35.4928 23.2973 35.6011 23.839L32.8928 25.789C32.5678 26.0057 32.5678 26.3307 32.6761 26.6557L35.3845 31.314C35.6011 31.639 35.9261 31.7473 36.2511 31.5307L39.3928 30.1223C40.1511 30.664 40.9095 31.0973 41.7761 31.5307L42.1011 34.889C42.1011 35.214 42.4261 35.4307 42.7511 35.4307H48.0595C48.3845 35.4307 48.7095 35.214 48.7095 34.889L49.0345 31.5307C49.9011 31.2057 50.6595 30.7723 51.4178 30.1223L54.5595 31.5307C54.8845 31.639 55.2095 31.5307 55.4261 31.314L58.1345 26.6557C58.3511 26.3307 58.2428 26.0057 57.9178 25.789L54.8845 23.839ZM45.2428 27.8473C42.2095 27.8473 39.8261 25.464 39.8261 22.4307C39.8261 19.3973 42.2095 17.014 45.2428 17.014C48.2761 17.014 50.6595 19.3973 50.6595 22.4307C50.6595 25.464 48.2761 27.8473 45.2428 27.8473Z" fill="#FFA000" />
                            </svg>
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

            <div className="mt-16 text-center">
                <p className="max-w-2xl mx-auto text-base md:text-lg text-black leading-relaxed">
                    {documentServicesOverview.footerText}
                </p>
            </div>
            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 8s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </SectionContainer>
    );
};

export default DocumentServices;
