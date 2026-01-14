"use client";

import { useState } from "react";
import Link from 'next/link';
import { Backpack, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { bagsData } from "../../data/products";
import ProductCard from "../../components/ProductCard";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function SchoolBagsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Backpack", "Trolley", "Essentials"];

    // Filter Logic
    const filteredProducts = bagsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4 min-h-screen">
            {/* Header with Image */}
            <motion.div
                className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden mb-12 flex items-center p-8 md:p-12 bg-white border border-gray-100 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Content Container */}
                <div className="relative z-20 w-full md:w-2/3 flex flex-col justify-center">
                    <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-lg text-xs font-bold uppercase mb-4 inline-block tracking-wider w-fit">
                        Category
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                        School Bags
                    </h1>
                    <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
                        Durable, stylish, and spacious bags for carrying your world with you.
                        Designed for comfort and utility.
                    </p>
                </div>

                {/* Right Side Image Placeholder */}
                <div className="absolute right-0 top-0 h-full w-1/3 hidden md:flex items-center justify-center bg-orange-50/30">
                    <Backpack size={140} className="text-orange-200/50" strokeWidth={1.5} />
                </div>
            </motion.div>

            {/* Search and Categories */}
            <div className="mb-12">
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search for bags..."
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap gap-3">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px - 5 py - 2 rounded - full text - sm font - medium transition - all duration - 200
                                ${activeCategory === category
                                    ? "bg-orange-600 text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                } `}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
                <AnimatePresence>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <ProductCard key={product.id} item={product} />
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="col-span-full text-center py-10 text-gray-500 text-lg"
                        >
                            No products found matching your criteria.
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Features Section (assuming this was intended to be part of the page) */}
            <motion.section
                className="mt-20 py-12 bg-gray-50 rounded-3xl"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose Our School Essentials?</h2>
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-4">
                                <Backpack size={32} className="text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Ergonomic Design</h3>
                            <p className="text-sm text-gray-600">Comfortable straps and back support for healthy posture.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">
                                {/* Assuming a suitable icon for Lunch Boxes, e.g., a fork and knife or a box */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sandwich text-green-600"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><rect width="18" height="6" x="3" y="4" rx="2" /><path d="M12 22V4" /></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Lunch Boxes</h3>
                            <p className="text-sm text-gray-600">BPA free plastic boxes and insulated hot-pots to keep food warm and fresh.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">
                                {/* Assuming a suitable icon for Water Bottles, e.g., a droplet or a bottle */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets text-blue-600"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.72-2.91L7 4c0-1.1-.9-2-2-2H2v2.2L5 6c2.2 0 4 1.83 4 4.05 0 1.16-.57 2.26-1.72 2.91L5 20c0 1.1.9 2 2 2h3v-2.2L7 16.3z" /><path d="M10 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.72-2.91L10 4c0-1.1-.9-2-2-2H5v2.2L8 6c2.2 0 4 1.83 4 4.05 0 1.16-.57 2.26-1.72 2.91L8 20c0 1.1.9 2 2 2h3v-2.2L10 16.3z" /></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Water Bottles</h3>
                            <p className="text-sm text-gray-600">Steel flasks (keep hot/cold for hours) and durable plastic sports bottles.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}