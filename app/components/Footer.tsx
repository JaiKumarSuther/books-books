"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto grid max-w-[1280px] gap-8 px-4 py-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">B</div>
                        <div className="leading-tight">
                            <p className="text-lg font-extrabold tracking-tight">
                                Books<span className="text-blue-600">&amp;</span>Books
                            </p>
                            <p className="text-xs text-gray-500">school &amp; office store</p>
                        </div>
                    </div>

                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                        <p className="text-xs font-semibold text-gray-500">Got questions? Call us 24/7!</p>
                        <p className="mt-1 text-lg font-extrabold text-gray-900">(800) 345-8588</p>
                        <p className="mt-1 text-xs text-gray-500">(800) 333-8888</p>
                    </div>

                    <div className="flex items-start gap-2 text-xs text-gray-500">
                        <MapPin size={14} className="mt-0.5 shrink-0" />
                        <span>561 Wellington Road, Street 32, San Francisco</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Mail size={14} />
                        <span>support@example.com</span>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-extrabold text-gray-900">FIND IN FAST</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {["Books", "Uniforms", "Stationery", "School Bags", "Kids Supplies", "Lunch Boxes"].map((x) => (
                            <li key={x}>
                                <Link href="/products" className="hover:text-blue-600">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-extrabold text-gray-900">INFORMATION</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {["About Us", "Contact Us", "All Collections", "Privacy Policy", "Terms & Conditions"].map((x) => (
                            <li key={x}>
                                <Link href="/about" className="hover:text-blue-600">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-extrabold text-gray-900">EXTRAS</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {["Wishlist", "Shopping Cart", "Returns", "FAQs"].map((x) => (
                            <li key={x}>
                                <Link href="/help" className="hover:text-blue-600">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 py-4">
                <div className="mx-auto max-w-[1280px] px-4 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Books&amp;Books. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
