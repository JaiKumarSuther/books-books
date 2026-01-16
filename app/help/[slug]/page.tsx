"use client";

import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
    Truck,
    RotateCcw,
    CreditCard,
    User,
    ShieldCheck,
    MessageCircle,
    ChevronRight,
    ArrowLeft
} from "lucide-react";

const TOPICS = [
    { slug: "shipping-delivery", icon: <Truck size={20} />, title: "Shipping & Delivery", content: "We partner with major logistics companies to ensure your books arrive safely and on time. Delivery typically takes 3-5 business days." },
    { slug: "returns-refunds", icon: <RotateCcw size={20} />, title: "Returns & Refunds", content: "If you're not satisfied with your purchase, you can return it within 7 days. Items must be unused and in original packaging." },
    { slug: "payments", icon: <CreditCard size={20} />, title: "Payments", content: "We accept Cash on Delivery (COD), Direct Bank Transfer, and major Credit/Debit cards via secure gateways." },
    { slug: "my-account", icon: <User size={20} />, title: "My Account", content: "Manage your personal details, view order history, and track current shipments from your account dashboard." },
    { slug: "security", icon: <ShieldCheck size={20} />, title: "Security", content: "Your data is protected with industry-standard encryption. We never store your credit card details on our servers." },
    { slug: "feedback", icon: <MessageCircle size={20} />, title: "Feedback", content: "We value your feedback! Let us know how we can improve your shopping experience." },
];

export default function TopicDetail() {
    const params = useParams();
    const pathname = usePathname();
    const slug = params.slug as string;

    const currentTopic = TOPICS.find(t => t.slug === slug);

    if (!currentTopic) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Topic Not Found</h1>
                    <Link href="/help" className="mt-4 text-primary hover:underline block">Return to Help Center</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1300px] mx-auto px-6 py-8">
                    <Link href="/help" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-primary mb-4 transition-colors">
                        <ArrowLeft size={16} className="mr-1" /> Back to Help Center
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-secondary">
                            {currentTopic.icon}
                        </div>
                        <h1 className="text-3xl font-black text-secondary uppercase tracking-tight">{currentTopic.title}</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1300px] mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-2">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 pl-4">Help Topics</h3>
                    {TOPICS.map((topic) => (
                        <Link
                            key={topic.slug}
                            href={`/help/${topic.slug}`}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${slug === topic.slug
                                    ? "bg-white shadow-md text-secondary border border-gray-100"
                                    : "text-gray-500 hover:bg-gray-100/50 hover:text-gray-900"
                                }`}
                        >
                            <span className={slug === topic.slug ? "opacity-100" : "opacity-70"}>{topic.icon}</span>
                            <span className="font-bold text-sm">{topic.title}</span>
                            {slug === topic.slug && <ChevronRight size={16} className="ml-auto text-primary" />}
                        </Link>
                    ))}
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <span className="bg-primary w-2 h-8 rounded-full"></span>
                            Overview
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {currentTopic.content}
                            </p>

                            <hr className="my-8 border-gray-100" />

                            <h3 className="text-lg font-bold text-gray-900 mb-4">Common Questions</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <li key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-gray-600 text-sm font-medium flex gap-3">
                                        <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xs shrink-0">?</div>
                                        Sample question related to {currentTopic.title}?
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-center justify-between">
                        <div>
                            <p className="font-bold text-blue-900">Was this article helpful?</p>
                            <p className="text-sm text-blue-700 mt-1">Found what you were looking for?</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all">Yes</button>
                            <button className="bg-white text-blue-900 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all">No</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
