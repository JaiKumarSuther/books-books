"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
    const shipping = 200;

    if (items.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
                <img src="/empty-cart.png" alt="Empty Cart" className="w-48 mb-6 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/products" className="bg-primary hover:bg-primary-hover text-secondary font-bold px-8 py-3 rounded-full transition-colors uppercase tracking-wide">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[1200px] mx-auto px-4 py-8 md:py-12"
        >
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">

                {/* ITEMS LIST */}
                <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        {items.map((item) => (
                            <div key={item.id} className="p-4 md:p-6 flex flex-col sm:flex-row gap-4 sm:items-center border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                                {/* Image */}
                                <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border border-gray-200">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-contain p-2" />
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <Link href={`/products/${item.id}`} className="font-bold text-gray-900 hover:text-primary mb-1 block line-clamp-2">
                                        {item.title}
                                    </Link>
                                    <p className="text-sm text-gray-500 mb-2">Rs. {item.price.toLocaleString()}</p>

                                    {/* Mobile Qty Control */}
                                    <div className="flex sm:hidden items-center justify-between mt-4">
                                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-red-500 disabled:opacity-50"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-green-600"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 p-2">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Desktop Qty & Total */}
                                <div className="hidden sm:flex flex-col items-end gap-4">
                                    <p className="font-bold text-lg">Rs. {(item.price * item.quantity).toLocaleString()}</p>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-red-500 disabled:opacity-50 transition-colors"
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-bold text-sm w-6 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-green-600 transition-colors"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors" title="Remove Item">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={clearCart} className="text-red-500 text-sm font-bold hover:underline px-2">
                        Clear Cart
                    </button>
                </div>

                {/* SUMMARY */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                        <h3 className="font-bold text-lg mb-6">Order Summary</h3>

                        <div className="space-y-4 mb-6 pb-6 border-b border-gray-100">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Shipping</span>
                                <span className="font-medium">Rs. {shipping.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-green-600 font-medium text-sm">
                                <span>Discount</span>
                                <span>- Rs. 0</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xl font-bold text-gray-900 mb-8">
                            <span>Total</span>
                            <span>Rs. {(cartTotal + shipping).toLocaleString()}</span>
                        </div>

                        <Link href="/checkout" className="w-full bg-primary hover:bg-primary-hover text-secondary font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl shadow-primary/20 hover:-translate-y-1">
                            Proceed to Checkout <ArrowRight size={18} />
                        </Link>

                        <div className="mt-4 text-center">
                            <Link href="/products" className="text-gray-500 text-sm hover:text-gray-900 font-medium">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
}
