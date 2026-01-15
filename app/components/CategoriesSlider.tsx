"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
    name: string;
    image: string;
    href?: string;
    featured?: boolean;
}

interface CategoriesSliderProps {
    categories: Category[];
}

export default function CategoriesSlider({ categories }: CategoriesSliderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Approx card width + gap
            scrollRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">
                    Top Categories
                </h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        aria-label="Previous categories"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                        aria-label="Next categories"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Slider Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pt-4 pb-4 scrollbar-hide snap-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {categories.map((c, i) => (
                    <div
                        key={i}
                        className="group min-w-[160px] md:min-w-[180px] p-4 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-100 hover:border-primary hover:bg-primary snap-start"
                    >
                        <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center bg-gray-50 border border-gray-100 group-hover:border-secondary/20 group-hover:shadow-inner transition-colors">
                            {c.image ? (
                                <img
                                    src={c.image}
                                    alt={c.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <span className="text-xs text-gray-400 group-hover:text-secondary">IMG</span>
                            )}
                        </div>

                        <div className="text-center">
                            <h4 className="font-bold text-sm text-gray-800 group-hover:text-secondary transition-colors">
                                {c.name}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
