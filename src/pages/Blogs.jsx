import React from 'react';
import { Link } from 'react-router-dom';

// Function to format the title and create a short excerpt from source data
const createBlogPosts = () => {
    return [
        { 
            id: 1, 
            title: 'Can AI Predict Virality? Insights from 12M+ Social Media Posts', 
            excerpt: 'AI models can predict viral content by analyzing engagement velocity, semantic clustering, and timing windows based on audience behavior.',
            date: 'Oct 2025' 
        },
        { 
            id: 2, 
            title: 'AI and Brand Safety—Defending Reputation in Real Time', 
            excerpt: 'Modern AI enhances brand safety by using Natural Language Processing and Geo-sensitivity modeling to avoid contextual misfires and respond to threats faster.',
            date: 'Oct 2025'
        },
        { 
            id: 3, 
            title: 'AI in Action: How Top Brands and Innovators Scale with Intelligence', 
            excerpt: 'Companies in the trillion-token club are integrating GPT into core infrastructure for tasks like personalized education and smart CRM insights.',
            date: 'Oct 2025' 
        },
        { 
            id: 4, 
            title: 'Sora 2 by OpenAI: Advancing the Frontier of AI-Generated Video', 
            excerpt: 'Sora 2 expands generative AI with synchronized audio, physics simulation, and personalized cameos, transforming media creation.',
            date: 'Sep 2025'
        },
    ];
};

export const Blogs = () => {
    const posts = createBlogPosts();

    return (
        <section id="blogs" className="min-h-screen bg-[#C1E8FF] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="px-4 py-2 bg-[#052659]/10 text-[#052659] rounded-full text-sm font-semibold border border-[#052659]/20 inline-block mb-6">
                        OUR BLOG
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#021024]">
                        Latest AI Insights
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Strategies and deep dives into the technologies automating the future.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(post => (
                        <article 
                            key={post.id} 
                            className="bg-white p-8 rounded-3xl border-2 border-[#052659]/20 shadow-lg hover:shadow-2xl hover:border-[#052659] transition-all duration-300 hover:-translate-y-2"
                        >
                            <h2 className="text-xl font-bold mb-4 text-[#021024] leading-tight">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <Link 
                                    to={`/blogs/${post.id}`} 
                                    className="text-[#052659] font-semibold hover:underline inline-flex items-center gap-2 group"
                                >
                                    Read more
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};