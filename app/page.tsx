"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket, RefreshCw, Headphones, Gift, ChevronRight, Star,
  BookOpen, Calculator, Shirt, Backpack, Menu
} from "lucide-react";

import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import MiniBanner from "./components/MiniBanner";

import { booksData, uniformsData, stationeryData, bagsData } from "./data/products";

// --- Mock Data ---

const sidebarCategories = [
  {
    label: "Book Bundles",
    href: "/products/books",
    icon: BookOpen,
    promoImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    subcategories: [
      {
        title: "Academic Levels",
        links: [
          { label: "O-Level (Cambridge)", href: "/products/books?tag=olevel" },
          { label: "A-Level (Cambridge)", href: "/products/books?tag=alevel" },
          { label: "Matriculation", href: "/products/books?tag=matric" },
          { label: "FSc / Intermediate", href: "/products/books?tag=fsc" },
        ]
      },
      {
        title: "Subjects",
        links: [
          { label: "Sciences (Bio/Chem/Phy)", href: "/products/books?tag=science" },
          { label: "Mathematics", href: "/products/books?tag=math" },
          { label: "Computer Science", href: "/products/books?tag=cs" },
          { label: "Humanities", href: "/products/books?tag=humanities" },
        ]
      }
    ]
  },
  {
    label: "Stationery Sets",
    href: "/products/stationery",
    icon: Calculator,
    promoImage: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    subcategories: [
      {
        title: "Essentials",
        links: [
          { label: "Pens & Pencils", href: "/products/stationery?cat=pens" },
          { label: "Notebooks & Registers", href: "/products/stationery?cat=notebooks" },
          { label: "Geometry Boxes", href: "/products/stationery?cat=geometry" },
        ]
      },
      {
        title: "Art & Craft",
        links: [
          { label: "Canvas & Paints", href: "/products/stationery?cat=art" },
          { label: "Sketchbooks", href: "/products/stationery?cat=sketch" },
          { label: "Brushes & Tools", href: "/products/stationery?cat=tools" },
        ]
      }
    ]
  },
  {
    label: "School Uniforms",
    href: "/products/uniforms",
    icon: Shirt,
    promoImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
    subcategories: [
      {
        title: "Boys Uniform",
        links: [
          { label: "Shirts (White/Blue)", href: "/products/uniforms?gender=boys" },
          { label: "Trousers (Grey/Black)", href: "/products/uniforms?gender=boys" },
          { label: "Ties & Belts", href: "/products/uniforms?gender=boys" },
        ]
      },
      {
        title: "Girls Uniform",
        links: [
          { label: "Shirts & Sash", href: "/products/uniforms?gender=girls" },
          { label: "Skirts / Tunics", href: "/products/uniforms?gender=girls" },
          { label: "Scarves", href: "/products/uniforms?gender=girls" },
        ]
      }
    ]
  },
  { label: "Bags & Backpacks", href: "/products/school-bags", icon: Backpack },
  { label: "Art Supplies", href: "/products/stationery", icon: Star },
  { label: "Exam Preparation", href: "/products/books", icon: BookOpen },
  { label: "Geometry Boxes", href: "/products/stationery", icon: Calculator },
  { label: "Water Bottles", href: "/products/accessories", icon: Gift },
  { label: "Lunch Boxes", href: "/products/accessories", icon: Gift },
];

const features = [
  { icon: Rocket, title: "Free Shipping", sub: "For orders over $50" },
  { icon: RefreshCw, title: "Money Back", sub: "If goods have problems" },
  { icon: Headphones, title: "Online Support", sub: "24/7 Dedicated support" },
  { icon: Gift, title: "Gift Promotion", sub: "Free gift with monthly deals" },
];

const topCategories = [
  { name: "Textbooks", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400&q=80" },
  { name: "Uniforms", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80" },
  { name: "Stationery", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" },
];

const products = [
  ...booksData.slice(0, 3),
  ...stationeryData.slice(0, 3),
  ...uniformsData.slice(0, 3),
  ...bagsData.slice(0, 3)
].map((p, i) => ({
  ...p,
  title: p.name,
  oldPrice: i % 3 === 0 ? p.price * 1.2 : undefined,
  badge: i === 0 ? "HOT" : i === 4 ? "SALE" : undefined
}));

export default function Home() {
  const [activeTab, setActiveTab] = useState("Best Sellers");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">

      {/* MAIN CONTAINER */}
      <div className="mx-auto max-w-[1600px] px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* --- LEFT SIDEBAR (Desktop) --- */}
          <aside className="hidden lg:block space-y-6 relative z-30">
            {/* Categories Menu */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 relative">
              <div className="bg-red-700 px-5 py-4 flex items-center gap-3 text-white font-bold tracking-wide rounded-t-xl">
                <Menu size={20} />
                <span>ALL CATEGORIES</span>
              </div>
              <div className="py-2">
                {sidebarCategories.map((c, i) => (
                  <div key={i} className="group relative">
                    <Link
                      href={c.href}
                      className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-red-700 transition-colors border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <c.icon size={16} className="text-gray-400 group-hover:text-red-700" />
                        {c.label}
                      </div>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-red-700" />
                    </Link>

                    {/* MEGA MENU FLYOUT */}
                    {c.subcategories && (
                      <div className="hidden group-hover:block absolute left-full top-0 ml-1 bg-white border border-gray-100 shadow-xl rounded-xl p-6 z-50 w-[700px]">
                        <div className="grid grid-cols-3 gap-8">
                          {/* Subcategory Columns */}
                          <div className="col-span-2 grid grid-cols-2 gap-8">
                            {c.subcategories.map((sub, idx) => (
                              <div key={idx}>
                                <h4 className="font-bold text-gray-900 mb-4">{sub.title}</h4>
                                <ul className="space-y-2">
                                  {sub.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                      <Link href={link.href} className="text-sm text-gray-500 hover:text-red-700 hover:underline">
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {/* Promo Image */}
                          <div className="col-span-1 relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4">
                            {c.promoImage && (
                              <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                                <img src={c.promoImage} alt={c.label} className="object-cover w-full h-full mix-blend-multiply opacity-80" />
                                <div className="absolute bottom-6 left-6 z-20 text-white">
                                  <p className="text-xs font-bold uppercase mb-1 text-yellow-400">Special Offer</p>
                                  <p className="font-bold text-xl leading-tight mb-2">30% OFF</p>
                                  <button className="bg-white text-gray-900 text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-gray-100">
                                    SHOP NOW
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bestsellers Side Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-red-700 pl-3">BEST SELLERS</h3>
              <div className="space-y-4">
                {products.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 bg-gray-100 rounded-md shrink-0 overflow-hidden border border-gray-100">
                      {/* Placeholder or Image */}
                      <div className="w-full h-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">IMG</div>
                    </div>
                    <div>
                      <Link href={`/products/${p.id}`} className="text-xs font-semibold text-gray-800 group-hover:text-red-700 line-clamp-2 mb-1">{p.title}</Link>
                      <div className="flex text-yellow-500 text-[10px] mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < p.rating ? "currentColor" : "none"} />)}
                      </div>
                      <p className="text-sm font-bold text-red-700">Rs {p.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Side Widget */}
            <div className="bg-[#FFF4F4] rounded-xl p-6 text-center border border-red-100">
              <h3 className="font-extrabold text-xl text-red-500 mb-2">Back To School</h3>
              <p className="text-gray-600 text-sm mb-4">Get 50% off on your first order this week!</p>
              <Link href="/deals" className="inline-block bg-red-500 text-white text-xs font-bold px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
                CHECK NOW
              </Link>
            </div>
          </aside>

          {/* --- RIGHT MAIN CONTENT --- */}
          <main className="space-y-8">

            {/* 1. HERO SLIDER */}
            <HeroSlider />

            {/* 2. FEATURES BAR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-red-700 flex items-center justify-center shrink-0">
                    <f.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{f.title}</h4>
                    <p className="text-xs text-gray-500">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. TOP CATEGORIES */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Top Categories</h3>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"><ChevronRight size={16} className="rotate-180" /></button>
                  <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"><ChevronRight size={16} /></button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topCategories.map((c, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-50 rounded-full mb-4 flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-red-700 transition-colors">
                      {/* We can use real images if moved to public, else placeholder */}
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">IMG</div>
                    </div>
                    <h4 className="font-bold text-gray-800 group-hover:text-red-700 transition-colors">{c.name}</h4>
                    <span className="text-xs text-gray-400 mt-1">12 items</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. DEALS OF THE DAY */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    Today's Best Deals
                    <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded ml-2">ENDS IN</span>
                  </h3>
                  {/* Timer */}
                  <div className="flex gap-1 text-white text-xs font-bold">
                    <div className="bg-red-500 px-2 py-1 rounded">14</div>
                    <span className="text-gray-400 text-lg">:</span>
                    <div className="bg-red-500 px-2 py-1 rounded">20</div>
                    <span className="text-gray-400 text-lg">:</span>
                    <div className="bg-red-500 px-2 py-1 rounded">45</div>
                  </div>
                </div>
                <Link href="/deals" className="text-xs font-bold text-red-700 hover:underline">See All Deals</Link>
              </div>

              {/* Single Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.slice(0, 3).map((p) => (
                  <div key={p.id} className="h-full">
                    <ProductCard item={p} />
                  </div>
                ))}
              </div>
            </section>

            {/* 5. TABS & FEATURED PRODUCTS */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-gray-200 pb-2">
                <h3 className="text-lg font-bold text-gray-800">Featured Products</h3>
                <div className="flex gap-6 text-sm font-semibold text-gray-500 overflow-x-auto">
                  {['Best Sellers', 'New Arrivals', 'Top Rated'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${activeTab === tab ? "text-red-700 border-red-700" : "border-transparent hover:text-gray-800"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((p) => (
                  <ProductCard key={p.id} item={p} />
                ))}
                {/* Duplicate for grid fill */}
                {products.slice(0, 3).map((p) => (
                  <ProductCard key={`dup-${p.id}`} item={{ ...p, id: `dup-${p.id}` }} />
                ))}
              </div>
            </section>

            {/* 6. BOTTOM BANNERS */}
            <section className="grid md:grid-cols-2 gap-4">
              <MiniBanner
                title="School Bags"
                subtitle="Starting from Rs 5,000"
                color="bg-purple-100"
                textColor="text-purple-800"
                buttonColor="bg-purple-600"
              />
              <MiniBanner
                title="Art Supplies"
                subtitle="Up to 30% OFF this week"
                color="bg-amber-100"
                textColor="text-amber-800"
                buttonColor="bg-amber-600"
              />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
