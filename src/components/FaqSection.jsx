import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
// Static dark-mode FAQ section

const faqData = [
    { question: "What is EnFu AI?", answer: "EnFu AI specializes in creating custom AI solutions, including automation, security, and predictive analytics, to help businesses innovate and grow." },
    { question: "Which industries do you serve?", answer: "We serve a wide range of industries, including tech, finance, e-commerce, and healthcare. Our solutions are adaptable to any business model." },
    { question: "How do I get started with a project?", answer: "Simply click the 'Contact Us' button and fill out the form. Our team will get in touch with you within 24 hours to discuss your needs." },
    { question: "What kind of security measures do you implement?", answer: "Security is at our core. We use AI-driven threat detection, end-to-end encryption, and follow industry best practices to protect your data." },
];

const FaqItem = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-700">
        <button onClick={onClick} className="w-full text-left py-4 flex justify-between items-center">
            <span className="text-lg font-medium text-default">{item.question}</span>
            <ChevronDown className={`w-5 h-5 accent transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="pb-4 text-muted">{item.answer}</p>
        </div>
    </div>
);

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-20 site-bg text-default">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};