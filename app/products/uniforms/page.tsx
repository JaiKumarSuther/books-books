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
                className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden mb-12 flex items-center p-8 md:p-12 bg-white border border-gray-100 shadow-sm"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Content Container */}
                <div className="relative z-20 w-full md:w-2/3 flex flex-col justify-center">
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-lg text-xs font-bold uppercase mb-4 inline-block tracking-wider w-fit">
                        Category
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                        School Uniforms
                    </h1>
                    <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
                        Premium quality fabrics stitched to perfection for comfort and durability.
                        Available for all seasons.
                    </p>
                </div>

                {/* Right Side Image Placeholder */}
                <div className="absolute right-0 top-0 h-full w-1/3 hidden md:flex items-center justify-center bg-blue-50/30">
                    <Shirt size={140} className="text-blue-200/50" strokeWidth={1.5} />
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
                            <ProductCard key={product.id} item={product} />
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
