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
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-[1000px] mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-8">

                    {/* LEFT: Shipping Form */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="bg-primary text-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="0300 1234567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="bg-primary text-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                Shipping Address
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="House #, Street, Area"
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder="Karachi, Lahore..."
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span className="bg-primary text-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                Payment Method
                            </h2>
                            <div className="flex items-center gap-3 p-4 border border-green-200 bg-green-50 rounded-lg">
                                <div className="w-5 h-5 rounded-full border-4 border-green-600 bg-white"></div>
                                <span className="font-bold text-green-800">Cash on Delivery (COD)</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Order Summary */}
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-4">
                            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 mb-4 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3 text-sm">
                                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center shrink-0">
                                            <img src={item.image} className="w-full h-full object-contain p-1" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold line-clamp-2">{item.title}</p>
                                            <p className="text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="font-bold">
                                            Rs. {(item.price * item.quantity).toLocaleString()}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-bold">Rs. {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-bold">Rs. {shipping.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-2 text-gray-900">
                                    <span>Total</span>
                                    <span>Rs. {(cartTotal + shipping).toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-6 bg-secondary text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
