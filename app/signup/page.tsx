"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
                    <p className="text-gray-500 text-sm">Join us for a better shopping experience</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                        <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                        <input type="password" className="w-full border border-gray-200 rounded-lg px-4 py-3" placeholder="••••••••" />
                    </div>

                    <button className="w-full bg-primary text-secondary font-bold py-3 rounded-xl hover:bg-primary-hover transition-all">
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-500">Already have an account? <Link href="/signin" className="text-primary font-bold hover:underline">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
}
