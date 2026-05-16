import React from 'react';
import BlogDetail from '@/components/Blog/BlogDetail';
import InnerHero from '@/components/Common/InnerHero';

// This function is required for static site generation if needed, 
// but for now, we'll just handle the dynamic routing.
export async function generateMetadata({ params }) {
    const slug = params.slug;
    // In a real app, you'd fetch the blog post here to get the title
    const title = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
        title: `${title} | Invest First Blog`,
        description: `Read more about ${title} on Invest First.`,
    };
}

const BlogDetailPage = ({ params }) => {
    const { slug } = params;

    return (
        <>
            <InnerHero
                title="Blog Insights"
                subtitle="Expert knowledge and latest updates from the heart of UAE's business landscape."
            />
            <BlogDetail slug={slug} />
        </>
    );
};

export default BlogDetailPage;
