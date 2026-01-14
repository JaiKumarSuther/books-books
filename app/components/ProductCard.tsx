"use client";

import Link from 'next/link';
import { Star, ShoppingCart, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "../data/products";

interface ProductCardProps {
    product: Product;
    Icon: LucideIcon;
    variant?: "default" | "blue" | "purple" | "orange";
}

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProductCard({ product, Icon, variant = "default" }: ProductCardProps) {
    const styles = {
        default: {
            borderHover: "hover:border-primary/50",
            bgHover: "group-hover:bg-gray-100",
            iconText: "group-hover:text-primary",
            titleText: "group-hover:text-primary",
            btnHover: "hover:bg-primary",
        },
        blue: {
            borderHover: "hover:border-blue-300",
            bgHover: "group-hover:bg-blue-50/50",
            iconText: "group-hover:text-blue-600",
            titleText: "group-hover:text-blue-600",
            btnHover: "hover:bg-blue-600",
        },
        purple: {
            borderHover: "hover:border-purple-300",
            bgHover: "group-hover:bg-purple-50/50",
            iconText: "group-hover:text-purple-600",
            titleText: "group-hover:text-purple-600",
            btnHover: "hover:bg-purple-600",
        },
        orange: {
            borderHover: "hover:border-orange-300",
            bgHover: "group-hover:bg-orange-50/50",
            iconText: "group-hover:text-orange-600",
            titleText: "group-hover:text-orange-600",
            btnHover: "hover:bg-orange-600",
        },
    };

    const theme = styles[variant];

    return (
        <motion.div
            layout
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.9 }}
            className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col ${theme.borderHover}`}
        >
            <Link href={`/products/${product.id}`} className="block h-full flex flex-col">
                {/* Image Placeholder */}
                <div className={`aspect-[5/4] bg-gray-50 relative p-5 flex items-center justify-center ${theme.bgHover} transition-colors`}>
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-300 ${theme.iconText} group-hover:scale-110 transition-all duration-300`}>
                        <Icon size={24} />
                    </div>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-700 shadow-sm">
                        {product.category}
                    </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-bold text-gray-900 line-clamp-1 min-h-[24px] ${theme.titleText} transition-colors`}>
                            {product.name}
                        </h3>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                        ))}
                        <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-grow">
                        {product.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <span className="text-lg font-bold text-gray-900">
                            Rs. {product.price.toLocaleString()}
                        </span>
                        <button className={`w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 ${theme.btnHover} hover:text-white transition-all shadow-sm`}>
                            <ShoppingCart size={16} />
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
