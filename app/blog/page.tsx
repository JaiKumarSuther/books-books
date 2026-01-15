import Link from 'next/link';
import { blogs } from '../data/blogs';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Thoughts</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">Insights on education, productivity, and student life.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((post) => (
                        <div key={post.id} className="group border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-white">
                            <div className="h-56 bg-gray-100 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase shadow-sm">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs text-gray-400 mb-2 font-medium">{post.date}</span>
                                <h2 className="font-bold text-xl mb-3 text-gray-900 leading-tight group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                                >
                                    Read Full Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
