"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
    id: number;
    image: string;
    title: React.ReactNode;
    subtitle: string;
    badge: string;
}

const slides: Slide[] = [
    {
        id: 1,
        image: "/hero-school.png",
        title: <>BACK TO SCHOOL <span className="text-secondary">BUNDLE</span></>,
        subtitle: "Premium Backpacks & Stationery Sets",
        badge: "50% OFF"
    },
    {
        id: 2,
        image: "/hero-books.png",
        title: <>KNOWLEDGE IS <span className="text-secondary">POWER</span></>,
        subtitle: "Academic Books & Reference Guides",
        badge: "BUY 1 GET 1"
    },
    {
        id: 3,
        image: "/hero-art.png",
        title: <>UNLEASH YOUR <span className="text-secondary">CREATIVITY</span></>,
        subtitle: "Professional Art Supplies & Paints",
        badge: "NEW ARRIVAL"
    }
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center"
                >
                    {/* Background Image Layer - Full Cover */}
                    {/* We use a gradient overlay to ensure text readability on the left */}
                    <div
                        className="absolute right-0 top-0 h-full w-[65%] md:w-[70%] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                    {/* White Fade Gradient for smooth text transition */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent w-full md:w-3/5" />

                    {/* Content Layer */}
                    <div className="relative z-10 pl-8 md:pl-16 max-w-xl flex flex-col justify-center h-full">

                        {/* Red Badge - Mimicking the "50% OFF" sticker */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: -12 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                            className="absolute top-10 right-10 md:static md:top-auto md:right-auto md:mb-6 w-20 h-20 md:w-24 md:h-24 bg-secondary text-white rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white transform -rotate-12 z-20"
                        >
                            <span className="text-xl md:text-2xl font-extrabold leading-none text-center">{slides[current].badge.split(' ')[0]}</span>
                            <span className="text-[10px] md:text-xs font-bold leading-none mt-1">{slides[current].badge.split(' ').slice(1).join(' ')}</span>
                        </motion.div>

                        <motion.h2
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-black text-gray-900 leading-[0.9] tracking-tight mb-4 uppercase italic"
                            style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.05)" }}
                        >
                            {slides[current].title}
                        </motion.h2>

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="h-1.5 w-24 bg-primary mb-4"
                        />

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 font-bold mb-8 max-w-md"
                        >
                            {slides[current].subtitle}
                        </motion.p>

                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-fit px-8 py-3.5 bg-secondary text-white text-sm md:text-base font-black rounded-full shadow-lg shadow-secondary/30 hover:shadow-xl transition-all uppercase tracking-wider flex items-center gap-2"
                        >
                            SHOP NOW <ChevronRight size={18} />
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors z-20">
                <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors z-20">
                <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-8 md:left-16 flex gap-2 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-secondary" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                    />
                ))}
            </div>
        </div>
    );
}
