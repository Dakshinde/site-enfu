// src/pages/BlogPost.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// --- Blog Content Source (Centralized Data) ---
// Note: In a real app, this data would be fetched from a CMS/Database
const FULL_BLOG_CONTENT = {
    1: {
        title: 'Can AI Predict Virality? Insights from 12M+ Social Media Posts',
        date: 'Oct 2025',
        content: [
            { type: 'heading', text: 'Introduction' },
            { type: 'paragraph', text: 'Virality often feels like magic. However, it is becoming easier to measure. With billions of posts circulating every day, patterns start to appear. The question is: can artificial intelligence detect those patterns early enough to forecast what will go viral? Recent analysis of over 12 million social media posts reveals that AI can do more than observe—it can predict.' },
            { type: 'heading', text: 'The Challenge' },
            { type: 'paragraph', text: 'Most marketers tend to follow trends after they peak. By the time a hashtag gains popularity or a meme spreads, the chance for the greatest impact is lost. We need a way to spot momentum before it takes off.' },
            { type: 'heading', text: 'What the Data Shows' },
            { type: 'list', items: [
                'Engagement velocity: Posts that gain traction within the first 15 minutes are 78% more likely to go viral.',
                'Semantic clustering: Topics that change across platforms indicate rising interest.',
                'Influencer echo: Boosts from key accounts greatly increase reach.',
                'AI-generated captions had a 22% higher share rate than those created by humans in controlled experiments.'
            ]},
            { type: 'heading', text: 'Final Thought' },
            { type: 'paragraph', text: 'Virality isn’t random. It depends on timing, tone, and reach. With AI, marketers can move from reacting to predicting. They can turn guesswork into strategy.' }
        ]
    },
    2: {
        title: 'AI and Brand Safety—Defending Reputation in Real Time',
        date: 'Oct 2025',
        content: [
            { type: 'paragraph', text: 'In today’s hyper-connected world, a single misstep can snowball into a full-blown reputational crisis. Smarter systems that can monitor, assess, and alert in real time—before damage is done—are the answer.' },
            { type: 'heading', text: 'How AI Enhances Brand Safety' },
            { type: 'paragraph', text: 'Modern AI tools go beyond surface-level scanning. They bring depth and context to brand safety by using natural language processing to understand tone and intent, geo-sensitivity modeling to respect cultural differences, and influencer risk scoring.' },
            { type: 'heading', text: 'Measurable Benefits' },
            { type: 'list', items: [
                'Brands adopting AI for safety monitoring see a 62% drop in reputational incidents.',
                'Response to emerging threats is four times faster.',
                'There is a 38% boost in audience trust scores.'
            ]},
            { type: 'paragraph', text: 'Brand safety isn’t just about steering clear of mistakes—it’s about earning and keeping trust.' }
        ]
    }
    ,
    3: {
        title: 'AI in Action: How Top Brands and Innovators Scale with Intelligence',
        date: 'Oct 2025',
        content: [
            { type: 'paragraph', text: 'From interactive learning to legal copilots, discover how top innovators are scaling with GPT-powered intelligence.' },
            { type: 'heading', text: 'The Trillion-Token Milestone' },
            { type: 'paragraph', text: 'OpenAI recently revealed a list of 30 companies that have each processed over 1 trillion tokens through its models — a staggering milestone that highlights how deeply AI is being woven into the fabric of modern business.' },
            { type: 'heading', text: 'What Are Tokens?' },
            { type: 'paragraph', text: 'Tokens are the basic units of text that AI models process. A token might be a word, part of a word, or punctuation. For example, “AI is amazing!” could be split into tokens. When a company processes a trillion tokens, it means they’ve run massive volumes of text — conversations, code, documents — through GPT-powered systems.' },
            { type: 'heading', text: 'Who’s in the Trillion-Token Club?' },
            { type: 'paragraph', text: 'This list highlights the builders — engineers and product teams who have integrated GPT at infrastructure scale. Their work powers features like personalized learning, automated document processing, and AI copilots that augment daily work.' },
            { type: 'list', items: [
                'Startups using GPT for novel developer tools and routing (e.g., OpenRouter).',
                'Scaled companies embedding GPT into product experiences (e.g., Duolingo, Canva).',
                'Telecom and enterprise adopters integrating GPT to streamline support and operations.'
            ]},
            { type: 'paragraph', text: 'These innovators show that scaling GPT is not just about raw usage — it’s about product-led integration that amplifies human work.' }
        ]
    },
    4: {
        title: 'Sora 2 by OpenAI: Advancing the Frontier of AI-Generated Video',
        date: 'Sep 2025',
        content: [
            { type: 'paragraph', text: 'OpenAI has announced Sora 2, the latest iteration for AI-generated video. Building off the capabilities of its predecessor, Sora 2 introduces improvements in realism, synchronized audio, and complex scene aesthetics, where it may emerge as a transformative tool across industries.' },
            { type: 'heading', text: 'Overview' },
            { type: 'paragraph', text: 'Sora 2 is a multimodal generative model that can generate high fidelity video and audio from text prompts. Released in September 2025, Sora 2 expands the capabilities of AI to produce simulated complex environments, human interactions, and cinematic aspects with little user input.' },
            { type: 'heading', text: 'Key Features' },
            { type: 'list', items: [
                'Text-to-Video Generation: Users can enter descriptive prompts and have realistic video clips generated to match.',
                'Audio Comes Standard: Synchronized dialogue and ambient sounds are generated to accompany visuals.',
                'Physics Simulation Based: Object motion and interactions match real-world physics for authenticity.',
                'Personalized Cameos: Users can upload an image to see themselves in generated scenes.'
            ]},
            { type: 'heading', text: 'Platform Availability' },
            { type: 'paragraph', text: 'OpenAI introduced a Sora app for iOS, providing video generation, editing, and sharing to social platforms. Features include watermark-free exports and a community feed.' },
            { type: 'heading', text: 'Applications' },
            { type: 'paragraph', text: 'Sora 2 offers broad implications across media, education, and marketing — enabling creators to produce high-quality content without traditional infrastructure.' },
            { type: 'heading', text: 'Ethical Considerations' },
            { type: 'paragraph', text: 'OpenAI continues to iterate on safeguards to limit misuse, especially regarding impersonation and harmful content. Responsible deployment and policy guardrails remain critical.' },
            { type: 'paragraph', text: 'Conclusion: Sora 2 is a major step forward for generative video. It will empower creators and organizations, but must be used responsibly.' }
        ]
    }
};
// --- End Blog Content Source ---

export const BlogPost = () => {
    // Uses react-router-dom to get the 'id' parameter from the URL (e.g., /blogs/1)
    const { id } = useParams();

    const post = FULL_BLOG_CONTENT[id];

    if (!post) {
        return (
            <div className="min-h-screen pt-32 site-bg text-default text-center">
                <h1 className="text-4xl">404 - Article Not Found</h1>
                <p className="mt-4"><Link to="/blogs" className="accent hover:underline">Go back to all blogs</Link></p>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-16 site-bg text-default">
            <div className="max-w-3xl mx-auto px-4">
                
                <Link to="/blogs" className="flex items-center mb-10 text-sm accent hover:opacity-90 transition-colors duration-200">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Insights
                </Link>

                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-default">{post.title}</h1>
                <p className="text-lg mb-8 text-muted">Published: {post.date}</p>
                <hr className="mb-10 border-gray-700" />

                {post.content.map((block, index) => {
                    if (block.type === 'heading') {
                        return <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-default">{block.text}</h2>;
                    }
                    if (block.type === 'paragraph') {
                        return <p key={index} className="text-lg mb-6 leading-relaxed text-muted">{block.text}</p>;
                    }
                    if (block.type === 'list') {
                        return (
                            <ul key={index} className="list-disc list-inside space-y-3 mb-6 pl-4 text-muted">
                                {block.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        );
                    }
                    return null;
                })}

            </div>
        </div>
    );
};