"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingCart, Heart, Minus, Plus, Share2, ArrowRight, Shirt, BookOpen, PenTool, Backpack } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { booksData, uniformsData, stationeryData, bagsData, Product } from "../../data/products";
import DealCard from "../../components/DealCard";

// Combine all products into one array for searching
const allProducts = [...booksData, ...uniformsData, ...stationeryData, ...bagsData];

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    // Mock extra images for gallery
    const images = [0, 1, 2, 3];

    useEffect(() => {
        if (params.id) {
            // Handle duplicate IDs from homepage (e.g. "dup-b1" -> "b1")
            const cleanId = (params.id as string).replace('dup-', '');
            const foundProduct = allProducts.find((p) => p.id === cleanId);
            setProduct(foundProduct || null);
            setQuantity(1); // Reset quantity on product change
        }
    }, [params]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading product...</p>
            </div>
        );
    }

    // Related products (Same category, excluding current)
    // Map category name to broad types if needed, or just partial match
    const relatedProducts = allProducts
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    // Dynamic Icon based on category (simple helper)
    const getProductIcon = (cat: string) => {
        if (booksData.some(p => p.category === cat)) return <BookOpen size={24} />;
        if (uniformsData.some(p => p.category === cat)) return <Shirt size={24} />;
        if (stationeryData.some(p => p.category === cat)) return <PenTool size={24} />;
        return <Backpack size={24} />;
    };

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Breadcrumb / Back Navigation */}
            <div className="max-w-[1280px] mx-auto px-4 py-6">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors text-sm font-medium"
                >
                    <ArrowLeft size={16} /> Back to Products
                </button>
            </div>

            <div className="max-w-[1280px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Gallery */}
                    <div className="flex flex-col-reverse md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                            {images.map((idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center border-2 transition-all flex-shrink-0
                                        ${selectedImage === idx ? 'border-primary' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <span className="text-xs text-gray-300">Img {idx + 1}</span>
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <motion.div
                            className="bg-gray-50 rounded-2xl flex-grow aspect-square md:aspect-auto md:min-h-[500px] flex items-center justify-center relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={selectedImage} // Re-animate on image change
                        >
                            {product.image === "/placeholder" ? (
                                <div className="text-gray-200 text-9xl font-bold select-none opacity-50">
                                    IMG
                                </div>
                            ) : (
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            )}
                            <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                                -10%
                            </span>
                        </motion.div>
                    </div>

                    {/* Right Column - Details */}
                    <div>
                        <div className="mb-2">
                            <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">{product.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 lh-tight">{product.name}</h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-0.5 text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                                        className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">
                                4 Reviews
                            </span>
                        </div>

                        <div className="flex items-end gap-3 mb-6">
                            <span className="text-4xl font-bold text-secondary">Rs. {product.price.toLocaleString()}</span>
                            <span className="text-lg text-gray-400 line-through mb-1.5">Rs. {(product.price * 1.1).toFixed(0)}</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {product.description} An excellent choice for students and professionals alike, offering durability and premium quality.
                        </p>

                        {/* Action Area */}
                        <div className="border-t border-b border-gray-100 py-8 mb-8 space-y-6">
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Quantity */}
                                <div className="flex items-center border border-gray-200 rounded-lg h-12 w-32">
                                    <button
                                        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <div className="flex-1 h-full flex items-center justify-center font-bold text-gray-900 border-x border-gray-200">
                                        {quantity}
                                    </div>
                                    <button
                                        className="w-10 h-full flex items-center justify-center hover:bg-gray-50 text-gray-500"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <div className="flex gap-3 flex-1">
                                    <button className="flex-1 bg-primary hover:bg-primary-hover text-secondary font-bold h-12 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                        <ShoppingCart size={20} /> Add to Cart
                                    </button>
                                    <button className="px-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors">
                                        <Heart size={20} className="text-gray-500" />
                                    </button>
                                </div>
                            </div>

                            <button className="w-full h-12 border-2 border-primary text-secondary hover:bg-primary hover:text-secondary font-bold rounded-lg transition-colors uppercase tracking-wide text-sm">
                                Buy Now
                            </button>
                        </div>

                        {/* Meta Info */}
                        <div className="space-y-2 text-sm text-gray-500">
                            <div className="flex">
                                <span className="w-24 font-medium text-gray-900">SKU:</span>
                                <span>{product.id.toUpperCase()}-001</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium text-gray-900">Category:</span>
                                <span>{product.category}</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium text-gray-900">Stock:</span>
                                <span className="text-green-600 font-medium">In Stock</span>
                            </div>
                            <div className="flex">
                                <span className="w-24 font-medium text-gray-900">Share:</span>
                                <div className="flex gap-2">
                                    <button className="hover:text-secondary"><Share2 size={16} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-20">
                    <div className="flex border-b border-gray-200 mb-8">
                        <button
                            className={`pb-4 px-6 font-bold text-lg transition-colors relative ${activeTab === 'description' ? 'text-secondary' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                            {activeTab === 'description' && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                            )}
                        </button>
                        <button
                            className={`pb-4 px-6 font-bold text-lg transition-colors relative ${activeTab === 'reviews' ? 'text-secondary' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Reviews (4)
                            {activeTab === 'reviews' && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                            )}
                        </button>
                    </div>

                    <div className="min-h-[200px]">
                        {activeTab === 'description' ? (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="prose max-w-none text-gray-600">
                                <p className="mb-4">
                                    {product.description}
                                </p>
                                <p className="mb-4">
                                    Constructed with high-quality materials to ensure longevity and durability.
                                    Perfect for daily use in school or office environments.
                                    Designed with ergonomic principles to provide maximum comfort and utility.
                                </p>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>Premium quality build material</li>
                                    <li>Ergonomic and user-friendly design</li>
                                    <li>Suitable for all age groups</li>
                                    <li>Certified safety standards</li>
                                </ul>
                                <p>
                                    Whether you are a student looking for reliable supplies or a professional seeking
                                    efficient tools, this product meets all standard requirements and exceeds expectations
                                    in performance and style.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                                {/* Mock Reviews */}
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="border-b border-gray-100 pb-6 last:border-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                                U{i}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 text-sm">User {i}</h4>
                                                <div className="flex text-primary">
                                                    {[...Array(5)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                                                </div>
                                            </div>
                                            <span className="text-xs text-gray-400 ml-auto">2 days ago</span>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            Really good product! I ordered this for my son and he loves it.
                                            The quality is exactly as described and delivery was super fast.
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.length > 0 ? (
                            relatedProducts.map((relProduct) => (
                                <div key={relProduct.id} className="h-full">
                                    <DealCard
                                        product={{
                                            ...relProduct,
                                            title: relProduct.name,
                                            oldPrice: relProduct.oldPrice || 0,
                                            discount: relProduct.discount || 0,
                                            rating: relProduct.rating || 0
                                        }}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400 col-span-full">No related products found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
