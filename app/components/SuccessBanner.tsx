"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessBanner() {
    const { isBannerOpen: isCartBannerOpen, setIsBannerOpen: setIsCartBannerOpen, recentlyAddedItem: recentCartItem } = useCart();
    const { isBannerOpen: isWishlistBannerOpen, setIsBannerOpen: setIsWishlistBannerOpen, recentlyAddedItem: recentWishlistItem } = useWishlist();

    const isOpen = isCartBannerOpen || isWishlistBannerOpen;
    const item = isCartBannerOpen ? recentCartItem : recentWishlistItem;
    const type = isCartBannerOpen ? "shopping cart" : "wishlist";

    // Auto-close after 5 seconds if not closed manually
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsCartBannerOpen(false);
                setIsWishlistBannerOpen(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, setIsCartBannerOpen, setIsWishlistBannerOpen]);

    if (!item) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    exit={{ y: -100 }}
                    className="fixed top-0 left-0 w-full bg-primary text-secondary py-3 px-6 z-[1000] flex items-center justify-between shadow-lg"
                >
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-secondary" />
                        <p className="text-sm font-medium">
                            Success: You have added <span className="font-bold underline">{item.title}</span> to your {type}!
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            setIsCartBannerOpen(false);
                            setIsWishlistBannerOpen(false);
                        }}
                        className="hover:opacity-70 transition p-1"
                    >
                        <X size={20} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
