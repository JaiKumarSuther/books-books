"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    { name: "Textbooks", image: "/cat-textbooks.png", href: "/products/books" },
    { name: "Uniforms", image: "/cat-uniforms.png", href: "/products/uniforms" },
    { name: "Stationery", image: "/cat-stationery.png", href: "/products/stationery" },
    { name: "Bags", image: "/cat-bags.png", href: "/products/bags", featured: true }, // Featured item
    { name: "Lunch & Water", image: "/cat-lunch.png", href: "/products/accessories" },
    { name: "Art Supplies", image: "/cat-art.png", href: "/products/stationery" },
    { name: "Shoes", image: "/cat-shoes.png", href: "/products/uniforms" },
    { name: "Notebooks", image: "/cat-notebooks.png", href: "/products/stationery" },
];

export default function TopCategories() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === "left") {
                current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <section className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wide">TOP CATEGORIES</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-600"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-6０"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {categories.map((cat, i) => (
                    <Link
                        key={i}
                        href={cat.href}
                        className={`
                            min-w-[180px] h-[220px] 
                            flex flex-col items-center justify-center 
                            p-4 rounded-xl shadow-sm border
                            hover:shadow-md transition-all duration-300
                            group relative overflow-hidden
                            ${cat.featured ? "bg-[#007BFF] border-[#007BFF]" : "bg-white border-gray-100"}
                        `}
                    >
                        {/* Circle Image Wrapper */}
                        <div className={`
                            w-28 h-28 rounded-full mb-4 flex items-center justify-center overflow-hidden
                            ${cat.featured ? "bg-white border-4 border-white/20" : "bg-gray-50 group-hover:bg-white border-2 border-transparent group-hover:border-primary/20"}
                            transition-all
                        `}>
                            {cat.image ? (
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-gray-300 font-bold">IMG</div>
                            )}
                        </div>

                        {/* Text / CTA */}
                        {cat.featured ? (
                            <div className="text-center">
                                <span className="text-white text-xs font-bold underline decoration-2 underline-offset-4 mb-1 block">
                                    SHOW NOW
                                </span>
                            </div>
                        ) : (
                            <h4 className="font-semibold text-gray-700 text-sm group-hover:text-primary transition-colors text-center">
                                {cat.name}
                            </h4>
                        )}

                    </Link>
                ))}
            </div>
        </section>
    );
}
