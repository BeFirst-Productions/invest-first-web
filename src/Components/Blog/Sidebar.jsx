import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    const latestPosts = [
        { title: "Lorem ipsum dolor sit amet", date: "11 JAN 2024", image: "/assets/images/about/about.webp" },
        { title: "Donec ipsum dolor sit amet", date: "11 JAN 2024", image: "/assets/images/about/about.webp" },
        { title: "Lorem ipsum dolor sit amet", date: "11 JAN 2024", image: "/assets/images/about/about.webp" },
        { title: "Donec ipsum dolor sit amet", date: "11 JAN 2024", image: "/assets/images/about/about.webp" },
    ];

    const exclusiveServices = [
        "Business Setup",
        "PRO Services",
        "Visa Services",
        "VAT & Accounting",
    ];

    return (
        <aside className="w-full space-y-8">

            {/* Latest Post Widget */}
            <div className="bg-[#0b1221] border border-[#0099CC] rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-[#0099CC]/20 pb-4">
                    Latest Post
                </h3>
                <div className="space-y-6">
                    {latestPosts.map((post, idx) => (
                        <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg border border-gray-800 group-hover:border-[#0099CC] transition-colors">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-[#0099CC] font-medium">{post.date}</span>
                                <h4 className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                                    {post.title}, consectetur adipiscing elit.
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exclusive Services Widget */}
            <div className="bg-[#0b1221] border border-[#0099CC] rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-[#0099CC]/20 pb-4">
                    Exclusive Services
                </h3>
                <div className="space-y-4">
                    {exclusiveServices.map((service, idx) => (
                        <div key={idx} className="bg-[#1a2336] p-4 rounded-xl flex items-center justify-between group hover:bg-[#0099CC] transition-colors duration-300 cursor-pointer">
                            <span className="text-gray-300 font-medium group-hover:text-white">{service}</span>
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 group-hover:bg-[#00335a] transition-colors">
                                <span className="text-[#0099CC] group-hover:text-white text-sm">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
