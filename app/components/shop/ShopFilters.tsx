"use client";

import { Search, ChevronDown, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

interface ShopFiltersProps {
    searchQuery: string;
    setSearchQuery: (q: string) => void;
    // Multi-select state
    selectedCategories: string[];
    setSelectedCategories: (c: string[]) => void;

    // Additional filters
    selectedBrands: string[];
    setSelectedBrands: (b: string[]) => void;
    selectedColors: string[];
    setSelectedColors: (c: string[]) => void;

    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;

    // Options
    categories: string[];
    brands: string[];
    colors: string[];

    minPrice: number;
    maxPrice: number;
    onReset: () => void;
}

export default function ShopFilters({
    searchQuery,
    setSearchQuery,
    selectedCategories,
    setSelectedCategories,
    selectedBrands,
    setSelectedBrands,
    selectedColors,
    setSelectedColors,
    priceRange,
    setPriceRange,
    categories,
    brands,
    colors,
    minPrice,
    maxPrice,
    onReset
}: ShopFiltersProps) {
    const [localMin, setLocalMin] = useState(priceRange[0]);
    const [localMax, setLocalMax] = useState(priceRange[1]);

    // Sync local state when parent prop changes
    useEffect(() => {
        setLocalMin(priceRange[0]);
        setLocalMax(priceRange[1]);
    }, [priceRange]);

    const handlePriceApply = () => {
        // Clamp values
        let min = Math.max(minPrice, localMin);
        let max = Math.min(maxPrice, localMax);
        if (min > max) min = max;
        setPriceRange([min, max]);
    };

    const toggleSelection = (item: string, current: string[], setter: (s: string[]) => void) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-0 mb-6 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="font-bold text-gray-900 text-lg">Shop By</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100 min-h-[250px]">

                {/* 1. Search */}
                <div className="p-5 flex flex-col gap-3">
                    <h3 className="font-bold text-sm text-gray-900">Search</h3>
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full pl-3 pr-8 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary bg-gray-50/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    </div>
                </div>

                {/* 2. SubCategory (Categories) */}
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-sm text-gray-900">SubCategory</h3>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-200 pr-2">
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                                        {selectedCategories.includes(cat) && <span className="text-white text-[10px]">✓</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
                                    />
                                    <span className={`text-sm ${selectedCategories.includes(cat) ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{cat}</span>
                                    {/* Count could be added here if passed */}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Manufacturer (Brands) */}
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-sm text-gray-900">Manufacturer</h3>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-200 pr-2">
                        <div className="space-y-2">
                            {brands.map(brand => (
                                <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedBrands.includes(brand) ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                                        {selectedBrands.includes(brand) && <span className="text-white text-[10px]">✓</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => toggleSelection(brand, selectedBrands, setSelectedBrands)}
                                    />
                                    <span className={`text-sm ${selectedBrands.includes(brand) ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Color */}
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-sm text-gray-900">Color</h3>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <div className="flex-1 overflow-y-auto max-h-[200px] scrollbar-thin scrollbar-thumb-gray-200 pr-2">
                        <div className="space-y-2">
                            {colors.map(color => (
                                <label key={color} className="flex items-center gap-2 cursor-pointer group">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedColors.includes(color) ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                                        {selectedColors.includes(color) && <span className="text-white text-[10px]">✓</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={selectedColors.includes(color)}
                                        onChange={() => toggleSelection(color, selectedColors, setSelectedColors)}
                                    />
                                    <span className={`text-sm ${selectedColors.includes(color) ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{color}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Price */}
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-sm text-gray-900">Price</h3>
                        <ChevronDown size={14} className="text-gray-400" />
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="relative flex-1">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">Rs</span>
                            <input
                                type="number"
                                className="w-full pl-5 pr-1 py-1.5 border border-gray-200 rounded text-xs text-center"
                                value={localMin}
                                onChange={(e) => setLocalMin(Number(e.target.value))}
                                onBlur={handlePriceApply}
                            />
                        </div>
                        <span className="text-gray-400 text-xs">to</span>
                        <div className="relative flex-1">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">Rs</span>
                            <input
                                type="number"
                                className="w-full pl-5 pr-1 py-1.5 border border-gray-200 rounded text-xs text-center"
                                value={localMax}
                                onChange={(e) => setLocalMax(Number(e.target.value))}
                                onBlur={handlePriceApply}
                            />
                        </div>
                    </div>

                    <div className="relative h-1 w-full bg-gray-100 rounded-full mt-2">
                        <div className="absolute h-full bg-gray-800 rounded-full" style={{ left: '0%', width: '100%' }}></div>
                        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-red-500 rounded-full shadow cursor-pointer -ml-1.5 left-0"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-red-500 rounded-full shadow cursor-pointer -ml-1.5 right-0"></div>
                        {/* This is a static visual representation of the slider as requested. Implementing a true dual-range slider library is complex without external deps. */}
                    </div>
                </div>

            </div>

            {/* Footer / Reset */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/30">
                <button
                    onClick={onReset}
                    className="bg-black text-white text-xs font-bold px-4 py-2 rounded uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                    Reset All
                </button>
            </div>
        </div>
    );
}
