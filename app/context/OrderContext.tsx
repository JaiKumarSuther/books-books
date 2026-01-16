"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Order = {
    id: string;
    date: string;
    items: {
        id: string;
        title: string;
        price: number;
        quantity: number;
    }[];
    total: number;
    status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    shippingAddress: {
        name: string;
        address: string;
        city: string;
        phone: string;
    };
};

type OrderContextType = {
    orders: Order[];
    addOrder: (order: Omit<Order, "id" | "date" | "status">) => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
    const [orders, setOrders] = useState<Order[]>([]);

    // Hydrate from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("orders");
        if (saved) {
            try {
                setOrders(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load orders", e);
            }
        }
    }, []);

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const addOrder = (newOrderData: Omit<Order, "id" | "date" | "status">) => {
        const newOrder: Order = {
            ...newOrderData,
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
            status: 'Processing'
        };
        setOrders((prev) => [newOrder, ...prev]);
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrders() {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error("useOrders must be used within a OrderProvider");
    }
    return context;
}
