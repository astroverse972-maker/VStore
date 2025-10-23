
import React from 'react';
import AccordionItem from '../components/AccordionItem';
import { FAQS } from '../constants';

const FaqPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-primary mb-4">Frequently Asked Questions</h1>
                    <p className="text-center text-lg text-secondary mb-12">Find answers to common questions about VStore products, shipping, returns, and more.</p>

                    <div className="space-y-4">
                        {FAQS.map((faq, index) => (
                            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;
