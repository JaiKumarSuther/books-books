"use client";

import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import Price from "./Price";
import Rating from "./Rating";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
    item: {
        id?: string;
        title?: string;
        name?: string; // Fallback for my existing data
        price: string | number;
        oldPrice?: string | number;
        badge?: string;
        available?: number;
        rating?: number;
        image?: string;
        href?: string;
    }
}

export default function ProductCard({ item }: ProductCardProps) {
    const { addToCart } = useCart();

    // Normalize data (handle both 'title' from user snippet and 'name' from my products.ts)
    const title = item.title || item.name || "Product Name";
    const href = item.href || (item.id ? `/products/${item.id}` : "/products");
    const price = typeof item.price === 'number' ? item.price : Number(item.price.toString().replace(/[^0-9.-]+/g, ""));

    const handleAddToCart = () => {
        addToCart({
            id: item.id || Math.random().toString(),
            title,
            price
        });
    };

    return (
        <div className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md h-full flex flex-col">
            <div className="flex items-start justify-between gap-2">
                {item.badge ? (
                    <span className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-white">
                        {item.badge}
                    </span>
                ) : (
                    <span />
                )}
                <button className="rounded-lg border border-gray-200 bg-white p-2 text-gray-600 hover:bg-gray-50">
                    <Heart size={16} />
                </button>
            </div>

            {/* image placeholder */}
            <div className="relative mt-3 aspect-[4/3] w-full rounded-lg bg-gray-50 overflow-hidden flex items-center justify-center">
                {item.image && item.image !== "/placeholder" ? (
                    <img src={item.image} alt={title} className="object-cover w-full h-full" />
                ) : (
                    <div className="text-gray-300 font-bold bg-gray-100 w-full h-full flex items-center justify-center">IMG</div>
                )}
            </div>

            <div className="mt-4 space-y-2 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-900 line-clamp-2">{title}</p>
                <Rating value={item.rating ?? 4} />
                <Price value={price.toLocaleString()} old={item.oldPrice} />
                {typeof item.available === "number" ? (
                    <p className="text-xs text-gray-500">
                        Available: <span className="font-semibold text-gray-700">{item.available}</span>
                    </p>
                ) : null}

                <div className="mt-auto pt-3 flex items-center gap-2">
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-secondary hover:bg-primary-hover flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                        <ShoppingCart size={14} /> Add
                    </button>
                    <Link
                        href={href}
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}
