"use client";
import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import SectionContainer from "../layout/SectionContainer";
import { Calendar, User, Tag, Share2, MessageCircle } from "lucide-react";

const BlogDetail = ({ slug }) => {
    // ... same dummy data ...
    const post = {
        title: "How to Start a Business in Dubai: A Comprehensive Guide for 2024",
        date: "January 15, 2024",
        author: "Admin",
        category: "Business Setup",
        image: "/images/blog/blog-1.png",
        content: `
            <p>Setting up a business in Dubai is an exciting venture that offers numerous opportunities for entrepreneurs worldwide. As a global business hub, Dubai provides a strategic location, world-class infrastructure, and a pro-business environment.</p>
            
            <h3>1. Choose Your Business Activity</h3>
            <p>The first step in your business setup journey is to decide on the nature of your business. Dubai offers thousands of business activities across various sectors, including trade, services, and industrial. Your choice will determine the type of license you need and the jurisdiction where you should operate.</p>
            
            <blockquote>
                "Dubai is not just a city; it's a gateway to global markets. The right business setup can be the foundation of your international success."
            </blockquote>

            <h3>2. Select a Legal Form</h3>
            <p>You need to choose a legal structure for your business. Common options include a Sole Establishment, Limited Liability Company (LLC), or a Branch of a Foreign Company. Each structure has its own requirements and benefits, particularly regarding ownership and liability.</p>
            
            <h3>3. Choose a Jurisdiction</h3>
            <p>Dubai offers three main jurisdictions for business setup:</p>
            <ul>
                <li><strong>Mainland:</strong> Allows you to trade anywhere in the UAE and internationally. Requires a local sponsor for some activities (though 100% foreign ownership is now common).</li>
                <li><strong>Free Zones:</strong> Offers 100% foreign ownership, tax exemptions, and full repatriation of profits. However, trading within the mainland may require a local agent.</li>
                <li><strong>Offshore:</strong> Ideal for asset protection and tax planning, but doesn't allow physical operations within the UAE.</li>
            </ul>

            <img src="/images/blog/blog-1.png" alt="Business Setup Dubai" style="width: 100%; border-radius: 1rem; margin: 2rem 0;" />

            <h3>4. Register Your Trade Name</h3>
            <p>Your business name must be unique and comply with the UAE's naming conventions. It should reflect your business activity and not contain any offensive language or references to Allah, religion, or political groups.</p>
            
            <h3>5. Apply for Initial Approval</h3>
            <p>Initial approval from the Department of Economy and Tourism (DET) or the relevant Free Zone authority signifies that the government has no objection to you starting a business. At this stage, you can proceed with other requirements like renting an office space.</p>
            
            <h3>Conclusion</h3>
            <p>While the process is streamlined, navigating the legal and administrative requirements can be complex. Working with a professional business setup consultant can save you time and ensure that your business is compliant from day one.</p>
        `
    };

    return (
        <section className="py-10 md:py-20 relative min-h-screen">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#00335a]/20 via-[#000d1a] to-[#000d1a] pointer-events-none" />

            <SectionContainer>
                <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-start justify-between">
                    {/* Main Content: Blog Detail */}
                    <div className="w-full lg:w-[65%]">
                        <article className="bg-[#0b1221] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                            {/* Featured Image */}
                            <div className="relative w-full h-[300px] md:h-[500px]">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#0099CC] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Post Metadata */}
                            <div className="p-6 md:p-10">
                                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400 text-sm border-b border-gray-800 pb-8">
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-[#0099CC]" />
                                        <span>By {post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-[#0099CC]" />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Tag size={16} className="text-[#0099CC]" />
                                        <span>{post.category}</span>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Main Content Rendering */}
                                <div 
                                    className="prose prose-invert prose-lg max-w-none 
                                    prose-headings:text-white prose-headings:font-bold 
                                    prose-p:text-gray-300 prose-p:leading-relaxed 
                                    prose-strong:text-white prose-blockquote:border-l-4 
                                    prose-blockquote:border-[#0099CC] prose-blockquote:bg-[#00335a]/20 
                                    prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
                                    prose-li:text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Social Sharing */}
                                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <h4 className="text-white font-bold text-xl flex items-center gap-2">
                                        <Share2 size={20} className="text-[#0099CC]" />
                                        Share this post:
                                    </h4>
                                    <div className="flex items-center gap-4">
                                        {[
                                            { icon: '/images/footer/facebook-icon.svg', color: "hover:bg-[#1877F2]", label: "Facebook" },
                                            { icon: '/images/footer/linkedin-icon.svg', color: "hover:bg-[#0A66C2]", label: "LinkedIn" },
                                            { icon: '/images/footer/whatsapp-icon.svg', color: "hover:bg-[#25D366]", label: "WhatsApp" },
                                        ].map((social, idx) => (
                                            <button 
                                                key={idx}
                                                className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent hover:scale-110 shadow-lg group`}
                                                aria-label={`Share on ${social.label}`}
                                            >
                                                <div className="relative w-5 h-5 invert group-hover:invert-0">
                                                    <Image src={social.icon} alt={social.label} fill className="object-contain" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>


                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[30%] sticky top-24 h-fit">
                        <Sidebar />
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default BlogDetail;
