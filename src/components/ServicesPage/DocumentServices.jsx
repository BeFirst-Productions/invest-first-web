"use client";
import Link from 'next/link';
import Image from 'next/image';
import SectionContainer from '../layout/SectionContainer';
import { ArrowRight } from 'lucide-react';
import PrimaryButton from '../Common/Buttons/PrimaryButton';
import { documentServicesOverview } from '@/data/DocumentServicesData';

const DocumentServices = () => {
    return (
        <section className="md:py-20 py-10 relative  overflow-hidden">
            <SectionContainer>
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold bg-clip-text text-transparent bg-[#0099CC]">
                        {documentServicesOverview.title.highlight} <span className="text-black">{documentServicesOverview.title.rest}</span>
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
                            <div className="absolute top-[18.4%] left-[2.7%] w-[16.5%] h-[18.8%] flex items-center justify-center z-20">
                                <svg width="100%" height="100%" viewBox="0 0 71 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                                    <rect x="0.5" y="0.5" width="69.4731" height="63.0818" rx="11.5" stroke="white" strokeOpacity="0.5"/>
                                    <g className="animate-spin-slow" style={{ transformOrigin: 'center' }}>
                                        <path d="M37.2252 44.5306C37.3336 44.0973 37.3336 43.5556 37.3336 43.0139C37.3336 42.4723 37.3336 42.0389 37.2252 41.4973L40.2586 39.3306C40.5836 39.1139 40.6919 38.6806 40.4752 38.3556L37.5502 33.3723C37.3336 33.0473 37.0086 32.9389 36.6836 33.0473L33.3252 34.6723C32.5669 34.0223 31.7002 33.5889 30.7252 33.1556L30.4002 29.4723C30.4002 29.1473 30.0752 28.8223 29.7502 28.8223H24.0086C23.6836 28.8223 23.3586 29.1473 23.3586 29.4723L22.9252 33.2639C21.9502 33.5889 21.1919 34.1306 20.3252 34.7806L16.9669 33.2639C16.6419 33.1556 16.2086 33.2639 16.1002 33.5889L13.1752 38.5723C12.9586 38.8973 13.0669 39.3306 13.3919 39.5473L16.4252 41.7139C16.3169 42.1473 16.3169 42.6889 16.3169 43.2306C16.3169 43.7723 16.3169 44.2056 16.4252 44.7473L13.3919 46.9139C13.0669 47.1306 12.9586 47.5639 13.1752 47.8889L16.1002 52.8723C16.3169 53.1973 16.6419 53.3056 16.9669 53.1973L20.3252 51.6806C21.0836 52.3306 21.9502 52.7639 22.9252 53.1973L23.2502 56.8806C23.2502 57.2056 23.5752 57.5306 23.9002 57.5306H29.6419C29.9669 57.5306 30.2919 57.2056 30.2919 56.8806L30.6169 53.1973C31.5919 52.8723 32.3502 52.3306 33.2169 51.6806L36.5752 53.1973C36.9002 53.3056 37.3336 53.1973 37.4419 52.8723L40.3669 47.8889C40.5836 47.5639 40.4752 47.1306 40.1502 46.9139L37.2252 44.5306ZM26.8252 48.4306C23.7919 48.4306 21.4086 46.0473 21.4086 43.0139C21.4086 39.9806 23.7919 37.5973 26.8252 37.5973C29.8586 37.5973 32.2419 39.9806 32.2419 43.0139C32.2419 46.0473 29.8586 48.4306 26.8252 48.4306Z" fill="#0099CC"/>
                                        <path d="M54.8825 23.839C54.9909 23.2973 54.9908 22.864 54.9908 22.4307C54.9908 21.9973 54.9909 21.564 54.8825 21.0223L57.5909 19.0723C57.9159 18.8557 57.9158 18.5307 57.8075 18.2057L55.0992 13.5473C54.8825 13.2223 54.5575 13.114 54.2325 13.3307L51.0909 14.739C50.3325 14.1973 49.5742 13.764 48.7075 13.3307L48.3825 9.97233C48.4909 9.64733 48.2742 9.43066 47.9492 9.43066H42.6408C42.3158 9.43066 41.9908 9.64733 41.9908 9.97233L41.6658 13.3307C40.7992 13.6557 40.0408 14.089 39.2825 14.739L36.1408 13.3307C35.8158 13.2223 35.4908 13.3307 35.2742 13.5473L32.5658 18.2057C32.3492 18.5307 32.4575 18.8557 32.7825 19.0723L35.4908 21.0223V22.4307C35.4908 22.864 35.4908 23.2973 35.5992 23.839L32.8908 25.789C32.5658 26.0057 32.5658 26.3307 32.6742 26.6557L35.3825 31.314C35.5992 31.639 35.9242 31.7473 36.2492 31.5307L39.3908 30.1223C40.1492 30.664 40.9075 31.0973 41.7742 31.5307L42.0992 34.889C42.0992 35.214 42.4242 35.4307 42.7492 35.4307H48.0575C48.3825 35.4307 48.7075 35.214 48.7075 34.889L49.0325 31.5307C49.8992 31.2057 50.6575 30.7723 51.4158 30.1223L54.5575 31.5307C54.8825 31.639 55.2075 31.5307 55.4242 31.314L58.1325 26.6557C58.3492 26.3307 58.2409 26.0057 57.9158 25.789L54.8825 23.839ZM45.2408 27.8473C42.2075 27.8473 39.8242 25.464 39.8242 22.4307C39.8242 19.3973 42.2075 17.014 45.2408 17.014C48.2742 17.014 50.6575 19.3973 50.6575 22.4307C50.6575 25.464 48.2742 27.8473 45.2408 27.8473Z" fill="#FFA000"/>
                                    </g>
                                </svg>
                            </div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 h-full flex flex-col pt-6 pb-6 pr-6 md:pr-8 pl-[30%]">

                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#0099CC] transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-base text-white mb-6 leading-relaxed grow">
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
            </SectionContainer>

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
