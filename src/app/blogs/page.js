import React from 'react';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import BlogListing from '@/Components/Blog/BlogListing';
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting';

const BlogPage = () => {
    return (
        <>
            <CommonHerosection
                title="Our Blog"
                description="Stay updated with the latest news, insights, and expert advice on business setup in the UAE."
            />
            <BlogListing />
        </>
    );
};

export default BlogPage;
