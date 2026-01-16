"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Mock API call
    };

    return (
        <AuthLayout
            title="Forgot Password?"
            subtitle="Enter your email to reset your password"
        >
            {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6 flex gap-3 items-start">
                        <Mail className="shrink-0 mt-0.5" size={18} />
                        <p>We'll send a password reset link to the email address associated with your account.</p>
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

                    <button className="w-full bg-secondary text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
                        Send Reset Link
                    </button>

                    <div className="text-center mt-6">
                        <Link href="/signin" className="text-gray-600 font-bold hover:text-gray-900 text-sm">
                            Back to Sign In
                        </Link>
                    </div>
                </form>
            ) : (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center animate-fade-in shadow-sm">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail size={32} />
                    </div>
                    <h3 className="text-green-800 font-bold text-lg mb-2">Check your inbox</h3>
                    <p className="text-green-700 text-sm mb-6">
                        If an account exists for <strong>{email}</strong>, we have sent a password reset link.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="text-sm font-bold text-green-800 hover:underline"
                    >
                        Try another email
                    </button>
                    <div className="mt-6 pt-6 border-t border-green-200">
                        <Link href="/signin" className="text-green-800 font-bold hover:underline text-sm opacity-80 decoration-2">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            )}
        </AuthLayout>
    );
}
