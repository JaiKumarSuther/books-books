"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutGrid, List, Grid3X3, Grid2X2, ChevronDown, Home } from "lucide-react";
import DealCard from "../components/DealCard";

const dealsData = [
    {
        id: "deal-1",
        title: "Complete O-Level Science Bundle (Physics, Chem, Bio)",
        price: 8500,
        oldPrice: 10200,
        description: "Get the complete set of Cambridge O-Level Science textbooks and workbooks. Includes latest editions for Physics, Chemistry, and Biology. Perfect for exam preparation.",
        rating: 5,
        discount: 17,
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
        available: 15,
        totalStock: 50
    },
    {
        id: "deal-2",
        title: "Premium School Uniform Set - Boys (Shirt + Trouser + Tie)",
        price: 3200,
        oldPrice: 4500,
        description: "High-quality fabric, comfortable fit, and durable stitching. Includes 2 white shirts, 1 grey trouser, and a school tie. wrinkle-resistant material.",
        rating: 5,
        discount: 29,
        image: "https://images.unsplash.com/photo-1577538928305-3807c3993047?q=80&w=2070&auto=format&fit=crop",
        available: 24,
        totalStock: 100
    },
    {
        id: "deal-3",
        title: "Artist Pro Stationery Kit (72 Pcs)",
        price: 2800,
        oldPrice: 3500,
        description: "Everything a young artist needs! Includes color pencils, markers, watercolors, sketchpads, and ergonomic brushes. Non-toxic and safe for kids.",
        rating: 4,
        discount: 20,
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
        available: 42,
        totalStock: 150
    },
    {
        id: "deal-4",
        title: "Orthopedic High-School Backpack (Waterproof)",
        price: 4999,
        oldPrice: 6500,
        description: "Designed for back health with padded straps and multiple compartments. Water-resistant material protects books and laptops. Includes free rain cover.",
        rating: 5,
        discount: 23,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1887&auto=format&fit=crop",
        available: 8,
        totalStock: 30
    },
    {
        id: "deal-5",
        title: "Bulk A4 Notebooks Pack (12 Registers)",
        price: 1800,
        oldPrice: 2400,
        description: "Stock up for the whole year! 12 high-quality spiral binding notebooks with 160 pages each. Smooth paper quality suitable for all ink types.",
        rating: 4,
        discount: 25,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20808c5f?q=80&w=1887&auto=format&fit=crop",
        available: 65,
        totalStock: 200
    }
];

export default function DealsPage() {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
    const [gridCols, setGridCols] = useState<number>(3);
    const [sortBy, setSortBy] = useState('default');
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortedDeals = [...dealsData].sort((a, b) => {
        if (sortBy === 'price-low-high') return a.price - b.price;
        if (sortBy === 'price-high-low') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // default
    });

    return (
        <div className="min-h-screen bg-gray-50 py-8 font-sans text-gray-800">
            <div className="max-w-[1300px] mx-auto px-4">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-secondary flex items-center gap-1 font-medium transition-colors">
                        <Home size={14} /> Home
                    </Link>
                    <span>/</span>
                    <span className="font-bold text-secondary italic uppercase tracking-tight">Today's Deals</span>
                </div>

                {/* Toolbar */}
                <div className="bg-white p-3 rounded-2xl border border-gray-100 flex flex-wrap items-center justify-between gap-4 mb-8 shadow-sm">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => { setViewMode('grid'); setGridCols(2); }}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'grid' && gridCols === 2 ? 'text-secondary bg-primary shadow-sm' : 'text-gray-400 hover:text-secondary hover:bg-gray-50'}`}
                            title="2 Columns"
                        >
                            <Grid2X2 size={20} />
                        </button>
                        <button
                            onClick={() => { setViewMode('grid'); setGridCols(3); }}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'grid' && gridCols === 3 ? 'text-secondary bg-primary shadow-sm' : 'text-gray-400 hover:text-secondary hover:bg-gray-50'}`}
                            title="3 Columns"
                        >
                            <Grid3X3 size={20} />
                        </button>
                        <button
                            onClick={() => { setViewMode('grid'); setGridCols(4); }}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'grid' && gridCols === 4 ? 'text-secondary bg-primary shadow-sm' : 'text-gray-400 hover:text-secondary hover:bg-gray-50'}`}
                            title="4 Columns"
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <div className="w-px h-6 bg-gray-200 mx-1" />
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'text-secondary bg-primary shadow-sm' : 'text-gray-400 hover:text-secondary hover:bg-gray-50'}`}
                            title="List View"
                        >
                            <List size={20} />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 ml-auto relative">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest text-[10px]">Sort by:</span>
                        <div className="relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="flex items-center gap-2 text-sm font-black border border-gray-100 px-4 py-2 rounded-xl hover:border-primary transition-all bg-white shadow-sm text-secondary uppercase tracking-tighter"
                            >
                                {sortBy === 'default' ? 'Default' :
                                    sortBy === 'price-low-high' ? 'Price: Low-High' :
                                        sortBy === 'price-high-low' ? 'Price: High-Low' : 'Rating'}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isSortOpen && (
                                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50 overflow-hidden">
                                    {[
                                        { label: 'Default Sorting', value: 'default' },
                                        { label: 'Price: Low to High', value: 'price-low-high' },
                                        { label: 'Price: High to Low', value: 'price-high-low' },
                                        { label: 'Customer Rating', value: 'rating' },
                                    ].map((opt) => (
                                        <button
                                            key={opt.value}
                                            onClick={() => { setSortBy(opt.value); setIsSortOpen(false); }}
                                            className="block w-full text-left px-4 py-3 text-sm font-bold text-gray-600 hover:bg-primary/10 hover:text-secondary transition-colors"
                                        >
                                            {opt.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Products Container */}
                <div className={`grid gap-6 ${viewMode === 'list'
                        ? 'grid-cols-1'
                        : gridCols === 2 ? 'sm:grid-cols-2'
                            : gridCols === 3 ? 'sm:grid-cols-2 lg:grid-cols-3'
                                : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                    }`}>
                    {sortedDeals.map((item) => (
                        <DealCard
                            key={item.id}
                            product={item}
                            viewMode={viewMode}
                            className={viewMode === 'list' ? "border border-gray-100 shadow-sm rounded-2xl overflow-hidden" : ""}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
