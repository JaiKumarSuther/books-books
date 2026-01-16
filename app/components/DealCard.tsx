"use client";

import Link from "next/link";
import { Heart, RefreshCw, ShoppingCart, Star, Search, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

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
    description?: string; // Added optional description for list view
}

interface DealCardProps {
    product: DealProduct;
    className?: string;
    compact?: boolean;
    viewMode?: 'grid' | 'list';
}

export default function DealCard({ product, className = "", compact = false, viewMode = 'grid' }: DealCardProps) {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const { isAuthenticated } = useAuth();
    const isWishlisted = isInWishlist(product.id);

    const handleAddToCart = () => {
        addToCart({ id: product.id, title: product.title, price: product.price, image: product.image });
    };

    const toggleWishlist = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    // LIST VIEW
    if (viewMode === 'list') {
        return (
            <div className={`bg-white rounded-lg p-6 transition-all duration-300 flex flex-col md:flex-row gap-8 hover:shadow-lg border border-transparent hover:border-gray-100 ${className}`}>
                {/* Image Container */}
                <div className="w-full md:w-[280px] shrink-0 aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Discount Badge */}
                    {product.discount !== undefined && product.discount > 0 && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 z-20 rounded">
                            SALE
                        </span>
                    )}
                    <Link href={`/products/${product.id}`} className="block w-full h-full">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain p-4 mix-blend-multiply"
                        />
                    </Link>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-start text-left">
                    <Link href={`/products/${product.id}`} className="text-xl font-medium text-gray-900 hover:text-secondary transition-colors mb-2">
                        {product.title}
                    </Link>

                    {/* Stars */}
                    <div className="flex gap-0.5 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={`${i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                            />
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description || "High-quality product for your educational needs. Durable, reliable, and perfect for students and professionals alike."}
                    </p>

                    {/* Price */}
                    <div className="text-2xl font-bold text-gray-900 mb-6 font-mono tracking-tight">
                        Rs. {product.price.toLocaleString()}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="bg-primary hover:bg-primary-hover text-secondary text-xs font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-colors uppercase tracking-wider"
                        >
                            <ShoppingCart size={16} /> Add to Cart
                        </button>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleWishlist}
                                className={`p-2 transition-colors bg-transparent border-none ${isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}
                            >
                                <Heart size={18} className={isWishlisted ? "fill-red-500" : ""} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-secondary transition-colors bg-transparent border-none">
                                <RefreshCw size={18} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-secondary transition-colors bg-transparent border-none">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    // GRID VIEW (Default)
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
                <Link href={`/products/${product.id}`} className="block w-full h-full">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-4 transition-transform duration-500"
                    />
                </Link>

                {/* ACTION ICONS (Left Side) - Only show on hover */}
                <div className="absolute top-2 left-2 flex flex-col gap-2 p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 z-20">
                    <button
                        onClick={toggleWishlist}
                        className={`w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transition-colors ${isWishlisted ? "text-red-500" : "text-gray-500 hover:bg-secondary hover:text-white"}`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        <Heart size={14} className={isWishlisted ? "fill-red-500" : ""} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
                        title="Compare"
                    >
                        <RefreshCw size={14} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-secondary hover:text-white transition-colors"
                        title="Quick View"
                    >
                        <Search size={14} />
                    </button>
                </div>

                {/* ADD TO CART - Bottom Blue Bar */}
                <button
                    onClick={handleAddToCart}
                    className="absolute bottom-0 left-0 w-full bg-primary hover:bg-primary-hover text-secondary font-bold text-xs py-2.5 transition-transform duration-300 translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2 z-20"
                >
                    ADD TO CART
                </button>
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-1.5 text-left">
                <Link href={`/products/${product.id}`} className="text-[13px] text-gray-600 font-medium hover:text-secondary transition-colors leading-snug line-clamp-2" title={product.title}>
                    {product.title}
                </Link>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={10}
                            className={`${i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-gray-900 font-bold text-sm">
                        Rs. {product.price ? product.price.toLocaleString() : "0"}
                    </span>
                    {product.oldPrice !== undefined && product.oldPrice > 0 && (
                        <span className="text-gray-400 text-xs line-through decoration-gray-400">
                            Rs. {product.oldPrice.toLocaleString()}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
