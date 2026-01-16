"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image?: string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, "quantity">) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void;
    recentlyAddedItem: CartItem | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recentlyAddedItem, setRecentlyAddedItem] = useState<CartItem | null>(null);

    // Hydrate from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("cart");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load cart", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: Omit<CartItem, "quantity">) => {
        let addedItem: CartItem;
        setItems((prev) => {
            const existing = prev.find((item) => item.id === newItem.id);
            if (existing) {
                addedItem = { ...existing, quantity: existing.quantity + 1 };
                return prev.map((item) =>
                    item.id === newItem.id ? addedItem : item
                );
            }
            addedItem = { ...newItem, quantity: 1 };
            return [...prev, addedItem];
        });

        // Find or create the added item for the modal
        const currentItemInCart = items.find(i => i.id === newItem.id);
        setRecentlyAddedItem(currentItemInCart ? { ...currentItemInCart, quantity: currentItemInCart.quantity + 1 } : { ...newItem, quantity: 1 });
        setIsModalOpen(true);
    };

    const updateQuantity = (id: string, quantity: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeFromCart = (id: string) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setItems([]);
    };

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const cartTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartTotal,
            isCartOpen,
            setIsCartOpen,
            isModalOpen,
            setIsModalOpen,
            recentlyAddedItem
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
