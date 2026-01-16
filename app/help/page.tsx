"use client";

import React, { useState } from "react";
import {
    Search,
    ChevronDown,
    ArrowRight,
    Truck,
    RotateCcw,
    CreditCard,
    User,
    ShieldCheck,
    MessageCircle,
    Mail,
    Phone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HELP_TOPICS = [
    { icon: <Truck size={24} />, title: "Shipping & Delivery", desc: "Track orders and delivery times" },
    { icon: <RotateCcw size={24} />, title: "Returns & Refunds", desc: "7-day easy return policy" },
    { icon: <CreditCard size={24} />, title: "Payments", desc: "COD and Bank Transfer options" },
    { icon: <User size={24} />, title: "My Account", desc: "Manage your profile and orders" },
    { icon: <ShieldCheck size={24} />, title: "Security", desc: "Your data protection is priority" },
    { icon: <MessageCircle size={24} />, title: "Feedback", desc: "Share your experience with us" },
];

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION */}
            <section className="bg-primary pt-20 pb-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                </div>

                <div className="max-w-[800px] mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-secondary mb-6 tracking-tighter"
                    >
                        How can we help you today?
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative max-w-xl mx-auto"
                    >
                        <input
                            type="text"
                            placeholder="Search for articles, topics..."
                            className="w-full h-16 rounded-2xl px-14 text-lg font-medium bg-white shadow-2xl shadow-secondary/10 border-none outline-none focus:ring-4 focus:ring-secondary/5 transition-all"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-black transition-colors text-sm uppercase tracking-wider">
                            Search
                        </button>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-[1300px] mx-auto px-6 -mt-10 mb-24 space-y-24 relative z-20">

                {/* TOPIC CARDS */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {HELP_TOPICS.map((topic, idx) => (
                        <motion.div
                            key={topic.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary transition-all cursor-pointer group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-primary transition-colors">
                                {topic.icon}
                            </div>
                            <h3 className="text-xl font-black text-secondary mb-2 uppercase tracking-tight italic">
                                {topic.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-6">
                                {topic.desc}
                            </p>
                            <div className="flex items-center gap-2 text-secondary font-black text-xs uppercase tracking-widest">
                                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </section>


                {/* CONTACT SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-black text-secondary tracking-tighter mb-4 italic uppercase">
                                Still need help?
                            </h2>
                            <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                Our support team is available 24/7 to help you with anything you need.
                                We are just a message away!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-primary transition-all">
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">WhatsApp</p>
                                    <p className="font-bold text-secondary">+92 300 1234567</p>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-primary transition-all">
                                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Us</p>
                                    <p className="font-bold text-secondary">support@books.pk</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary rounded-[40px] p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                        <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-tighter">
                            Direct Support Form
                        </h3>
                        <div className="space-y-4 relative z-10">
                            <input
                                type="text"
                                placeholder="Order ID (Optional)"
                                className="w-full bg-white/50 backdrop-blur-sm border border-secondary/10 rounded-xl px-5 py-4 focus:bg-white transition-all outline-none font-medium"
                            />
                            <textarea
                                placeholder="Describe your issue..."
                                rows={4}
                                className="w-full bg-white/50 backdrop-blur-sm border border-secondary/10 rounded-xl px-5 py-4 focus:bg-white transition-all outline-none font-medium"
                            ></textarea>
                            <button className="w-full bg-secondary text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-secondary/20 active:scale-[0.98]">
                                Submit Ticket
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
