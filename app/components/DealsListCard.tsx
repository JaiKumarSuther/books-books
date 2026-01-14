"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Repeat, Search, Star } from "lucide-react";
import Price from "./Price";
import Rating from "./Rating";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

interface DealsListCardProps {
    item: {
        id: string;
        title: string;
        price: string | number;
        oldPrice?: string | number;
        description?: string;
        rating?: number;
        image?: string;
        countdown?: { days: number; hours: number; minutes: number; seconds: number };
        badge?: string;
    }
}

export default function DealsListCard({ item }: DealsListCardProps) {
    const { addToCart } = useCart();
    const price = typeof item.price === 'number' ? item.price : Number(item.price.toString().replace(/[^0-9.-]+/g, ""));

    const handleAddToCart = () => {
        addToCart({
            id: item.id,
            title: item.title,
            price
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
        >
            {/* Image Section */}
            <div className="relative w-full md:w-[280px] shrink-0">
                <div className="aspect-square bg-gray-50 rounded-xl relative flex items-center justify-center p-4">
                    {/* Placeholder or Image */}
                    {item.image ? (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">IMG</div>
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">IMG</div>
                    )}

                    {/* Badge */}
                    {item.badge && (
                        <span className="absolute top-0 left-0 bg-[#FF4D4D] text-white text-[10px] font-bold px-2 py-1 uppercase rounded-tl-xl rounded-br-lg z-10">
                            {item.badge}
                        </span>
                    )}

                    {/* Countdown Overlay */}
                    {item.countdown && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 w-[90%] justify-center">
                            {Object.entries(item.countdown).map(([unit, val], i) => (
                                <div key={unit} className={`bg-[#0066FF] text-white flex flex-col items-center justify-center w-10 h-10 rounded text-center`}>
                                    <span className="text-xs font-bold leading-none">{val}</span>
                                    <span className="text-[8px] uppercase opacity-80 leading-none mt-0.5">{unit === 'days' ? 'Days' : unit === 'hours' ? 'Hrs' : unit === 'minutes' ? 'Min' : 'Sec'}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-center">
                <Link href={`/products/${item.id}`} className="hover:text-blue-600 transition-colors">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                </Link>

                <div className="mb-3">
                    <Rating value={item.rating ?? 5} />
                </div>

                <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2 md:line-clamp-3">
                    {item.description || "An aluminum Apple Watch Series 9 paired with the latest Sport Loop is carbon neutral. Learn more about Apple's commitment to the environment at apple.com/2030."}
                </p>

                <div className="mb-4">
                    <div className="flex items-end gap-3">
                        <span className="text-xl font-bold text-[#FF4D4D]">Rs {price.toLocaleString()}</span>
                        {item.oldPrice && <span className="text-sm text-gray-400 line-through mb-1">Rs {item.oldPrice}</span>}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleAddToCart}
                        className="bg-[#0066FF] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors flex items-center gap-2 uppercase tracking-wide active:scale-95 transform"
                    >
                        <ShoppingCart size={16} />
                        Add to cart
                    </button>

                    <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <Heart size={16} />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <Repeat size={16} />
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                        <Search size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
