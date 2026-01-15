"use client";

import { useParams, useRouter } from "next/navigation";
import { blogs } from "../../data/blogs";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import Link from 'next/link';

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const post = blogs.find(b => b.id === params.id);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Article not found</h1>
                <Link href="/blog" className="text-primary font-bold hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Image */}
            <div className="relative h-[400px] w-full bg-gray-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-[800px] px-4 text-center text-white">
                        <span className="inline-block bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
                        <div className="flex items-center justify-center gap-6 text-sm opacity-90">
                            <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Tag size={16} /> 5 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="max-w-[800px] mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors mb-8 text-sm font-medium"
                    >
                        <ArrowLeft size={16} /> Back to Articles
                    </button>

                    <div
                        className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                        <span className="font-bold text-gray-900">Share this article:</span>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-all">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
