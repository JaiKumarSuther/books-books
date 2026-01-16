"use client";

import Link from "next/link";
import { Heart, RefreshCw, ShoppingCart, Star, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-xl p-6 transition-all duration-300 flex flex-col md:flex-row gap-8 hover:shadow-xl border border-transparent hover:border-gray-100 ${className}`}
            >
                {/* Image Container */}
                <div className="w-full md:w-[280px] shrink-0 aspect-[4/3] bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden group/img">
                    {/* Discount Badge */}
                    {product.discount !== undefined && product.discount > 0 && (
                        <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 z-20 rounded-full shadow-lg">
                            -{product.discount}% OFF
                        </span>
                    )}
                    <Link href={`/products/${product.id}`} className="block w-full h-full">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain p-4 mix-blend-multiply"
                        />
                    </Link>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-start text-left py-2">
                    <Link href={`/products/${product.id}`} className="text-xl font-bold text-gray-900 hover:text-secondary transition-colors mb-2 leading-tight">
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
                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed max-w-xl">
                        {product.description || "High-quality product for your educational needs. Durable, reliable, and perfect for students and professionals alike."}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="text-2xl font-black text-secondary font-mono tracking-tighter">
                            Rs. {product.price.toLocaleString()}
                        </div>
                        {product.oldPrice && (
                            <span className="text-sm text-gray-400 line-through">Rs. {product.oldPrice.toLocaleString()}</span>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAddToCart}
                            className="bg-primary hover:bg-primary-hover text-secondary text-xs font-bold px-8 py-3.5 rounded-full flex items-center gap-2 shadow-lg shadow-primary/20 transition-colors uppercase tracking-widest"
                        >
                            <ShoppingCart size={16} /> Add to Cart
                        </motion.button>

                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleWishlist}
                                className={`p-3 rounded-full transition-colors bg-gray-50 ${isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500 hover:bg-red-50"}`}
                            >
                                <Heart size={20} className={isWishlisted ? "fill-red-500" : ""} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 rounded-full text-gray-400 hover:text-secondary hover:bg-primary/10 transition-colors bg-gray-50"
                            >
                                <RefreshCw size={20} />
                            </motion.button>
                        </div>
                    </div>

                </div>
            </motion.div>
        )
    }

    // GRID VIEW (Default)
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`bg-white rounded-2xl p-4 transition-all duration-500 relative group flex flex-col h-full hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:z-10 border border-gray-100/50 hover:border-primary/20 ${className}`}
        >

            {/* Image Container */}
            <div className="w-full aspect-square relative mb-4 flex items-center justify-center bg-gray-50/50 rounded-xl overflow-hidden">

                {/* Discount Badge */}
                {product.discount !== undefined && product.discount > 0 && (
                    <motion.span
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 z-20 rounded-lg shadow-lg"
                    >
                        -{product.discount}%
                    </motion.span>
                )}

                {/* Main Image */}
                <Link href={`/products/${product.id}`} className="block w-full h-full">
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-4 mix-blend-multiply"
                    />
                </Link>

                {/* ACTION ICONS (Left Side) - Only show on hover */}
                <div className="absolute top-2 left-2 flex flex-col gap-2 p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 z-20">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleWishlist}
                        className={`w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all ${isWishlisted ? "text-red-500" : "text-gray-500 hover:bg-secondary hover:text-white"}`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        <Heart size={16} className={isWishlisted ? "fill-red-500" : ""} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all"
                        title="Compare"
                    >
                        <RefreshCw size={16} />
                    </motion.button>
                </div>

                {/* ADD TO CART - Bottom Bar */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAddToCart}
                    className="absolute bottom-0 left-0 w-full bg-primary hover:bg-primary-hover text-secondary font-black text-[11px] py-3 transition-all duration-300 translate-y-full group-hover:translate-y-0 flex items-center justify-center gap-2 z-20 tracking-tighter shadow-[0_-4px_10px_rgba(250,204,6,0.2)]"
                >
                    <ShoppingCart size={14} /> ADD TO CART
                </motion.button>
            </div>

            {/* Content Details */}
            <div className="flex flex-col gap-1.5 text-left px-1">
                <Link href={`/products/${product.id}`} className="text-[14px] text-gray-800 font-bold hover:text-secondary transition-colors leading-tight line-clamp-2 min-h-[2.5rem]" title={product.title}>
                    {product.title}
                </Link>

                {/* Stars */}
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={12}
                            className={`${i < product.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>

                {/* Price */}
                <div className="flex flex-col mt-1">
                    <div className="flex items-center gap-2">
                        <span className="text-secondary font-black text-base italic">
                            Rs. {product.price ? product.price.toLocaleString() : "0"}
                        </span>
                        {product.oldPrice !== undefined && product.oldPrice > 0 && (
                            <span className="text-gray-400 text-xs line-through decoration-gray-400/50">
                                Rs. {product.oldPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
