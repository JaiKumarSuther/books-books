"use client";

import Link from 'next/link';
import { BookOpen, Shirt, Pencil, Backpack } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Products() {
    return (
        <div className="py-16 md:py-24 max-w-[1280px] mx-auto px-4">
            <motion.div
                className="text-center mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore our wide range of education supplies. Click on a category to see more details.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Books Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <BookOpen size={64} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">School Books</h2>
                        <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                            Curriculum books for all classes, from Montessori to A-Levels.
                        </p>
                        <Link href="/products/books" className="block w-full py-3 text-center bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border border-gray-200 hover:border-primary">
                            View Books Collection
                        </Link>
                    </div>
                </motion.div>

                {/* Uniforms Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <Shirt size={64} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">School Uniforms</h2>
                        <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                            High-quality stitched uniforms for boys and girls.
                        </p>
                        <Link href="/products/uniforms" className="block w-full py-3 text-center bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border border-gray-200 hover:border-primary">
                            View Uniforms
                        </Link>
                    </div>
                </motion.div>

                {/* Stationery Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <Pencil size={64} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Stationery</h2>
                        <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                            Pens, notebooks, art supplies, and geometry boxes.
                        </p>
                        <Link href="/products/stationery" className="block w-full py-3 text-center bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border border-gray-200 hover:border-primary">
                            View Stationery
                        </Link>
                    </div>
                </motion.div>

                {/* Bags Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all h-full">
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <Backpack size={64} className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">School Bags</h2>
                        <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                            Durable backpacks and lunch accessories.
                        </p>
                        <Link href="/products/school-bags" className="block w-full py-3 text-center bg-gray-50 hover:bg-primary hover:text-white text-gray-700 font-semibold rounded-lg transition-colors border border-gray-200 hover:border-primary">
                            View Bags
                        </Link>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}
