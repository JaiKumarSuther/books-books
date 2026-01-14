"use client";

import { useState } from "react";
import Link from 'next/link';
import { Shirt, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { uniformsData } from "../../data/products";
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

export default function UniformsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Boys", "Girls", "Winter", "Shoes", "Accessories"];

    // Filter Logic
    const filteredProducts = uniformsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4 min-h-screen">
            {/* Header with Image */}
            <motion.div
                className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden mb-12 flex items-end p-8 bg-[#0B1437]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent pointer-events-none" />

                <div className="relative z-20 text-white w-full max-w-3xl">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-lg text-xs font-bold uppercase mb-4 inline-block tracking-wider border border-white/10">
                        Category
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        School Uniforms
                    </h1>
                    <p className="text-blue-100 max-w-xl text-sm md:text-base leading-relaxed opacity-90">
                        Premium quality fabrics stitched to perfection for comfort and durability.
                        Available for all seasons.
                    </p>
                </div>
            </motion.div>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto md:mx-0">
                    <input
                        type="text"
                        placeholder="Search for uniforms, sizes, or accessories..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>

                {/* Categories Tabs */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? "bg-blue-600 text-white shadow-md transform scale-105"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    layout
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} Icon={Shirt} variant="blue" />
                        ))}
                    </AnimatePresence>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No items found</h3>
                    <p className="text-gray-500">
                        Try adjusting your search or filters to find what you're looking for.
                    </p>
                    <button
                        onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                        className="mt-6 text-blue-600 font-semibold hover:underline"
                    >
                        Clear Filters
                    </button>
                </motion.div>
            )}
        </div>
    );
}
