"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, X } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setIsProductsOpen(false); // Reset dropdown when closing menu
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Why Us", href: "/why-choose-us" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" },
    ];

    const productsLinks = [
        { name: "Books", href: "/products/books" },
        { name: "Uniforms", href: "/products/uniforms" },
        { name: "Stationery", href: "/products/stationery" },
        { name: "School Bags", href: "/products/school-bags" },
    ];

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            <div className="max-w-[1280px] mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center" onClick={closeMenu}>
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
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative group py-1 transition-colors ${isActive ? "text-primary font-bold" : "hover:text-primary"}`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                            </Link>
                        );
                    })}
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
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                                <span className="font-bold text-xl text-gray-900">Menu</span>
                                <button onClick={closeMenu} className="p-2 text-gray-500 hover:text-red-500 transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <nav className="flex flex-col p-6 space-y-2 overflow-y-auto">
                                <Link
                                    href="/"
                                    className={`py-3 px-4 rounded-lg transition-colors ${pathname === "/" ? "bg-primary-light/10 text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className={`py-3 px-4 rounded-lg transition-colors ${pathname === "/about" ? "bg-primary-light/10 text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    onClick={closeMenu}
                                >
                                    About Us
                                </Link>

                                {/* Products Dropdown */}
                                <div>
                                    <button
                                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                                        className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${pathname.includes("/products") ? "text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    >
                                        <span>Products</span>
                                        {isProductsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </button>

                                    <AnimatePresence>
                                        {isProductsOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/50 rounded-lg mx-2 mb-2">
                                                    <Link
                                                        href="/products"
                                                        onClick={closeMenu}
                                                        className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-white rounded-md transition-all"
                                                    >
                                                        All Products
                                                    </Link>
                                                    {productsLinks.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            onClick={closeMenu}
                                                            className={`block py-2 px-3 text-sm rounded-md transition-all ${pathname === item.href ? "text-primary font-semibold bg-white shadow-sm" : "text-gray-600 hover:text-primary hover:bg-white"}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    href="/why-choose-us"
                                    className={`py-3 px-4 rounded-lg transition-colors ${pathname === "/why-choose-us" ? "bg-primary-light/10 text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    onClick={closeMenu}
                                >
                                    Why Choose Us
                                </Link>
                                <Link
                                    href="/faq"
                                    className={`py-3 px-4 rounded-lg transition-colors ${pathname === "/faq" ? "bg-primary-light/10 text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    onClick={closeMenu}
                                >
                                    FAQ
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`py-3 px-4 rounded-lg transition-colors ${pathname === "/contact" ? "bg-primary-light/10 text-primary font-bold" : "hover:bg-gray-50 text-gray-700"}`}
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </nav>

                            <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
                                <p className="text-xs text-gray-400 text-center uppercase tracking-widest font-semibold">Books & Books</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
