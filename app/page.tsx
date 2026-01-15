"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Rocket, RefreshCw, Headphones, Gift, ChevronRight, Star,
  BookOpen, Calculator, Shirt, Backpack, Menu
} from "lucide-react";

import HeroSlider from "./components/HeroSlider";
import ProductCard from "./components/ProductCard";
import DealCard from "./components/DealCard";
import MiniBanner from "./components/MiniBanner";

import { booksData, uniformsData, stationeryData, bagsData, dealsData } from "./data/products";
import CategoriesSlider from "./components/CategoriesSlider";
import DealsSlider from "./components/DealsSlider";

// --- Mock Data ---

const sidebarCategories = [
  {
    label: "Book Bundles",
    href: "/products?category=Pre-School", // Example mapping
    icon: BookOpen,
    promoImage: "/hero-books.png",
    subcategories: [
      {
        title: "Academic Levels",
        links: [
          { label: "O-Level (Cambridge)", href: "/products?category=O-Level" },
          { label: "A-Level (Cambridge)", href: "/products?category=O-Level" },
          { label: "Matriculation", href: "/products?category=Matric" },
          { label: "FSc / Intermediate", href: "/products?category=Matric" },
        ]
      },
      {
        title: "Subjects",
        links: [
          { label: "Sciences (Bio/Chem/Phy)", href: "/products?category=Pre-School" },
          { label: "Mathematics", href: "/products?category=Primary" },
          { label: "Computer Science", href: "/products?category=Middle" },
          { label: "Humanities", href: "/products?category=General" },
        ]
      }
    ]
  },
  {
    label: "Stationery Sets",
    href: "/products?category=Writing",
    icon: Calculator,
    promoImage: "/hero-art.png",
    subcategories: [
      {
        title: "Essentials",
        links: [
          { label: "Pens & Pencils", href: "/products?category=Writing" },
          { label: "Notebooks & Registers", href: "/products?category=Paper" },
          { label: "Geometry Boxes", href: "/products?category=Geometry" },
        ]
      },
      {
        title: "Art & Craft",
        links: [
          { label: "Canvas & Paints", href: "/products?category=Art" },
          { label: "Sketchbooks", href: "/products?category=Art" },
          { label: "Brushes & Tools", href: "/products?category=Art" },
        ]
      }
    ]
  },
  {
    label: "School Uniforms",
    href: "/products?category=Boys",
    icon: Shirt,
    promoImage: "/cat-uniforms.png",
    subcategories: [
      {
        title: "Boys Uniform",
        links: [
          { label: "Shirts (White/Blue)", href: "/products?category=Boys" },
          { label: "Trousers (Grey/Black)", href: "/products?category=Boys" },
          { label: "Ties & Belts", href: "/products?category=Accessories" },
        ]
      },
      {
        title: "Girls Uniform",
        links: [
          { label: "Shirts & Sash", href: "/products?category=Girls" },
          { label: "Skirts / Tunics", href: "/products?category=Girls" },
          { label: "Scarves", href: "/products?category=Girls" },
        ]
      }
    ]
  },
  { label: "Bags & Backpacks", href: "/products?category=Backpack", icon: Backpack },
  { label: "Art Supplies", href: "/products?category=Art", icon: Star },
  { label: "Exam Preparation", href: "/products?category=O-Level", icon: BookOpen },
  { label: "Geometry Boxes", href: "/products?category=Geometry", icon: Calculator },
  { label: "Water Bottles", href: "/products?category=Essentials", icon: Gift },
  { label: "Lunch Boxes", href: "/products?category=Essentials", icon: Gift },
];

const features = [
  { icon: Rocket, title: "Free Shipping", sub: "For orders over Rs 5000" },
  { icon: RefreshCw, title: "Money Back", sub: "If goods have problems" },
  { icon: Headphones, title: "Online Support", sub: "24/7 Dedicated support" },
  { icon: Gift, title: "Gift Promotion", sub: "Free gift with monthly deals" },
];

const topCategories = [
  { name: "O-Level", image: "/cat-textbooks.png" }, // Representative
  { name: "Boys", image: "/cat-uniforms.png" },    // Uniforms
  { name: "Writing", image: "/cat-stationery.png" }, // Stationery
  { name: "Novels", image: "/hero-school.png" },    // Specials
  { name: "Backpack", image: "/cat-bags.png" },     // Bags
  { name: "Essentials", image: "/cat-lunch.png" },  // Lunch
  { name: "Art", image: "/cat-art.png" },
  { name: "Shoes", image: "/cat-shoes.png" },
  { name: "Paper", image: "/cat-notebooks.png" },
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
              <div className="bg-primary px-5 py-4 flex items-center gap-3 text-secondary font-bold tracking-wide rounded-t-xl">
                <Menu size={20} />
                <span>ALL CATEGORIES</span>
              </div>
              <div className="py-2">
                {sidebarCategories.map((c, i) => (
                  <div key={i} className="group relative">
                    <Link
                      href={c.href}
                      className="flex items-center justify-between px-5 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700 hover:text-secondary transition-colors border-b border-gray-50 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <c.icon size={16} className="text-gray-400 group-hover:text-secondary" />
                        {c.label}
                      </div>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-secondary" />
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
                                      <Link href={link.href} className="text-sm text-gray-500 hover:text-secondary hover:underline">
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
              <h3 className="font-bold text-gray-800 mb-4 border-l-4 border-primary pl-3">BEST SELLERS</h3>
              <div className="space-y-4">
                {products.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 bg-gray-100 rounded-md shrink-0 overflow-hidden border border-gray-100">
                      {/* Placeholder or Image */}
                      <div className="w-full h-full bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">IMG</div>
                    </div>
                    <div>
                      <Link href={`/products/${p.id}`} className="text-xs font-semibold text-gray-800 group-hover:text-secondary line-clamp-2 mb-1">{p.title}</Link>
                      <div className="flex text-primary text-[10px] mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill={i < p.rating ? "currentColor" : "none"} />)}
                      </div>
                      <p className="text-sm font-bold text-secondary">Rs {p.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Side Widget */}
            <div className="bg-primary-light rounded-xl p-6 text-center border border-primary/20">
              <h3 className="font-extrabold text-xl text-secondary mb-2">Back To School</h3>
              <p className="text-gray-600 text-sm mb-4">Get 50% off on your first order this week!</p>
              <Link href="/deals" className="inline-block bg-primary text-secondary text-xs font-bold px-6 py-2 rounded-full hover:bg-primary-hover transition-colors">
                CHECK NOW
              </Link>
            </div>
          </aside>

          {/* --- RIGHT MAIN CONTENT --- */}
          <main className="space-y-8 min-w-0">

            {/* 1. HERO SLIDER */}
            <HeroSlider />

            {/* 2. FEATURES BAR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-default">
                  <div className="w-12 h-12 rounded-full bg-primary-light text-secondary flex items-center justify-center shrink-0">
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
            <CategoriesSlider categories={topCategories} />

            {/* 4. DEALS OF THE DAY */}
            <DealsSlider
              endTime={new Date(new Date().getTime() + 145 * 24 * 60 * 60 * 1000).toISOString()}
              products={dealsData}
            />

            {/* 5. TABS & FEATURED PRODUCTS */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 border-b border-gray-200 pb-2">
                <h3 className="text-lg font-bold text-gray-800">Featured Products</h3>
                <div className="flex gap-6 text-sm font-semibold text-gray-500 overflow-x-auto">
                  {['Best Sellers', 'New Arrivals', 'Top Rated'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${activeTab === tab ? "text-secondary border-secondary" : "border-transparent hover:text-gray-800"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {products.map((p) => (
                  <DealCard
                    key={p.id}
                    product={{
                      id: p.id,
                      title: p.title || p.name,
                      image: p.image,
                      price: typeof p.price === 'number' ? p.price : parseFloat((p.price as any).toString().replace(/[^0-9.]/g, '')),
                      oldPrice: p.oldPrice || (typeof p.price === 'number' ? p.price * 1.2 : 0),
                      rating: p.rating || 4,
                      discount: p.oldPrice ? Math.round(((p.oldPrice - (typeof p.price === 'number' ? p.price : 0)) / p.oldPrice) * 100) : undefined,
                      // For featured products, we might not have stock info, omit to hide progress bar
                      /* available: 10, totalStock: 20 */
                    }}
                  />
                ))}
                {/* Duplicate for grid fill */}
                {products.slice(0, 3).map((p) => (
                  <DealCard
                    key={`dup-${p.id}`}
                    product={{
                      id: `dup-${p.id}`,
                      title: p.title || p.name,
                      image: p.image,
                      price: typeof p.price === 'number' ? p.price : parseFloat((p.price as any).toString().replace(/[^0-9.]/g, '')),
                      oldPrice: p.oldPrice || (typeof p.price === 'number' ? p.price * 1.2 : 0),
                      rating: p.rating || 4,
                      discount: p.oldPrice ? Math.round(((p.oldPrice - (typeof p.price === 'number' ? p.price : 0)) / p.oldPrice) * 100) : undefined
                    }}
                  />
                ))}
              </div>
            </section>

            {/* 6. BOTTOM BANNERS */}
            <section className="grid md:grid-cols-2 gap-4">
              <MiniBanner
                title="School Bags"
                subtitle="Starting from Rs 5,000"
                color="bg-primary-light"
                textColor="text-secondary"
                buttonColor="bg-secondary"
                image="/cat-bags.png"
              />
              <MiniBanner
                title="Art Supplies"
                subtitle="Up to 30% OFF this week"
                color="bg-[#FFF8E1]"
                textColor="text-secondary"
                buttonColor="bg-primary text-secondary"
                image="/cat-art.png"
              />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
