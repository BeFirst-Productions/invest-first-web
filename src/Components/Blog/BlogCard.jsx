import React from "react";
import Image from "next/image";
import PrimaryButton from "../Common/Buttons/PrimaryButton";

const BlogCard = ({ post }) => {
    return (
        <div className="bg-[#0b1221] rounded-2xl overflow-hidden border border-gray-800 shadow-lg mb-8 group hover:border-[#0099CC] transition-colors duration-300">
            {/* Image Container */}
            <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
                <Image
                    src={post.image || "/assets/images/about/about.webp"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Date/Author Badge (Optional based on image provided) - Not clearly visible, but nice to adhere */}
                <div className="absolute bottom-4 right-4 bg-[#001833]/80 backdrop-blur-sm p-2 rounded-lg text-white text-xs flex items-center gap-2">
                    <span className="text-[#0099CC]">User</span>
                    <span>|</span>
                    <span>11 Jan 2024</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 line-clamp-2 hover:text-[#0099CC] transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                </p>
                <div className="flex justify-start">
                    <PrimaryButton
                        text="Button"
                        url={`/blog/${post.slug}`}
                        className="!px-6 !py-2 !text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
