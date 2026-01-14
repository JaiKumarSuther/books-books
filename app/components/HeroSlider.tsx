"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    color: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
        title: "Back to School Special",
        subtitle: "Get up to 50% OFF on complete bundles",
        color: "bg-red-700"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80",
        title: "New Curiosity Chronicles",
        subtitle: "Explore the latest adventures in reading",
        color: "bg-purple-600"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1452860606245-21c01362201d?auto=format&fit=crop&w=1200&q=80",
        title: "Premium School Bags",
        subtitle: "Durable, ergonomic, and stylish",
        color: "bg-rose-600"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl bg-gray-100 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-between px-8 md:px-16"
                >
                    {/* Background Image/Color Placeholder since we might need distinct BG for text readability */}
                    <div className={`absolute inset-0 opacity-10 ${slides[current].color}`} />

                    {/* Content */}
                    <div className="relative z-10 max-w-lg space-y-4">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className={`inline-block rounded-md px-3 py-1 text-xs font-bold text-white ${slides[current].color}`}
                        >
                            WEEKLY BEST
                        </motion.span>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl font-extrabold text-gray-900 md:text-5xl leading-tight"
                        >
                            {slides[current].title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-600"
                        >
                            {slides[current].subtitle}
                        </motion.p>
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className={`mt-4 rounded-full px-8 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all ${slides[current].color}`}
                        >
                            SHOP NOW
                        </motion.button>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative z-10 hidden md:block w-1/2 h-full"
                    >
                        {/* Using a background contain approach for the image to ensure it fits */}
                        <div
                            className="w-full h-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slides[current].image})` }}
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-2 w-2 rounded-full transition-all ${i === current ? "w-6 bg-red-700" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
