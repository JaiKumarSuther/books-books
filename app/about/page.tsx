"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
    return (
        <div className="py-16 md:py-24 max-w-[1024px] mx-auto px-4 font-inter">
            <motion.div
                className="text-center mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <h1 className="text-4xl md:text-5xl font-black text-secondary mb-4 tracking-tight uppercase italic">About Us</h1>
                <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
                className="grid md:grid-cols-2 gap-12 items-center mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white group">
                    <Image
                        src="/story-storefront.png"
                        alt="Books & Books Storefront"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-60"></div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Books & Books was started with a simple idea: to make school shopping easy for parents in Pakistan. We know how hard it can be to find the right books and quality uniforms in one place. That is why we built a store where you can find everything you need for the academic year.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From humble beginnings in 2010 to a trusted community staple, our growth has been driven by customer trust and our commitment to educational excellence.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="bg-primary/10 rounded-[40px] p-8 md:p-12 text-center border-2 border-primary/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h2 className="text-3xl font-black mb-4 text-secondary uppercase tracking-tight italic">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                    "Our mission is to support education by providing high-quality supplies at prices that Pakistani families can afford. We want to ensure that every student has the right tools to learn and grow."
                </p>
            </motion.div>
        </div>
    );
}