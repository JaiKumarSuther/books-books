"use client";

import { useParams } from "next/navigation";
import { blogs } from "../../data/blogs";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, User } from "lucide-react";
import Link from 'next/link';

export default function BlogPostPage() {
    const params = useParams();
    const post = blogs.find(b => b.id === params.id);

    // Get related posts (exclude current)
    const relatedPosts = blogs.filter(b => b.id !== params.id).slice(0, 3);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
                <Link href="/blog" className="text-primary font-bold hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-8 font-sans">
            <div className="max-w-[1600px] mx-auto px-4">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-medium">
                    <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-primary-dark transition-colors">Blog</Link>
                    <span>/</span>
                    <span className="text-gray-900 line-clamp-1">{post.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

                    {/* --- SIDEBAR --- */}
                    <aside className="space-y-10 order-2 lg:order-1">
                        {/* Author Widget */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">About the Author</h3>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-900">{post.author}</h4>
                                    <p className="text-xs text-gray-500">Content Writer</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4">
                                Passionate about education and student success. Sharing tips and tricks to help you ace your academic journey.
                            </p>
                            <button className="w-full bg-gray-900 text-white text-xs font-bold py-2 rounded-lg hover:bg-secondary transition-colors">
                                Follow
                            </button>
                        </div>

                        {/* Promo Banner (Reused for consistency) */}
                        <div className="bg-primary rounded-2xl overflow-hidden shadow-lg border border-yellow-400 relative h-[350px] flex flex-col items-center text-center p-8 pt-10 group cursor-pointer">
                            <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
                            <div className="relative z-10">
                                <h3 className="text-[36px] font-black text-secondary leading-[0.9] mb-1 tracking-tighter">30% OFF</h3>
                                <p className="text-lg font-bold text-gray-900 tracking-tight">School Bags</p>
                            </div>
                            <img src="/cat-bags.png" alt="Product" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] w-48 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
                        </div>
                    </aside>

                    {/* --- MAIN CONTENT --- */}
                    <main className="order-1 lg:order-2">
                        <article className="bg-white">
                            {/* Hero Image */}
                            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8 relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                                <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                                    {post.category}
                                </div>
                            </div>

                            {/* Header */}
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>By {post.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Tag size={16} />
                                    <span>{post.comments} Comments</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div
                                className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary prose-a:font-bold prose-img:rounded-xl max-w-none mb-12"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Sharing */}
                            <div className="flex items-center gap-4 mb-16">
                                <span className="font-bold text-gray-900 text-sm">Share:</span>
                                <div className="flex gap-2">
                                    {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                        <button key={i} className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                            <Icon size={14} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Related Posts */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPosts.map((related) => (
                                    <Link href={`/blog/${related.id}`} key={related.id} className="group cursor-pointer">
                                        <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3 relative bg-gray-100">
                                            <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 fs-sm group-hover:text-primary transition-colors">
                                            {related.title}
                                        </h4>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase">{related.date}</span>
                                    </Link>
                                ))}
                            </div>

                        </article>
                    </main>

                </div>
            </div>
        </div>
    );
}
