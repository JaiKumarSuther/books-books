"use client";

import { useState } from "react";
import Link from 'next/link';
import { BookOpen, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { booksData } from "../../data/products";
import DealCard from "../../components/DealCard";

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

export default function BooksPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Pre-School", "Primary", "Middle", "Matric", "O-Level", "General", "Novels"];

    // Filter Logic
    const filteredProducts = booksData.filter(product => {
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
                    <span className="bg-primary-light text-secondary px-4 py-1.5 rounded-lg text-xs font-bold uppercase mb-4 inline-block tracking-wider w-fit">
                        Category
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                        School & Academic Books
                    </h1>
                    <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
                        Find all your course books, guides, and reference materials in one place.
                        Curated for every grade level.
                    </p>
                </div>

                {/* Right Side Image Placeholder */}
                <div className="absolute right-0 top-0 h-full w-1/3 hidden md:flex items-center justify-center bg-primary-light/30">
                    <BookOpen size={140} className="text-primary/20" strokeWidth={1.5} />
                </div>
            </motion.div>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-md mx-auto md:mx-0">
                    <input
                        type="text"
                        placeholder="Search for books by title or class..."
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
                                ? "bg-primary text-secondary shadow-md transform scale-105"
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
                            <DealCard
                                key={product.id}
                                product={{
                                    ...product,
                                    title: product.name,
                                    oldPrice: product.oldPrice || 0,
                                    discount: product.discount || 0,
                                    rating: product.rating || 0
                                }}
                            />
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
                        className="mt-6 text-secondary font-semibold hover:underline"
                    >
                        Clear Filters
                    </button>
                </motion.div>
            )}
        </div>
    );
}
