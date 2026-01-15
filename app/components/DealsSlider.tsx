"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Heart, RefreshCw, Search, ShoppingCart, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

interface DealProduct {
    id: string;
    title: string;
    image: string;
    price: number;
    oldPrice: number;
    discount: number;
    available: number;
    totalStock: number;
    rating: number;
}

interface DealsSliderProps {
    products: DealProduct[];
    endTime: string; // ISO date string or similar to count down to
}

export default function DealsSlider({ products, endTime }: DealsSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { addToCart } = useCart();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(endTime).getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);


    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        // Optional: add scroll logic indicators if needed
    };

    return (
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-4">
                <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-base font-bold text-gray-800 uppercase tracking-wide">
                        TODAY'S BEST DEALS
                    </h3>

                    {/* Countdown Timer - Theme Colors */}
                    <div className="flex items-center gap-1 text-white font-bold text-[10px]">
                        <div className="bg-secondary px-1.5 py-0.5 rounded-[3px] min-w-[28px] text-center shadow-sm">
                            {timeLeft.days}d
                        </div>
                        <span className="text-secondary text-base font-bold">:</span>
                        <div className="bg-secondary px-1.5 py-0.5 rounded-[3px] min-w-[24px] text-center shadow-sm">
                            {timeLeft.hours}
                        </div>
                        <span className="text-secondary text-base font-bold">:</span>
                        <div className="bg-secondary px-1.5 py-0.5 rounded-[3px] min-w-[24px] text-center shadow-sm">
                            {timeLeft.minutes}
                        </div>
                        <span className="text-secondary text-base font-bold">:</span>
                        <div className="bg-secondary px-1.5 py-0.5 rounded-[3px] min-w-[24px] text-center shadow-sm">
                            {timeLeft.seconds}
                        </div>
                    </div>
                </div>

                <Link href="/deals" className="text-[11px] font-bold text-secondary hover:underline whitespace-nowrap group md:pr-2">
                    View All Products
                </Link>
            </div>

            {/* Slider */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex gap-2.5 overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x px-1"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {products.map((product) => {
                    const progressPercent = Math.min(100, Math.max(0, (product.available / product.totalStock) * 100));

                    return (
                        <div key={product.id} className="min-w-[150px] md:min-w-[calc(16.666%-10px)] snap-start bg-white rounded-lg p-3 border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative group flex flex-col h-full hover:-translate-y-1">

                            {/* Discount Badge - Primary Yellow */}
                            <span className="absolute top-2 left-2 bg-primary text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded-sm z-20 shadow-sm">
                                -{product.discount}%
                            </span>

                            {/* Icons Overlay */}
                            <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-20">
                                <button className="bg-white p-1.5 rounded-full shadow-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-gray-100">
                                    <Heart size={12} />
                                </button>
                                <button className="bg-white p-1.5 rounded-full shadow-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100">
                                    <RefreshCw size={12} />
                                </button>
                            </div>


                            {/* Image Container - Compact */}
                            <div className="w-full h-[140px] mb-2 relative overflow-hidden rounded-md">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* ADD TO CART - SLIDE UP - Secondary Color */}
                                <button
                                    onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
                                    className="absolute bottom-0 left-0 w-full bg-secondary hover:bg-black text-white font-bold text-[10px] py-2 transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-1.5"
                                >
                                    ADD TO CART
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow gap-1">
                                <Link href={`/products/${product.id}`} className="text-xs font-semibold text-gray-800 line-clamp-2 hover:text-secondary transition-colors cursor-pointer leading-tight h-8" title={product.title}>
                                    {product.title}
                                </Link>

                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={10} className={`${i < product.rating ? "fill-primary text-primary" : "fill-gray-200 text-gray-200"}`} />
                                    ))}
                                </div>

                                <div className="flex items-center gap-1.5 mt-0.5">
                                    <span className="text-secondary font-bold text-sm">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <span className="text-gray-400 text-[10px] line-through">
                                        ${product.oldPrice.toFixed(2)}
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-auto pt-1">
                                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1 overflow-hidden">
                                        <div
                                            className="bg-secondary h-1.5 rounded-full"
                                            style={{ width: `${progressPercent}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-[9px] text-gray-500">
                                        Available: <span className="text-secondary font-bold">{product.available}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
