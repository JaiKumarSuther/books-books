"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import DealCard, { DealProduct } from "./DealCard";

interface DealsSliderProps {
    products: DealProduct[];
    endTime: string; // ISO date string or similar to count down to
}

export default function DealsSlider({ products, endTime }: DealsSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

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
        // Optional tracking
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
                {products.map((product) => (
                    <div key={product.id} className="min-w-[150px] md:min-w-[calc(16.666%-10px)] snap-start h-full">
                        <DealCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    );
}
