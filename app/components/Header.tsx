"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={closeMenu}>
                    {/* Using logo.png instead of text */}
                    <div className="relative h-16 w-48">
                        <Image
                            src="/logo.png"
                            alt="Books & Books"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 font-medium text-[15px] text-gray-700">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                    <Link href="/why-choose-us" className="hover:text-primary transition-colors">Why Us</Link>
                    <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </nav>

                {/* Hamburger Button */}
                <button
                    className="md:hidden p-2 text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/50" onClick={closeMenu}></div>

                {/* Drawer Content */}
                <div
                    className={`absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex flex-col h-full">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <span className="font-bold text-lg text-gray-900">Menu</span>
                            <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-gray-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col p-6 space-y-4 text-base font-medium text-gray-700">
                            <Link href="/" className="hover:text-primary py-2 border-b border-gray-50" onClick={closeMenu}>Home</Link>
                            <Link href="/about" className="hover:text-primary py-2 border-b border-gray-50" onClick={closeMenu}>About Us</Link>

                            <div className="py-2 border-b border-gray-50">
                                <Link href="/products" className="hover:text-primary block mb-2" onClick={closeMenu}>Products</Link>
                                <div className="pl-4 flex flex-col space-y-2 text-sm text-gray-500">
                                    <Link href="/products/books" className="hover:text-primary" onClick={closeMenu}>• Books</Link>
                                    <Link href="/products/uniforms" className="hover:text-primary" onClick={closeMenu}>• Uniforms</Link>
                                    <Link href="/products/stationery" className="hover:text-primary" onClick={closeMenu}>• Stationery</Link>
                                    <Link href="/products/school-bags" className="hover:text-primary" onClick={closeMenu}>• School Bags</Link>
                                </div>
                            </div>

                            <Link href="/why-choose-us" className="hover:text-primary py-2 border-b border-gray-50" onClick={closeMenu}>Why Choose Us</Link>
                            <Link href="/faq" className="hover:text-primary py-2 border-b border-gray-50" onClick={closeMenu}>FAQ</Link>
                            <Link href="/contact" className="hover:text-primary py-2 border-b border-gray-50" onClick={closeMenu}>Contact</Link>
                        </nav>

                        <div className="mt-auto p-6 bg-gray-50">
                            <p className="text-sm text-gray-500 text-center">Books & Books</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
