"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import DealCard from "../components/DealCard";
import ShopFilters from "../components/shop/ShopFilters";
import ShopToolbar from "../components/shop/ShopToolbar";
import { booksData, uniformsData, stationeryData, bagsData, Product } from "../data/products";
import { useSearchParams } from "next/navigation";

// Combine data
const allProducts = [...booksData, ...uniformsData, ...stationeryData, ...bagsData];

// Get unique categories
const categories = Array.from(new Set(allProducts.map(p => p.category))).sort();

// Mock Brands/Manufacturers (Derive from real data if possible, else mock)
// For books, we can assume "Oxford" or "Publier" based on description/title, but let's make some tailored bands.
const brands = ["Oxford", "Pilot", "Dollar", "Bata", "Service", "Local", "Redspot", "Camlin", "Dux"];

// Mock Colors
const colors = ["Blue", "Red", "White", "Black", "Green", "Yellow", "Silver", "Pink"];

// Get min/max price for initial range
const minPrice = Math.min(...allProducts.map(p => p.price));
const maxPrice = Math.max(...allProducts.map(p => p.price));

function ShopContent() {
    const searchParams = useSearchParams();

    // State
    const [searchQuery, setSearchQuery] = useState("");

    // Multi-select Filters
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [gridCols, setGridCols] = useState(4); // Default 4 cols
    const [sortBy, setSortBy] = useState("default");

    // Initialize from URL params if present
    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat && categories.includes(cat) && !selectedCategories.includes(cat)) {
            setSelectedCategories([cat]);
        }
    }, [searchParams]);

    // Filtering & Sorting
    const filteredProducts = useMemo(() => {
        let result = allProducts;

        // 1. Search
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
        }

        // 2. Category (Multi-select)
        if (selectedCategories.length > 0) {
            result = result.filter(p => selectedCategories.includes(p.category));
        }

        // 3. Brand (Mock Filter - just checking if name/desc contains brand string)
        if (selectedBrands.length > 0) {
            result = result.filter(p => selectedBrands.some(b =>
                p.name.includes(b) || p.description.includes(b) || (b === "Local" && !p.name.includes("Oxford")) // Fallback logic
            ));
        }

        // 4. Color (Mock Filter)
        if (selectedColors.length > 0) {
            result = result.filter(p => selectedColors.some(c =>
                p.name.includes(c) || p.description.includes(c) || (c === "White" && p.name.includes("White")) // Simple check
            ));
        }

        // 5. Price
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // 6. Sort
        if (sortBy === "price-low") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortBy === "rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "name") {
            result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [searchQuery, selectedCategories, selectedBrands, selectedColors, priceRange, sortBy]);

    // Reset Handler
    const handleReset = () => {
        setSearchQuery("");
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSelectedColors([]);
        setPriceRange([minPrice, maxPrice]);
        setSortBy("default");
    };

    // Dynamic Grid Class
    const getGridClass = () => {
        if (viewMode === 'list') return "grid-cols-1";
        switch (gridCols) {
            case 2: return "grid-cols-2";
            case 3: return "grid-cols-2 lg:grid-cols-3";
            case 4: return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
            default: return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans pb-20">
            {/* Header / Breadcrumb Area */}
            <div className="bg-gray-50 border-b border-gray-200 py-6 mb-8">
                <div className="max-w-[1400px] mx-auto px-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <span>Home</span> / <span>Products</span> / <span className="text-gray-900 font-medium">
                            {searchQuery ? `Search: "${searchQuery}"` :
                                selectedCategories.length === 1 ? selectedCategories[0] :
                                    selectedCategories.length > 1 ? "Multiple Categories" : "All Items"}
                        </span>
                    </div>
                    {/* Title not in image explicitly but implied */}
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4">

                {/* Filters */}
                <ShopFilters
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}

                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}

                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}

                    selectedColors={selectedColors}
                    setSelectedColors={setSelectedColors}

                    priceRange={priceRange}
                    setPriceRange={setPriceRange}

                    categories={categories}
                    brands={brands}
                    colors={colors}

                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onReset={handleReset}
                />

                {/* Toolbar */}
                <ShopToolbar
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    gridCols={gridCols}
                    setGridCols={setGridCols}
                />

                {/* Grid */}
                <div className={`grid gap-6 ${getGridClass()}`}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className={viewMode === 'list' ? 'flex justify-center' : ''}>
                            <DealCard
                                product={{
                                    ...product,
                                    title: product.name,
                                    description: product.description,
                                    oldPrice: product.oldPrice || 0,
                                    discount: product.discount || 0,
                                    rating: product.rating || 0
                                }}
                                viewMode={viewMode}
                                className={viewMode === 'list' ? 'w-full' : ''}
                            />
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No products match your criteria.</p>
                        <button onClick={handleReset} className="text-primary font-bold mt-2">Clear All</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    );
}
