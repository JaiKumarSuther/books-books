"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

const SingleTypewriter = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const characters = Array.from(text);

    return (
        <motion.div className={className}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.05,
                        delay: delay + index * 0.03,
                        ease: "linear"
                    }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-[0.8em] bg-gray-900 ml-1 align-middle"
            />
        </motion.div>
    );
};

const RotatingTypewriter = ({ phrases }: { phrases: string[] }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [phrases.length]);

    return (
        <div className="h-[120px] flex flex-col justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <SingleTypewriter
                        text={phrases[index]}
                        className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
    const phrases = [
        "Welcome to Books & Books",
        "Your Gateway to Knowledge",
        "Quality Books & Stationery",
        "Empowering Your Learning",
        "Discover. Learn. Grow.",
    ];

    return (
        <div className="min-h-screen flex items-stretch">
            {/* Left Side - Image/Banner */}
            <div
                className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden bg-yellow-50 bg-cover bg-center"
                style={{ backgroundImage: "url('/auth-bg.png')" }}
            >
                {/* Subtle Animated Background Elements (Overlay) */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 45, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-primary/20 blur-3xl pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -30, 0],
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square bg-secondary/10 blur-3xl pointer-events-none"
                />

                {/* Glassmorphism Overlay for Content */}
                <div className="z-20 text-center p-12 w-full max-w-lg bg-white/10 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl mx-10 min-h-[280px] flex flex-col justify-center">
                    <RotatingTypewriter phrases={phrases} />

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg xl:text-xl text-gray-800 font-bold mt-4"
                    >
                        Your one-stop shop for everything you<br />need to learn and grow.
                    </motion.p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 md:px-16 xl:px-24 py-12 relative">
                <div className="max-w-md w-full mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 font-medium transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <div className="text-left mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
                        <p className="text-gray-500">{subtitle}</p>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
