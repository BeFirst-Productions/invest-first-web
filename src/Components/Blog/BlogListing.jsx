"use client";
import React, { useState } from "react";
import Container from "../Common/Layout/Contianer";
import BlogCard from "./BlogCard";
import Sidebar from "./Sidebar";

const BlogListing = () => {
    // Extended dummy data to demonstrate pagination
    const blogPosts = Array.from({ length: 50 }, (_, i) => ({
        title: `Blog Post Title ${i + 1}: Lorem ipsum dolor sit amet`,
        description: "Donec ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
        image: "/assets/images/about/about.webp",
        slug: `blog-post-${i + 1}`
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(blogPosts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Optional: Scroll to top of section
        const section = document.getElementById('blog-listing-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const renderPageNumbers = () => {
        // Desktop Logic: Current, Current+1, Total-1, Total
        const desktopPages = [currentPage, currentPage + 1, totalPages - 1, totalPages]
            .filter((page, index, self) =>
                page >= 1 && page <= totalPages && self.indexOf(page) === index
            )
            .sort((a, b) => a - b);

        // Mobile Logic: Current, Total only
        const mobilePages = [currentPage, totalPages]
            .filter((page, index, self) =>
                page >= 1 && page <= totalPages && self.indexOf(page) === index
            )
            .sort((a, b) => a - b);

        const renderButtons = (pages) => (
            <>
                {pages.map((pageNum, index) => {
                    const isGap = index > 0 && pageNum - pages[index - 1] > 1;
                    return (
                        <React.Fragment key={pageNum}>
                            {isGap && (
                                <span className="text-[#0099CC] font-bold text-xl px-1">...</span>
                            )}
                            <button
                                onClick={() => paginate(pageNum)}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all
                                    ${currentPage === pageNum
                                        ? 'bg-[#0099CC] text-white border-[#0099CC]'
                                        : 'border-[#0099CC] text-[#0099CC] hover:bg-[#0099CC] hover:text-white'}`}
                            >
                                {pageNum}
                            </button>
                        </React.Fragment>
                    );
                })}
            </>
        );

        return (
            <>
                {/* Mobile View */}
                <div className="flex md:hidden items-center gap-2">
                    {renderButtons(mobilePages)}
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex items-center gap-2">
                    {renderButtons(desktopPages)}
                </div>
            </>
        );
    };

    return (
        <section id="blog-listing-section" className="py-10 md:py-20  relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-[#00335a]/20 via-[#000d1a] to-[#000d1a] pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row gap-12 relative z-10 items-start justify-between">
                    {/* Main Content: Blog Posts */}
                    <div className="w-full lg:w-[58%] flex flex-col gap-12">
                        {currentPosts.map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))}

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
                                <button
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 rounded-lg border border-[#0099CC] transition-all
                                        ${currentPage === 1 ? 'opacity-50 cursor-not-allowed text-gray-500' : 'hover:bg-[#0099CC] text-[#0099CC] hover:text-white'}`}
                                >
                                    Previous
                                </button>

                                {renderPageNumbers()}

                                <button
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 rounded-lg border border-[#0099CC] transition-all
                                        ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed text-gray-500' : 'hover:bg-[#0099CC] text-[#0099CC] hover:text-white'}`}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar with Sticky Behavior */}
                    <div className="w-full lg:w-[30%] sticky top-24 h-fit">
                        <Sidebar />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogListing;
