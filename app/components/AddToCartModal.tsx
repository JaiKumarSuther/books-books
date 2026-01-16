"use client";

import React from "react";
import Link from "next/link";
import { X, ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function AddToCartModal() {
    const { isModalOpen, setIsModalOpen, recentlyAddedItem, cartTotal, cartCount } = useCart();

    if (!recentlyAddedItem) return null;

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-all"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[120] pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden pointer-events-auto relative"
                        >
                            {/* Close Button Inside Modal */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-secondary transition-colors z-30"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8">
                                <h2 className="text-secondary text-xl font-bold mb-8 flex items-center gap-2">
                                    Added to cart successfully. What is next?
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    {/* Left Side: Product Info */}
                                    <div className="flex gap-6 items-start">
                                        <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 p-2">
                                            <img
                                                src={recentlyAddedItem.image}
                                                alt={recentlyAddedItem.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 pt-2">
                                            <h3 className="font-bold text-gray-900 leading-tight">
                                                {recentlyAddedItem.title}
                                            </h3>
                                            <p className="text-gray-600 font-medium text-sm">
                                                {recentlyAddedItem.quantity} x <span className="text-gray-900 font-bold">Rs. {recentlyAddedItem.price.toLocaleString()}</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Side: Actions & Info */}
                                    <div className="flex flex-col gap-5 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                                        <Link
                                            href="/checkout"
                                            onClick={() => setIsModalOpen(false)}
                                            className="w-full bg-primary hover:bg-primary-hover text-secondary font-bold py-4 rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 group"
                                        >
                                            CHECKOUT <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </Link>

                                        <div className="text-center py-2">
                                            <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-widest">Order subtotal</p>
                                            <p className="text-secondary text-3xl font-black font-mono tracking-tighter">
                                                Rs. {cartTotal.toLocaleString()}
                                            </p>
                                        </div>

                                        <p className="text-center text-sm text-gray-600 font-medium">
                                            Your cart contains <span className="text-gray-900 font-bold">{cartCount}</span> items
                                        </p>

                                        <div className="flex flex-col gap-3 pt-2">
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="w-full bg-white text-secondary border border-gray-200 font-bold py-3 px-6 rounded-xl hover:border-secondary transition-all text-xs uppercase tracking-widest"
                                            >
                                                Continue Shopping
                                            </button>
                                            <Link
                                                href="/cart"
                                                onClick={() => setIsModalOpen(false)}
                                                className="w-full bg-white text-secondary border border-gray-200 font-bold py-3 px-6 rounded-xl hover:border-secondary transition-all text-xs text-center uppercase tracking-widest"
                                            >
                                                View Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
