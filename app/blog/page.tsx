"use client";

import Link from 'next/link';
import { blogs } from '../data/blogs';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white py-8 font-sans">
            <div className="max-w-[1600px] mx-auto px-4">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
                    <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-gray-900">Blog</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

                    {/* --- SIDEBAR --- */}
                    <aside className="space-y-10">

                        {/* Recent Blogs Widget */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-5">Recent Blogs</h3>
                            <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 group cursor-pointer">
                                <div className="aspect-[4/3] w-full rounded-lg overflow-hidden mb-4 relative">
                                    <img
                                        src={blogs[0].image}
                                        alt="Recent"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h4 className="font-bold text-[15px] text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-secondary transition-colors">
                                    {blogs[0].title}
                                </h4>
                                <p className="text-xs text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                                    {blogs[0].excerpt}
                                </p>
                                <Link href={`/blog/${blogs[0].id}`} className="text-[11px] font-bold underline decoration-2 decoration-gray-300 hover:decoration-secondary text-gray-900 hover:text-secondary uppercase tracking-wide transition-all">
                                    + Read more
                                </Link>

                                {/* Dots */}
                                <div className="flex justify-center gap-2 mt-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#007BFF]"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                </div>
                            </div>
                        </div>

                        {/* Promo Banner */}
                        <div className="bg-primary rounded-2xl overflow-hidden shadow-lg border border-yellow-400 relative h-[420px] flex flex-col items-center text-center p-8 pt-10 group cursor-pointer">
                            {/* Radial text background effect */}
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/20 to-transparent"></div>

                            <div className="relative z-10">
                                <h3 className="text-[42px] font-black text-secondary leading-[0.9] mb-1 tracking-tighter">30% OFF</h3>
                                <p className="text-xl font-bold text-gray-900 tracking-tight">JBL Headphones</p>
                            </div>

                            {/* Product Image */}
                            <img
                                src="/cat-art.png"
                                alt="Product"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-56 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
                            />
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog</h2>
                        <div className="space-y-6">
                            {blogs.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.id}`}
                                    className="block bg-white border border-gray-100 rounded-2xl p-4 flex flex-col md:flex-row gap-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-gray-200 transition-all duration-300 group cursor-pointer"
                                >

                                    {/* Left: Image */}
                                    <div className="w-full md:w-[280px] shrink-0 h-48 md:h-auto relative overflow-hidden rounded-xl">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Date Badge */}
                                        <div className="absolute top-3 left-3 bg-white rounded-lg shadow-sm w-10 h-12 flex flex-col items-center justify-center text-center z-10">
                                            <span className="text-lg font-bold text-gray-900 leading-none">{post.day}</span>
                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{post.month}</span>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Right: Content */}
                                    <div className="flex-1 py-1 md:py-2 flex flex-col">

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors leading-tight">
                                            {post.title}
                                        </h3>

                                        {/* Meta */}
                                        <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3 font-medium">
                                            <span>By {post.author}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span>{post.comments} comments</span>
                                        </div>

                                        {/* Excerpt */}
                                        <p className="text-gray-500 text-xs md:text-sm mb-5 leading-relaxed line-clamp-2 md:line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Link Visual */}
                                        <div className="mt-auto">
                                            <span
                                                className="inline-flex items-center text-[11px] font-bold text-gray-900 border-b-2 border-gray-200 group-hover:border-secondary group-hover:text-secondary pb-0.5 transition-all uppercase tracking-wide"
                                            >
                                                + Continue Reading
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    )
}
