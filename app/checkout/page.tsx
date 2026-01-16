"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import Link from 'next/link';

export default function CheckoutPage() {
    const { items, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrders();
    const router = useRouter();
    const shipping = 200;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        phone: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (items.length === 0) return;

        // Add Order
        addOrder({
            items,
            total: cartTotal + shipping,
            shippingAddress: formData
        });

        // Clear Cart & Redirect
        clearCart();
        router.push("/orders");
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-xl font-bold mb-4">Your cart is empty</p>
                <Link href="/products" className="text-primary hover:underline">Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-16">
            <div className="max-w-[1300px] mx-auto px-6">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Checkout</h1>
                    <p className="text-gray-500 font-medium">Please enter your details to complete your order.</p>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* LEFT: Shipping Form */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                                <span className="bg-primary text-secondary w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black shadow-sm">1</span>
                                Contact Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                                        placeholder="0300 1234567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                                <span className="bg-primary text-secondary w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black shadow-sm">2</span>
                                Shipping Address
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Street Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                                        placeholder="House #, Street, Area"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white focus:border-primary transition-all text-gray-900"
                                        placeholder="e.g. Karachi, Lahore, Islamabad"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                                <span className="bg-primary text-secondary w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black shadow-sm">3</span>
                                Payment Method
                            </h2>
                            <div className="flex items-center gap-4 p-5 border-2 border-primary bg-primary/5 rounded-2xl">
                                <div className="w-6 h-6 rounded-full border-8 border-secondary bg-white"></div>
                                <div className="flex flex-col">
                                    <span className="font-black text-secondary leading-tight uppercase tracking-tight">Cash on Delivery (COD)</span>
                                    <span className="text-secondary/70 text-xs font-bold uppercase tracking-widest">Pay when you receive the order</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Order Summary */}
                    <div className="lg:col-span-4 lg:sticky lg:top-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 ring-1 ring-black/5">
                            <h3 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-tighter">Order Summary</h3>

                            <div className="max-h-[360px] overflow-y-auto pr-4 space-y-5 mb-8 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 p-2 group-hover:border-primary transition-colors">
                                            <img src={item.image} className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <p className="font-bold text-gray-900 leading-snug line-clamp-2 text-sm">{item.title}</p>
                                            <p className="text-gray-500 text-xs font-bold mt-1 uppercase tracking-wider">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="font-black text-secondary pt-1 text-sm whitespace-nowrap">
                                            Rs. {(item.price * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t-2 border-dashed border-gray-100 pt-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Subtotal</span>
                                    <span className="font-bold text-gray-900">Rs. {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Shipping</span>
                                    <span className="font-bold text-gray-900">Rs. {shipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-gray-900 font-black uppercase text-sm tracking-tighter">Total Amount</span>
                                    <span className="text-2xl font-black text-secondary font-mono tracking-tighter">
                                        Rs. {(cartTotal + shipping).toLocaleString()}
                                    </span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-8 bg-primary hover:bg-primary-hover text-secondary font-black py-5 rounded-2xl text-lg uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all"
                            >
                                Place Order
                            </button>

                            <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                                Securing your purchase with end-to-end encryption
                            </p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
