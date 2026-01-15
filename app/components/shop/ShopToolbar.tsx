"use client";

import { LayoutGrid, List, ChevronDown } from "lucide-react";

interface ShopToolbarProps {
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    gridCols: number;
    setGridCols: (cols: number) => void;
}

export default function ShopToolbar({
    viewMode,
    setViewMode,
    sortBy,
    setSortBy,
    gridCols,
    setGridCols
}: ShopToolbarProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white border border-gray-100 rounded-lg p-2 mb-6 shadow-sm">

            {/* View Icons */}
            <div className="flex items-center gap-4 px-2">
                <div className="flex items-center gap-1 border-r border-gray-100 pr-4">
                    {/* Grid 2 */}
                    <button
                        onClick={() => { setViewMode('grid'); setGridCols(2); }}
                        className={`p-1.5 rounded transition-colors ${viewMode === 'grid' && gridCols === 2 ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                    </button>
                    {/* Grid 3 */}
                    <button
                        onClick={() => { setViewMode('grid'); setGridCols(3); }}
                        className={`p-1.5 rounded transition-colors hidden sm:block ${viewMode === 'grid' && gridCols === 3 ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="5" height="5"></rect><rect x="9" y="2" width="5" height="5"></rect><rect x="16" y="2" width="5" height="5"></rect><rect x="2" y="9" width="5" height="5"></rect><rect x="9" y="9" width="5" height="5"></rect><rect x="16" y="9" width="5" height="5"></rect><rect x="2" y="16" width="5" height="5"></rect><rect x="9" y="16" width="5" height="5"></rect><rect x="16" y="16" width="5" height="5"></rect></svg>
                    </button>
                    {/* Grid 4 */}
                    <button
                        onClick={() => { setViewMode('grid'); setGridCols(4); }}
                        className={`p-1.5 rounded transition-colors hidden md:block ${viewMode === 'grid' && gridCols === 4 ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    {/* List */}
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        <List size={18} />
                    </button>
                </div>
            </div>

            {/* Sort Right Side */}
            <div className="relative px-2">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">Default</span>
                    <ChevronDown size={14} className="text-gray-400" />

                    {/* Custom Dropdown */}
                    <select
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                        <option value="name">Name (A-Z)</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
