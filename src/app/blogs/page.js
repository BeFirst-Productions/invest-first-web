import React from 'react';
import BlogListing from '@/components/Blog/BlogListing';
import InnerHero from '@/components/Common/InnerHero';

const BlogPage = () => {
    return (
        <>
             <InnerHero
                title="Our Blog"
                subtitle="Stay updated with the latest news, insights, and expert advice on business setup in the UAE."
            />
            <BlogListing />
        </>
    );
};

export default BlogPage;
