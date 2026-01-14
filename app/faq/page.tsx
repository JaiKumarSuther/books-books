"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do you offer home delivery?",
            answer: "Yes, we offer home delivery within [City Name] for orders above Rs. 2000. For smaller orders, a standard delivery fee applies. Please contact us on WhatsApp to place your order."
        },
        {
            question: "Do you buy old books?",
            answer: "Yes, we have a specific section for buying and selling second-hand course books. Please bring them to the store for evaluation. They must be in usable condition (no missing pages, minimal writing)."
        },
        {
            question: "Can I order by phone?",
            answer: "Absolutely! You can WhatsApp your class list and items required to our number (0300-1234567) and we will prepare your package for pickup or delivery."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 7-day exchange policy for books (if unused and condition is new) and uniforms (for size issues). The original receipt is required for any exchange. We do not offer cash refunds."
        },
        {
            question: "Do you have books for O/A Levels?",
            answer: "Yes, we stock Cambridge curriculum books, past papers (Redspot), and teacher's manuals for O and A Levels. If a specific book is out of stock, we can arrange it for you within 2-3 days."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 md:py-24 max-w-[800px] mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                    <HelpCircle className="text-primary" size={40} /> Frequently Asked Questions
                </h1>
                <p className="text-gray-600 text-lg">
                    Find answers to common questions about our services and policies.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
                            }`}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span className={`font-bold text-lg ${openIndex === index ? "text-primary" : "text-gray-900"}`}>
                                {faq.question}
                            </span>
                            <span className={`transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : "text-gray-400"}`}>
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>
                        <div
                            className={`px-6 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-6">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <a href="/contact" className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    Get in Touch
                </a>
            </div>
        </div>
    );
}
