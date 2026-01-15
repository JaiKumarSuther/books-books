"use client";

import Link from "next/link";
import { Heart, RefreshCw, ShoppingCart, Star, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

export interface DealProduct {
    id: string;
    title: string;
    image: string;
    price: number;
    oldPrice: number;
    discount?: number;
    available?: number;
    totalStock?: number;
    rating: number;
}

interface DealCardProps {
    product: DealProduct;
    className?: string;
    compact?: boolean;
}

export default function DealCard({ product, className = "", compact = false }: DealCardProps) {
    const { addToCart } = useCart();

    return (
        <div className={`bg-white rounded-none p-4 transition-all duration-300 relative group flex flex-col h-full hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:z-10 ${className}`}>

            {/* Image Container */}
            <div className="w-full aspect-square relative mb-4 flex items-center justify-center bg-transparent overflow-hidden">

                {/* Discount Badge */}
                {product.discount !== undefined && product.discount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 z-20">
                        SALE
                    </span>
                )}

                {/* Main Image */}
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500"
                />

                {/* ACTION ICONS (Left Side) - Only show on hover */}
                <div className="absolute top-2 left-2 flex flex-col gap-2 p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 z-20">
                    <button
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                        title="Add to Wishlist"
                    >
                        <Heart size={14} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                        title="Compare"
                    >
                        <RefreshCw size={14} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                        title="Quick View"
                    >
                        <Search size={14} />
                    </button>
                </div>

                {/* ADD TO CART - Bottom Blue Bar */}
                <button
                    onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, image: product.image })}
                    className="absolute bottom-0 left-0 w-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-xs py-2.5 transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2 z-20"
                >
                    ADD TO CART
                </button>
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-1.5 text-left">
                <Link href={`/products/${product.id}`} className="text-[13px] text-gray-600 font-medium hover:text-[#0066FF] transition-colors leading-snug line-clamp-2" title={product.title}>
                    {product.title}
                </Link>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={10}
                            // Hollow style like in image? Or filled? Image seems hollow for empty, outlined for filled? 
                            // The reference uses outlined stars. Let's use simple fill logic.
                            className={`${i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-gray-900 font-bold text-sm">
                        ${product.price ? product.price.toFixed(2) : "0.00"}
                    </span>
                    {product.oldPrice > 0 && (
                        <span className="text-gray-400 text-xs line-through decoration-gray-400">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
