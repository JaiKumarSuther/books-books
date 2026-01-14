"use client";

import { Backpack, Utensils, Droplets } from "lucide-react";
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
            staggerChildren: 0.1,
        },
    },
};

export default function SchoolBagsPage() {
    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4">
            {/* Header with Image */}
            <motion.div
                className="relative h-[300px] bg-gray-100 rounded-3xl overflow-hidden mb-12 flex items-end p-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* <img src="/product_bags.png" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold">School Bags</h1>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Backpack size={32} /> Backpacks
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        We understand that school bags need to be tough. Our collection features reinforced stitching and high-quality zippers to withstand daily use.
                    </p>

                    <motion.div
                        className="space-y-4"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Character Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Spiderman, Frozen, Ben10, Barbie, and other popular characters for junior classes.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Solid Colors</h3>
                            <p className="text-sm text-gray-600 mt-1">Durable parachute bags used by senior students for their reliability.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Laptop Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Padded bags suitable for college and university students carrying laptops.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Trolley Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Easy-to-pull trolley bags to reduce the burden on shoulders.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Utensils size={32} /> Lunch & Water
                    </h2>
                    <motion.div
                        className="grid sm:grid-cols-2 gap-6"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-4">
                                <Utensils size={32} className="text-orange-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Lunch Boxes</h3>
                            <p className="text-sm text-gray-600">BPA free plastic boxes and insulated hot-pots to keep food warm and fresh.</p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">
                                <Droplets size={32} className="text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Water Bottles</h3>
                            <p className="text-sm text-gray-600">Steel flasks (keep hot/cold for hours) and durable plastic sports bottles.</p>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </div>
    );
}
