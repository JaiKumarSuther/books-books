"use client";

import Link from "next/link";
import { useState } from "react";
import {
    Search, User, Heart, ShoppingCart, ChevronDown, Menu
} from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const chip = "inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm";

    return (
        <div className="bg-white">
            {/* TOP THIN BAR */}
            <div className="border-b border-gray-200 bg-white">
                <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-2 text-xs text-gray-600">
                    <p className="hidden sm:block">
                        FREE delivery &amp; 40% Discount for first 3 orders! Place your 1st order in.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className={chip}>Eng <ChevronDown size={14} /></button>
                        <button className={chip}>USD <ChevronDown size={14} /></button>
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
            <header className="bg-white sticky top-0 z-50 shadow-sm">
                <div className="mx-auto max-w-[1280px] px-4 py-5">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Logo */}
                        <div className="flex items-center justify-between gap-4">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                                <div className="leading-tight">
                                    <p className="text-lg font-extrabold tracking-tight">
                                        Books<span className="text-blue-600">&amp;</span>Books
                                    </p>
                                    <p className="text-xs text-gray-500">school &amp; office store</p>
                                </div>
                            </Link>

                            {/* icons for mobile */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <button
                                    className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <Menu size={18} />
                                </button>
                                <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                                    <ShoppingCart size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="hidden lg:flex w-full flex-1 items-center gap-2 lg:max-w-[760px]">
                            <button className="hidden items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:flex">
                                All Category <ChevronDown size={16} />
                            </button>
                            <div className="relative flex-1">
                                <input
                                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 pr-12 text-sm outline-none ring-blue-600/20 focus:bg-white focus:ring-4 transition-all"
                                    placeholder="Search for books, uniforms, stationery..."
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700">
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
                            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-3 hover:bg-gray-50">
                                <ShoppingCart size={18} />
                                <div className="hidden xl:block text-left">
                                    <span className="block text-sm font-bold leading-none">My Cart</span>
                                    <span className="text-[10px] font-semibold text-gray-500">0 items</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* NAV */}
                    <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-start lg:items-center gap-4 border-t border-gray-100 pt-4 mt-4 text-sm font-semibold text-gray-700`}>
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
                            <Link key={x.label} href={x.href} className="hover:text-blue-600 w-full lg:w-auto py-2 lg:py-0">
                                {x.label}
                            </Link>
                        ))}
                        <Link href="/deals" className="lg:ml-auto text-blue-600 hover:text-blue-700 py-2 lg:py-0">
                            TODAY&apos;S DEALS
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}
