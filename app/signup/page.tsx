"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Sign Up is mocked for now! Please Sign In.");
    };

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join us to get the best deals on books and stationery"
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Full Name</label>
                    <input
                        type="text"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 focus:bg-white transition-all"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Email Address</label>
                    <input
                        type="email"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 focus:bg-white transition-all"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Password</label>
                    <input
                        type="password"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 focus:bg-white transition-all"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex items-start gap-3 mt-2">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                    <span className="text-sm text-gray-500 leading-snug">
                        I agree to the <Link href="/terms" className="text-gray-900 underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="text-gray-900 underline hover:text-primary">Privacy Policy</Link>
                    </span>
                </div>

                <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                    Create Account
                </button>

                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Already have an account? <Link href="/signin" className="text-primary font-bold hover:underline">Sign In</Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}
