"use client";

import Link from "next/link";
import {
    Mail, MapPin, Headphones,
    Facebook, Twitter, Instagram, Linkedin,
    CreditCard, Wallet
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white pt-12 pb-6">
            <div className="mx-auto grid max-w-[1600px] gap-8 px-4 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                {/* Contact Column */}
                <div className="space-y-6">
                    {/* Headset Block */}
                    <div className="flex items-start gap-4">
                        <div className="rounded-full p-0 text-red-700">
                            <Headphones size={48} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 mb-1">Got questions? Call us 24/7!</p>
                            <p className="text-xl font-bold text-gray-900 leading-tight">+92 300 1234567</p>
                            <p className="text-sm text-gray-500 leading-tight">(042) 35789000</p>
                        </div>
                    </div>

                    {/* Address Block */}
                    <div className="space-y-2 mt-4">
                        <p className="text-sm text-gray-600 leading-relaxed max-w-[300px]">
                            Office 102, Siddiq Trade Centre, Gulberg III, Lahore, Punjab
                        </p>
                        <p className="text-sm text-gray-600 hover:text-red-700 cursor-pointer transition-colors">
                            support@booksandbooks.pk
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 pt-2">
                        {[Twitter, Instagram, Facebook, Linkedin].map((Icon, idx) => (
                            <button key={idx} className="text-gray-900 transition-colors hover:text-red-700">
                                <Icon size={20} fill={idx === 2 ? "currentColor" : "none"} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Find in Fast */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-5">Find In Fast</h3>
                    <ul className="space-y-3 text-sm text-gray-500">
                        {["Books", "Uniforms", "Stationery", "School Bags", "Kids Supplies", "Lunch Boxes"].map((x) => (
                            <li key={x}>
                                <Link href="/help" className="hover:text-red-700 transition-colors">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-5">Information</h3>
                    <ul className="space-y-3 text-sm text-gray-500">
                        {["About Us", "Contact Us", "All Collections", "Privacy Policy", "Terms & Conditions"].map((x) => (
                            <li key={x}>
                                <Link href="/about" className="hover:text-blue-600 transition-colors">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Extras */}
                <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-5">Extras</h3>
                    <ul className="space-y-3 text-sm text-gray-500">
                        {["Wishlist", "Shopping Cart", "Returns", "FAQs"].map((x) => (
                            <li key={x}>
                                <Link href="/help" className="hover:text-blue-600 transition-colors">
                                    {x}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-gray-100 bg-gray-50 py-6">
                <div className="mx-auto max-w-[1600px] px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Books&Books. All Rights Reserved. Designed by <span className="text-gray-700 font-semibold">R-Tech</span>.
                    </p>

                    {/* Payment Icons Placeholder */}
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-10 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
                        <div className="h-6 w-10 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-600">Amex</div>
                        <div className="h-6 w-10 bg-white border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-blue-500">PayPal</div>
                        <div className="h-6 w-10 bg-white border border-gray-200 rounded flex items-center justify-center"><CreditCard size={14} className="text-gray-600" /></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
