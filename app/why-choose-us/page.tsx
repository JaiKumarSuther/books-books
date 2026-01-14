"use client";

import { Award, Wallet, Store } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function WhyChooseUs() {
    return (
        <div className="py-16 md:py-24 max-w-[1280px] mx-auto px-4">
            <motion.div
                className="text-center mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We are committed to providing the best service and products for your valuable education journey.
                </p>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Award size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Trusted Quality</h2>
                    <p className="text-gray-600 leading-relaxed text-center">
                        We source our products from the best publishers and manufacturers. Whether it is the paper quality of a notebook or the stitching of a uniform, we ensure you get the best.
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-accent hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-accent-light text-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Wallet size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Affordable Prices</h2>
                    <p className="text-gray-600 leading-relaxed text-center">
                        Education can be expensive, but your supplies do not have to be. We offer competitive prices to keep your budget in check without compromising on quality.
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-success hover:-translate-y-2 transition-transform">
                    <div className="w-16 h-16 bg-green-100 text-success rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Store size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">One-Stop Solution</h2>
                    <p className="text-gray-600 leading-relaxed text-center">
                        Save time and fuel. No need to visit three different shops for books, uniforms, and stationery. Get everything you need in a single visit.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
