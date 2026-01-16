"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/AuthLayout";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        login(email);
        router.push("/");
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to your account to continue"
        >
            <form onSubmit={handleSubmit} className="space-y-5">
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
                    <div className="flex justify-between items-center mb-1.5">
                        <label className="block text-sm font-bold text-gray-700">Password</label>
                        <Link href="/forgot-password" className="text-xs text-primary font-bold hover:underline">Forgot?</Link>
                    </div>
                    <input
                        type="password"
                        required
                        className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-gray-50 focus:bg-white transition-all"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                    Sign In
                </button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-400">OR</span>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <Link href="/" className="block w-full text-center text-gray-600 font-bold hover:text-gray-900 border border-gray-200 rounded-xl py-3.5 hover:bg-gray-50 transition-colors">
                        Continue as Guest
                    </Link>
                    <p className="text-gray-500 text-sm">
                        Don't have an account? <Link href="/signup" className="text-primary font-bold hover:underline">Sign Up</Link>
                    </p>
                </div>
            </form>
        </AuthLayout>
    );
}
