"use client";

import Link from "next/link";
import { Heart, RefreshCw, ShoppingCart, Star } from "lucide-react";
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
    // Calculate progress if available and totalStock exist, else default to 0 or 100
    const progressPercent = product.available && product.totalStock
        ? Math.min(100, Math.max(0, (product.available / product.totalStock) * 100))
        : 0;

    return (
        <div className={`bg-white rounded-lg p-3 border border-gray-100 hover:border-primary/50 hover:shadow-lg transition-all duration-300 relative group flex flex-col h-full hover:-translate-y-1 ${className}`}>

            {/* Discount Badge */}
            {product.discount && (
                <span className="absolute top-2 left-2 bg-primary text-secondary text-[9px] font-bold px-1.5 py-0.5 rounded-sm z-20 shadow-sm">
                    -{product.discount}%
                </span>
            )}

            {/* Icons Overlay */}
            <div className="absolute top-2 right-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-20">
                <button className="bg-white p-1.5 rounded-full shadow-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border border-gray-100">
                    <Heart size={12} />
                </button>
                <button className="bg-white p-1.5 rounded-full shadow-md text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors border border-gray-100">
                    <RefreshCw size={12} />
                </button>
            </div>


            {/* Image Container */}
            <div className="w-full h-[140px] mb-2 relative overflow-hidden rounded-md">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />

                {/* ADD TO CART - SLIDE UP */}
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
                        ${product.price ? product.price.toFixed(2) : "0.00"}
                    </span>
                    {product.oldPrice && (
                        <span className="text-gray-400 text-[10px] line-through">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>

                {/* Progress Bar (Only if stock info is available) */}
                {product.available !== undefined && (
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
                )}
            </div>
        </div>
    );
}
