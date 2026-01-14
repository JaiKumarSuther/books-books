"use client";

import Link from 'next/link';
import { BookOpen, Shirt, Pencil, Backpack, ArrowRight } from 'lucide-react';
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
                    Explore our wide range of education supplies. Simple, affordable, and high quality.
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
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-50/50 flex items-center justify-center p-8 group-hover:bg-primary-light/5 transition-colors duration-300">
                        <BookOpen size={64} strokeWidth={1.5} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">School Books</h2>
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
                            Curriculum books for all classes, from Montessori to A-Levels.
                        </p>
                        <Link href="/products/books" className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-100 hover:border-primary hover:text-primary transition-all duration-300 group-hover:border-gray-200">
                            View Collection <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Uniforms Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-50/50 flex items-center justify-center p-8 group-hover:bg-primary-light/5 transition-colors duration-300">
                        <Shirt size={64} strokeWidth={1.5} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">School Uniforms</h2>
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
                            High-quality stitched uniforms for boys and girls.
                        </p>
                        <Link href="/products/uniforms" className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-100 hover:border-primary hover:text-primary transition-all duration-300 group-hover:border-gray-200">
                            View Uniforms <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Stationery Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-50/50 flex items-center justify-center p-8 group-hover:bg-primary-light/5 transition-colors duration-300">
                        <Pencil size={64} strokeWidth={1.5} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">Stationery</h2>
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
                            Pens, notebooks, art supplies, and geometry boxes.
                        </p>
                        <Link href="/products/stationery" className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-100 hover:border-primary hover:text-primary transition-all duration-300 group-hover:border-gray-200">
                            View Stationery <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Bags Card */}
                <motion.div variants={fadeInUp} className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gray-50/50 flex items-center justify-center p-8 group-hover:bg-primary-light/5 transition-colors duration-300">
                        <Backpack size={64} strokeWidth={1.5} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">School Bags</h2>
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-grow">
                            Durable backpacks and lunch accessories.
                        </p>
                        <Link href="/products/school-bags" className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-100 hover:border-primary hover:text-primary transition-all duration-300 group-hover:border-gray-200">
                            View Bags <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
}
