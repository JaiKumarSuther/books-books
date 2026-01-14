```javascript
"use client";

import { useState } from "react";
import Link from 'next/link';
import { Backpack, Search, Star, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { bagsData } from "../../data/products";

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
                className="relative h-[250px] md:h-[300px] bg-orange-900 rounded-3xl overflow-hidden mb-12 flex items-end p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <div className="relative z-20 text-white w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block border border-white/30">Category</span>
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">School Bags</h1>
                            <p className="text-orange-100 max-w-lg text-sm md:text-base">
                                Durable, stylish, and spacious bags for carrying your world with you.
                            </p>
                        </div>
                    </div>
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
                                ${
    activeCategory === category
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
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
                <AnimatePresence>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <motion.div
                                layout
                                key={product.id}
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col"
                            >
                                <Link href={`/ products / ${ product.id } `} className="block h-full flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="aspect-[3/4] bg-gray-50 relative p-6 flex items-center justify-center group-hover:bg-orange-50/50 transition-colors">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-300 group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300">
                                            <Backpack size={24} />
                                        </div>
                                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-700 shadow-sm">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="font-bold text-gray-900 line-clamp-2 min-h-[48px] group-hover:text-orange-600 transition-colors">
                                                {product.name}
                                            </h3>
                                        </div>
                                        
                                        <div className="flex items-center gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={12} 
                                                    className={`${ i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300" } `} 
                                                />
                                            ))}
                                            <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                                        </div>

                                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                                            {product.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                            <span className="text-xl font-bold text-gray-900">
                                                Rs. {product.price.toLocaleString()}
                                            </span>
                                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-orange-600 hover:text-white transition-all shadow-sm">
                                                <ShoppingCart size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sandwich text-green-600"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><rect width="18" height="6" x="3" y="4" rx="2"/><path d="M12 22V4"/></svg>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Lunch Boxes</h3>
                            <p className="text-sm text-gray-600">BPA free plastic boxes and insulated hot-pots to keep food warm and fresh.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">
                                {/* Assuming a suitable icon for Water Bottles, e.g., a droplet or a bottle */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-droplets text-blue-600"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.72-2.91L7 4c0-1.1-.9-2-2-2H2v2.2L5 6c2.2 0 4 1.83 4 4.05 0 1.16-.57 2.26-1.72 2.91L5 20c0 1.1.9 2 2 2h3v-2.2L7 16.3z"/><path d="M10 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.72-2.91L10 4c0-1.1-.9-2-2-2H5v2.2L8 6c2.2 0 4 1.83 4 4.05 0 1.16-.57 2.26-1.72 2.91L8 20c0 1.1.9 2 2 2h3v-2.2L10 16.3z"/></svg>
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
```
