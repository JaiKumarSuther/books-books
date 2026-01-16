"use client";

import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import DealCard from "../components/DealCard";

export default function WishlistPage() {
    const { wishlistItems, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-300">
                    <Heart size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
                <p className="text-gray-500 mb-8 max-w-sm">Save items you love to your wishlist and review them later.</p>
                <Link href="/products" className="bg-primary hover:bg-primary-hover text-secondary font-bold px-8 py-3 rounded-full transition-colors uppercase tracking-wide">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-[1600px] mx-auto px-4 py-8 md:py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="fill-red-500 text-red-500" /> My Wishlist ({wishlistItems.length})
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {wishlistItems.map((item) => (
                    <div key={item.id} className="relative group">
                        <DealCard product={item} />
                        <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="absolute top-2 left-2 z-30 bg-white text-red-500 p-2 rounded-full shadow-md hover:bg-red-50 transition-colors tooltip"
                            title="Remove from Wishlist"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
