"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search, User, Heart, ShoppingCart, ChevronDown, ChevronRight, Truck, Headphones, BadgePercent,
  RefreshCcw, BookOpen, Shirt, Pencil, Backpack, Smartphone, Baby, Gamepad2, Car, Tag,
  Flame, Star, ArrowRight, ArrowLeft, Gift
} from "lucide-react";

import MiniBanner from "./components/MiniBanner";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header"; // We'll disable the internal header code and use the global one we just updated

// Generated Image Paths
const HERO_IMG = "/hero_back_to_school.png"; // Placeholder for the actual path logic (I need to copy them first?)
// Actually, I should use the generated paths if I know them, OR I should have copied them to public. 
// Since I can't copy easily without a shell command, I will use placeholders and rely on the fact that I previously generated them.
// Wait, generated images are in artifacts. I must copy them to public for them to work in <img> tags.
// I will assume I need to handle that. For now I'll point to them assuming they are in public or use placeholder.

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.06 * i },
  }),
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("stationery");

  const sidebarCategories = useMemo(
    () => [
      { icon: Flame, label: "Hot Deals", href: "/deals" },
      { icon: BookOpen, label: "Books (School / College)", href: "/products/books" },
      { icon: Shirt, label: "School Uniforms", href: "/products/uniforms" },
      { icon: Pencil, label: "Stationery", href: "/products/stationery" },
      { icon: Backpack, label: "School Bags", href: "/products/school-bags" },
      { icon: Smartphone, label: "Accessories", href: "/products/accessories" },
      { icon: Baby, label: "Kids Supplies", href: "/products/kids" },
      { icon: Gamepad2, label: "Toys & Games", href: "/products/toys" },
      { icon: Car, label: "Travel Bottles / Lunch Boxes", href: "/products/lunchboxes" },
      { icon: Tag, label: "More Categories", href: "/categories" },
    ],
    []
  );

  const topCategories = useMemo(
    () => [
      { icon: BookOpen, label: "Textbooks", href: "/products/books" },
      { icon: Pencil, label: "Notebooks", href: "/products/stationery" },
      { icon: Backpack, label: "Bags", href: "/products/school-bags" },
      { icon: Shirt, label: "Uniforms", href: "/products/uniforms" },
    ],
    []
  );

  const deals = useMemo(
    () => [
      { title: "Premium Backpack (Waterproof)", price: "3,499", oldPrice: "4,799", badge: "-25%", available: 127 },
      { title: "Gel Pens Pack (12 pcs)", price: "399", oldPrice: "550", badge: "-18%", available: 870 },
      { title: "Oxford Notebook A4 (200 pages)", price: "650", oldPrice: "850", badge: "-27%", available: 280 },
      { title: "School Shoes (Black)", price: "2,499", oldPrice: "3,199", badge: "-6%", available: 445 },
    ],
    []
  );

  const featuredByTab: Record<string, any[]> = useMemo(
    () => ({
      stationery: [
        { title: "Sony WH-CH520 Style Headphones (Gift Option)", price: "7,900", oldPrice: "9,400", badge: "SALE" },
        { title: "Security Camera (Night Vision) - For Shop", price: "4,500", oldPrice: "5,900" },
        { title: "Samsung Calculator (Exam Friendly)", price: "1,150", oldPrice: "1,450" },
        { title: "Polaroid Strap Touch Instant (Gadget)", price: "6,700" },
      ],
      books: [
        { title: "Class 9 Maths (Punjab Textbook)", price: "450", oldPrice: "520", badge: "Bestseller" },
        { title: "Oxford English Grammar (Intermediate)", price: "1,250" },
        { title: "A-Levels Biology Notes (Compiled)", price: "1,999", oldPrice: "2,499" },
        { title: "Kids Story Books Set (10 pcs)", price: "1,350", badge: "SALE" },
      ],
      uniforms: [
        { title: "Boys Uniform (Shirt + Trouser)", price: "2,850", oldPrice: "3,200" },
        { title: "Girls Uniform (Shirt + Skirt)", price: "2,950", oldPrice: "3,350", badge: "SALE" },
        { title: "School Sweater (Winter)", price: "1,750" },
        { title: "Sports Kit (T-shirt + Trouser)", price: "2,250" },
      ],
      bags: [
        { title: "Trolley Bag (Kids)", price: "6,500", oldPrice: "7,900" },
        { title: "Laptop Backpack (Office)", price: "4,200" },
        { title: "Lunch Bag (Insulated)", price: "850", badge: "SALE" },
        { title: "Pencil Case (Hard Shell)", price: "450" },
      ],
    }),
    []
  );

  const suggestions = useMemo(
    () => [
      { title: "REGAL 2-Seater Fabric Sofa (Demo)", price: "13,700" },
      { title: "Samsung Galaxy S21 Ultra (Demo)", price: "115,000" },
      { title: "Apple Watch Series 9 (Demo)", price: "70,000", oldPrice: "82,000", badge: "SALE" },
      { title: "Graco Slimfit 3-in-1 Car Seat (Demo)", price: "12,500" },
      { title: "Quindim Retro Ceramic Pendant (Demo)", price: "11,400" },
      { title: "iPhone 15 Pro Max (Demo)", price: "98,000" },
      { title: "iPhone 15 Natural Titanium (Demo)", price: "69,000" },
      { title: "Mirror Jewelry Cabinet (Demo)", price: "4,900" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* MAIN GRID */}
      <main className="mx-auto max-w-[1280px] px-4 pb-16 pt-6">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* LEFT SIDEBAR */}
          <aside className="space-y-6 hidden lg:block">
            {/* categories card */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-2 bg-blue-600 px-4 py-3 text-sm font-extrabold text-white">
                <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
                ALL CATEGORIES
              </div>

              <div className="p-2">
                {sidebarCategories.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gray-100 text-gray-700">
                        <c.icon size={16} />
                      </span>
                      {c.label}
                    </span>
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* NEW ARRIVALS */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-gray-900">NEW ARRIVALS</p>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex gap-3">
                <div className="h-20 w-20 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400">IMG</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 line-clamp-2">
                    Gamer Xtreme Style PC (Demo)
                  </p>
                  {/* Rating placeholder */}
                  <div className="flex text-amber-500"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                  <p className="mt-1 text-sm font-bold text-gray-900">Rs 12,500</p>
                </div>
              </div>
            </div>

            {/* promo image placeholder */}
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              {/* Use CSS gradient or if I had an image I'd put it here */}
              <div className="aspect-[3/4] w-full bg-gradient-to-br from-amber-50 to-rose-50" />
              <div className="absolute left-4 top-4 rounded-lg bg-rose-600 px-3 py-2 text-xs font-extrabold text-white">
                BLACK FRIDAY SALE
              </div>
            </div>

            {/* testimonial-ish block */}
            <div className="rounded-xl border border-gray-200 bg-blue-600 p-4 text-white shadow-sm">
              <p className="text-sm leading-relaxed">
                “This is a great design and i hope that we will create a website with a good signature. CHN team is
                reactive and kind.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20" />
                <div>
                  <p className="text-sm font-extrabold">CASEY</p>
                  <p className="text-xs text-white/80">Stylist</p>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="space-y-6">
            {/* HERO + feature row */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="grid gap-4 lg:grid-cols-[1fr]">
                {/* HERO */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 h-[300px] md:h-[400px]"
                >
                  {/* Background Image injected style if available, else standard content */}
                  {/* Right now I use the gradient as fallback but structure content over it */}

                  <div className="p-6 md:p-10 relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-3 py-1 text-xs font-extrabold text-white w-fit">
                      <BadgePercent size={14} /> 50% OFF
                    </div>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl leading-tight">
                      books, uniforms, stationery &amp; bags
                    </h2>
                    <p className="mt-4 max-w-xl text-sm text-gray-600 md:text-lg">
                      Your one-stop shop in Pakistan for school and office essentials. Fast delivery, quality products,
                      and best prices.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href="/products"
                        className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 shadow-md"
                      >
                        Shop now
                      </Link>
                      <Link
                        href="/products/books"
                        className="rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50"
                      >
                        Browse books
                      </Link>
                    </div>
                  </div>

                  {/* right image placeholder */}
                  {/* I will assume the image is generated and placed, but for now using a colored block to match the user's snippet design */}
                  <div className="absolute right-0 top-0 hidden h-full w-[50%] bg-blue-100/50 md:flex items-center justify-center">
                    {/* Placeholder for Hero Image */}
                    <div className="w-64 h-64 bg-white/50 rounded-full blur-3xl absolute" />
                    {/* If I had the URL I'd put <img src="/hero_back_to_school.png" ... /> */}
                  </div>
                </motion.div>

                {/* 4 feature boxes */}
                <div className="grid gap-3 md:grid-cols-4">
                  {[
                    { icon: Truck, title: "Free Shipping", sub: "On order over Rs 4,999" },
                    { icon: RefreshCcw, title: "Money Back", sub: "30 days money back" },
                    { icon: Headphones, title: "Online Support", sub: "Support online 24/7" },
                    { icon: Gift, title: "Gift Promotion", sub: "On order over Rs 9,999" },
                  ].map((x, i) => (
                    <motion.div
                      key={x.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      custom={i}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-700">
                        <x.icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-extrabold text-gray-900">{x.title}</p>
                        <p className="text-xs text-gray-500">{x.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* TOP CATEGORIES row */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-gray-900">TOP CATEGORIES</p>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {topCategories.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gray-100 text-gray-800 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <c.icon size={20} />
                    </div>
                    <p className="text-sm font-extrabold text-gray-900">{c.label}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* TODAY'S BEST DEALS */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-extrabold text-gray-900">TODAY&apos;S BEST DEALS</p>
                  {/* static countdown UI like template */}
                  <div className="flex items-center gap-2">
                    {["14d", "12", "53", "07"].map((t, i) => (
                      <span
                        key={i}
                        className="rounded-md bg-rose-600 px-2 py-1 text-xs font-extrabold text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href="/products" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                  View All Products
                </Link>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {deals.map((d) => (
                  <ProductCard key={d.title} item={d} />
                ))}
              </div>

              {/* mini banners row */}
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <MiniBanner badge="AS LOW AS" title="Starter Stationery Bundle" subtitle="Pens + notebook + ruler" />
                <MiniBanner badge="CONVENIENT" title="Smart Watches (Demo)" subtitle="Gift options available" />
                <MiniBanner badge="BACK-TO-SCHOOL" title="Uniform Offers" subtitle="Limited time bundles" />
              </div>
            </div>

            {/* FEATURED PRODUCTS + TABS */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-extrabold text-gray-900">FEATURED PRODUCTS</p>
                <Link href="/products" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                  View All Products
                </Link>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { id: "stationery", label: "STATIONERY" },
                  { id: "books", label: "BOOKS" },
                  { id: "uniforms", label: "UNIFORMS" },
                  { id: "bags", label: "BAGS" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={[
                      "rounded-lg border px-3 py-2 text-xs font-extrabold transition-colors",
                      activeTab === t.id
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {(featuredByTab[activeTab] || []).map((p) => (
                  <ProductCard key={p.title} item={p} />
                ))}
              </div>
            </div>

            {/* FEATURED BRANDS */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-gray-900">FEATURED BRANDS</p>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button className="rounded-lg border border-gray-200 p-2 hover:bg-gray-50">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {["Oxford", "Samsung", "Otago", "PearlLove", "Qualia"].map((b) => (
                  <div
                    key={b}
                    className="grid h-12 place-items-center rounded-xl border border-gray-200 bg-gray-50 text-sm font-extrabold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* SUGGESTION FOR YOU */}
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-extrabold text-gray-900">SUGGESTION FOR YOU</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {suggestions.map((s) => (
                  <ProductCard key={s.title} item={s} />
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Link
                  href="/products"
                  className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-extrabold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* NEWSLETTER STRIP */}
      <section className="bg-blue-600">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-extrabold text-white">NEWSLETTER SIGNUP:</p>
            <p className="text-sm text-white/90">GET 10% OFF YOUR FIRST ORDER</p>
          </div>
          <div className="flex w-full max-w-xl overflow-hidden rounded-lg bg-white">
            <input
              className="w-full px-4 py-3 text-sm outline-none"
              placeholder="Your email address..."
            />
            <button className="bg-blue-800 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-900 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>


    </div>
  );
}
