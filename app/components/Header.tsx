"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Search, User, Heart, ShoppingCart, ChevronDown, Menu, X, Trash2
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Dropdown States
    const [langOpen, setLangOpen] = useState(false);
    const [currOpen, setCurrOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);

    // Cart Context
    const { cartCount, items, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

    const chip = "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50 relative";

    return (
        <div className="bg-white relative z-50">
            {/* OVERLAY for Mobile Menu or Cart */}
            {(isMobileMenuOpen || isCartOpen) && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                    onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(false); }}
                />
            )}

            {/* CART DRAWER */}
            <div className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <h2 className="font-bold text-lg">Shopping Cart ({cartCount})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-4 flex-1 overflow-y-auto h-[calc(100%-140px)]">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-2">
                            <ShoppingCart size={48} className="opacity-20" />
                            <p>Your cart is empty</p>
                            <button onClick={() => setIsCartOpen(false)} className="text-secondary text-sm font-bold">Start Shopping</button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map(item => (
                                <div key={item.id} className="flex gap-3 border-b pb-3">
                                    <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-gray-400">IMG</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-900 line-clamp-2">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.quantity} x Rs {item.price.toLocaleString()}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-secondary hover:text-red-700 p-1">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="absolute bottom-0 w-full bg-gray-50 p-4 border-t">
                    <div className="flex justify-between mb-4 font-bold text-lg">
                        <span>Total:</span>
                        <span>Rs {cartTotal.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-primary text-secondary py-3 rounded-lg font-bold hover:bg-primary-hover transition">
                        Checkout Now
                    </button>
                </div>
            </div>

            {/* TOP THIN BAR */}
            <div className="border-b border-gray-200 bg-white relative z-30">
                <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2 text-xs text-gray-600">
                    <p className="hidden sm:block">
                        FREE delivery &amp; 40% Discount for first 3 orders! Place your 1st order in.
                    </p>
                    <div className="flex items-center gap-3">
                        {/* Language Dropdown */}
                        <div className="relative">
                            <button className={chip} onClick={() => setLangOpen(!langOpen)}>
                                Eng <ChevronDown size={14} />
                            </button>
                            {langOpen && (
                                <div className="absolute top-full right-0 mt-1 w-24 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                                    <button className="block w-full text-left px-3 py-1 hover:bg-gray-50">Eng</button>
                                    <button className="block w-full text-left px-3 py-1 hover:bg-gray-50">Urdu</button>
                                </div>
                            )}
                        </div>

                        {/* Currency Dropdown */}
                        <div className="relative">
                            <button className={chip} onClick={() => setCurrOpen(!currOpen)}>
                                USD <ChevronDown size={14} />
                            </button>
                            {currOpen && (
                                <div className="absolute top-full right-0 mt-1 w-24 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                                    <button className="block w-full text-left px-3 py-1 hover:bg-gray-50">PKR</button>
                                    <button className="block w-full text-left px-3 py-1 hover:bg-gray-50">USD</button>
                                </div>
                            )}
                        </div>

                        <Link href="/track-order" className="text-gray-600 hover:text-gray-900">
                            Track Order
                        </Link>
                        <Link href="/help" className="text-gray-600 hover:text-gray-900">
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <header className="bg-white sticky top-0 z-20 shadow-sm">
                <div className="mx-auto max-w-[1600px] px-4 py-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Logo */}
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/" className="flex items-center">
                                <img src="/books logo.png" alt="Logo" className="h-10 w-auto object-contain" />
                            </Link>

                            {/* icons for mobile */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <button
                                    className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <Menu size={18} />
                                </button>
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50 relative"
                                >
                                    <ShoppingCart size={18} />
                                    {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
                                </button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="hidden lg:flex w-full flex-1 items-center gap-2 lg:max-w-[760px]">
                            <div className="relative">
                                <button
                                    onClick={() => setCatOpen(!catOpen)}
                                    className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex"
                                >
                                    All Category <ChevronDown size={16} />
                                </button>
                                {catOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-50">
                                        {['Books', 'Stationery', 'Uniforms', 'Bags', 'Accessories'].map(c => (
                                            <button key={c} className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-sm text-gray-700">
                                                {c}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="relative flex-1">
                                <input
                                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm outline-none ring-primary/20 focus:bg-white focus:ring-4 transition-all"
                                    placeholder="Search for books, uniforms, stationery..."
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-primary p-2 text-secondary hover:bg-primary-hover">
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Icons desktop */}
                        <div className="hidden items-center gap-3 lg:flex">
                            <button className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
                                <User size={18} />
                            </button>
                            <button className="rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
                                <Heart size={18} />
                            </button>
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50 group hover:border-primary active:bg-gray-50 transition-all cursor-pointer"
                            >
                                <div className="relative">
                                    <ShoppingCart size={18} className="group-hover:text-secondary" />
                                    {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-secondary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</span>}
                                </div>
                                <div className="hidden xl:block text-left">
                                    <span className="block text-sm font-bold leading-none">My Cart</span>
                                    <span className="text-[10px] font-semibold text-gray-500 group-hover:text-secondary">{cartCount} items</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:block border-t border-gray-100 mt-4 pt-4">
                        <div className="flex items-center gap-8 text-sm font-semibold text-gray-700">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Products", href: "/products" },
                                { label: "Books", href: "/products/books" },
                                { label: "Uniforms", href: "/products/uniforms" },
                                { label: "Stationery", href: "/products/stationery" },
                                { label: "School Bags", href: "/products/school-bags" },
                                { label: "About Us", href: "/about" },
                                { label: "Contact", href: "/contact" },
                            ].map((x) => (
                                <Link key={x.label} href={x.href} className="hover:text-secondary transition-colors">
                                    {x.label}
                                </Link>
                            ))}
                            <Link href="/deals" className="ml-auto text-secondary hover:text-primary-dark font-bold">
                                TODAY'S DEALS
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU DRAWER */}
            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="/books logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                        <span className="font-bold text-lg">Menu</span>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                        <X size={20} />
                    </button>
                </div>
                <div className="p-4 overflow-y-auto h-[calc(100%-70px)] flex flex-col gap-4">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Products", href: "/products" },
                        { label: "Books", href: "/products/books" },
                        { label: "Uniforms", href: "/products/uniforms" },
                        { label: "Stationery", href: "/products/stationery" },
                        { label: "School Bags", href: "/products/school-bags" },
                        { label: "About Us", href: "/about" },
                        { label: "Contact", href: "/contact" },
                    ].map((x) => (
                        <Link
                            key={x.label}
                            href={x.href}
                            className="text-gray-700 font-semibold hover:text-secondary py-2 border-b border-gray-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {x.label}
                        </Link>
                    ))}
                    <Link
                        href="/deals"
                        className="text-secondary font-bold py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        TODAY'S DEALS
                    </Link>

                    {/* Mobile Extra Links */}
                    <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                        <Link href="/track-order" className="flex items-center gap-3 text-sm text-gray-600">
                            Track Order
                        </Link>
                        <Link href="/help" className="flex items-center gap-3 text-sm text-gray-600">
                            Help Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
