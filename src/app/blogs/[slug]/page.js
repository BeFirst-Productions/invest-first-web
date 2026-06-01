import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import Schedule from '@/components/sections/Schedule';
import { blogPosts } from '@/data/blogData';
import { getSeoMetadata } from '@/services/seoService';

// Dynamic SEO metadata generation
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const path = `/blogs/${slug}`;
    const seo = await getSeoMetadata(path);
    return seo;
}

// SSG paths pre-generation
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Split title for CommonHeroSection
    const words = post.title.split(' ');
    const highlightedTitle = words.slice(0, 3).join(' ');
    const plainTitle = words.slice(3).join(' ');

    return (
        <main className=" min-h-screen font-sans">
            {/* Hero Section */}
            <CommonHeroSection
                highlightedTitle={highlightedTitle}
                plainTitle={plainTitle}
                description="Ultimate 2026 Guide: Explore company formation, jurisdictions, licensing, and document requirements for setting up a business in Dubai."
                imageUrl={post.image}
                imageAlt={post.title}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Blogs & Articles', href: '/blogs' },
                    { label: post.title, href: `/blogs/${post.slug}` }
                ]}
            />

            {/* Main Content Area */}
            <div className="max-w-[1400px] mx-auto px-[20px] md:px-[60px] lg:px-[100px] py-[60px] md:py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[60px]">
                    
                    {/* Left Column: Article Body */}
                    <article className="lg:col-span-8 bg-white rounded-[24px] p-[24px] md:p-[48px] shadow-sm border border-[#F0EFEA] overflow-hidden">
                        {/* Meta information bar */}
                        <div className="flex flex-wrap items-center gap-[16px] md:gap-[24px] pb-[32px] border-b border-[#F0EFEA] mb-[32px] text-[13px] md:text-[14px] text-[#666666]">
                            <div className="flex items-center gap-[8px]">
                                <span className="w-[32px] h-[32px] rounded-full bg-[#A2064F]/10 text-[#A2064F] flex items-center justify-center font-bold text-[12px]">
                                    IF
                                </span>
                                <span className="font-semibold text-[#111111]">{post.author}</span>
                            </div>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#CCCCCC] hidden md:block" />
                            <div className="flex items-center gap-[6px]">
                                <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{post.date}</span>
                            </div>
                            <div className="w-[4px] h-[4px] rounded-full bg-[#CCCCCC]" />
                            <div className="flex items-center gap-[6px]">
                                <svg className="w-4 h-4 text-[#888888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        {/* Article Sections Parser */}
                        <div className="space-y-[32px]">
                            {post.sections.map((section, idx) => {
                                switch (section.type) {
                                    case 'paragraph':
                                        return (
                                            <p key={idx} className="text-[15px] md:text-[17px] text-[#444444] leading-[1.75] font-sans">
                                                {section.content}
                                            </p>
                                        );

                                    case 'heading':
                                        if (section.level === 2) {
                                            return (
                                                <h2 key={idx} className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-[#111111] leading-[1.25] pt-[16px] tracking-tight font-sans relative pl-[16px] before:absolute before:left-0 before:top-[4px] before:bottom-[4px] before:w-[4px] before:bg-[#A2064F] before:rounded-[2px]">
                                                    {section.text}
                                                </h2>
                                            );
                                        } else {
                                            return (
                                                <h3 key={idx} className="text-[18px] md:text-[22px] font-bold text-[#111111] leading-[1.3] pt-[12px] font-sans">
                                                    {section.text}
                                                </h3>
                                            );
                                        }

                                    case 'list':
                                        return (
                                            <ul key={idx} className="space-y-[12px] pl-[8px]">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-[12px] text-[15px] md:text-[16px] text-[#444444] leading-[1.6]">
                                                        <span className="mt-[8px] w-[6px] h-[6px] rounded-full bg-[#A2064F] flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );

                                    case 'checkmark_list':
                                        return (
                                            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-[16px] py-[8px]">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex items-center gap-[12px] p-[16px] bg-[#FAF9F6] rounded-[12px] border border-[#F0EFEA] hover:shadow-sm transition-shadow duration-300">
                                                        <div className="w-[24px] h-[24px] rounded-full bg-[#A2064F]/10 text-[#A2064F] flex items-center justify-center flex-shrink-0">
                                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-[14px] md:text-[15px] font-medium text-[#222222]">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        );

                                    case 'jurisdictions':
                                        return (
                                            <div key={idx} className="grid grid-cols-1 gap-[20px] py-[8px]">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="group p-[24px] rounded-[16px] border border-[#F0EFEA] bg-[#FAF9F6] hover:bg-white hover:border-[#A2064F]/30 hover:shadow-md transition-all duration-300">
                                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-[12px] mb-[12px]">
                                                            <h4 className="text-[18px] md:text-[20px] font-bold text-[#111111] group-hover:text-[#A2064F] transition-colors font-sans">
                                                                {item.title}
                                                            </h4>
                                                            <span className="px-[12px] py-[4px] bg-[#A2064F]/10 rounded-full text-[11px] font-semibold text-[#A2064F] tracking-wide uppercase self-start md:self-auto">
                                                                {item.tag || 'Setup'}
                                                            </span>
                                                        </div>
                                                        <p className="text-[14px] md:text-[15px] text-[#555555] leading-[1.65]">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        );

                                    case 'licenses':
                                        return (
                                            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-[20px] py-[8px]">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="p-[20px] rounded-[16px] border border-[#F0EFEA] bg-white shadow-sm flex flex-col justify-between hover:scale-[1.02] hover:shadow-md transition-all duration-300">
                                                        <div>
                                                            <div className="w-[40px] h-[40px] rounded-[12px] bg-[#A2064F]/10 text-[#A2064F] flex items-center justify-center mb-[16px]">
                                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                            </div>
                                                            <h4 className="text-[16px] md:text-[18px] font-bold text-[#111111] mb-[8px] font-sans">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-[13px] md:text-[14px] text-[#666666] leading-[1.6]">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        );

                                    case 'highlighted_box':
                                        return (
                                            <div key={idx} className="relative overflow-hidden p-[32px] rounded-[20px] bg-gradient-to-br from-[#A2064F] to-[#660033] text-white shadow-lg">
                                                <div className="absolute right-[-20px] bottom-[-20px] w-[140px] h-[140px] rounded-full bg-white/5 pointer-events-none" />
                                                <h4 className="text-[20px] md:text-[22px] font-bold mb-[12px] tracking-tight">
                                                    Start Your Journey with Invest First
                                                </h4>
                                                <p className="text-[14px] md:text-[16px] text-white/90 leading-[1.6] mb-[24px]">
                                                    {section.content}
                                                </p>
                                                <Link 
                                                    href="/contact-us"
                                                    className="inline-flex items-center gap-[8px] bg-white text-[#A2064F] hover:bg-[#FAF9F6] px-[24px] py-[12px] rounded-full text-[14px] font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
                                                >
                                                    Book Free Consultation
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </div>
                    </article>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-4 space-y-[32px]">
                        
                        {/* Sidebar: Navigation List */}
                        <div className="bg-white rounded-[24px] p-[28px] border border-[#F0EFEA] shadow-sm">
                            <h3 className="text-[18px] font-bold text-[#111111] mb-[20px] font-sans pb-[12px] border-b border-[#F0EFEA]">
                                Table of Contents
                            </h3>
                            <nav className="space-y-[14px]">
                                {post.sections.filter(s => s.type === 'heading' && s.level === 2).map((heading, i) => (
                                    <div key={i} className="flex gap-[12px] items-start group cursor-pointer">
                                        <span className="w-[20px] h-[20px] rounded-full bg-[#FAF9F6] text-[#A2064F] border border-[#F0EFEA] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-[2px]">
                                            {i + 1}
                                        </span>
                                        <span className="text-[13px] md:text-[14px] text-[#555555] group-hover:text-[#A2064F] transition-colors leading-[1.4] font-medium font-sans">
                                            {heading.text}
                                        </span>
                                    </div>
                                ))}
                            </nav>
                        </div>

                        {/* Sidebar: CTA Box */}
                        <div className="bg-gradient-to-b from-[#111111] to-[#1F1F1F] rounded-[24px] p-[32px] text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-gradient-to-bl from-[#A2064F]/30 to-transparent rounded-full blur-[40px] pointer-events-none" />
                            <h3 className="text-[22px] font-bold mb-[12px] leading-[1.3] font-sans">
                                Ready to Setup Your Business?
                            </h3>
                            <p className="text-[13px] text-white/80 leading-[1.6] mb-[28px]">
                                Get direct access to fast digital company registration, residency visas, and 100% foreign ownership. Let our experts guide you.
                            </p>
                            
                            <ul className="space-y-[12px] mb-[28px] text-[13px]">
                                <li className="flex items-center gap-[8px]">
                                    <svg className="w-4 h-4 text-[#A2064F]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Instant Name Reservation</span>
                                </li>
                                <li className="flex items-center gap-[8px]">
                                    <svg className="w-4 h-4 text-[#A2064F]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Residency & Golden Visas</span>
                                </li>
                                <li className="flex items-center gap-[8px]">
                                    <svg className="w-4 h-4 text-[#A2064F]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Corporate Banking Assistance</span>
                                </li>
                            </ul>

                            <Link 
                                href="/contact-us"
                                className="w-full text-center block bg-gradient-to-r from-[#A2064F] to-[#660033] hover:from-[#b90d5d] hover:to-[#7c003e] text-white px-[24px] py-[14px] rounded-full text-[14px] font-bold shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300"
                            >
                                Contact Our Advisors
                            </Link>
                        </div>

                    </aside>
                </div>
            </div>

            {/* Schedule Section at Bottom */}
            <Schedule />
        </main>
    );
}
