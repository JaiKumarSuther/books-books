"use client";

import Link from "next/link";
import { useOrders } from "../context/OrderContext";
import { Package, CheckCircle, Clock } from "lucide-react";

export default function OrdersPage() {
    const { orders } = useOrders();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-[1000px] mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
                    <Link href="/products" className="text-primary font-bold hover:underline">Continue Shopping</Link>
                </div>

                {orders.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center">
                        <Package size={64} className="text-gray-200 mb-4" />
                        <h2 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't placed any orders yet.</p>
                        <Link href="/products" className="bg-primary hover:bg-primary-hover text-secondary font-bold px-6 py-3 rounded-full transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gray-50/50 p-4 sm:p-6 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Package size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Order ID</p>
                                            <p className="font-bold text-gray-900">{order.id}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Date</p>
                                        <p className="font-medium text-gray-900">{order.date}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Amount</p>
                                        <p className="font-bold text-green-600">Rs. {order.total.toLocaleString()}</p>
                                    </div>
                                    <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold flex items-center gap-1">
                                        <Clock size={12} /> {order.status}
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="p-4 sm:p-6">
                                    <div className="space-y-4">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-sm">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-gray-400 font-bold w-6">{item.quantity}x</span>
                                                    <span className="text-gray-900 font-medium">{item.title}</span>
                                                </div>
                                                <span className="text-gray-600">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                        <div className="text-sm text-gray-500">
                                            <p><span className="font-bold">Shipping to:</span> {order.shippingAddress.name}, {order.shippingAddress.city}</p>
                                        </div>
                                        <button className="text-primary font-bold text-sm hover:underline">
                                            View Order Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
