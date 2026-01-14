"use client";

import Link from "next/link";
import { BookOpen, Shirt, Pencil, Backpack } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="z-10"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your One-Stop Shop for <span className="text-primary">School & Office</span> Supplies
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Providing quality books, uniforms, and stationery to students and professionals across Pakistan.
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Browse Our Products
            </Link>
          </motion.div>
          <motion.div
            className="relative h-[300px] md:h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Placeholder for Hero Image */}
            <span className="text-gray-400 font-medium">Hero Image Placeholder</span>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-[1024px] mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Books & Books! We are a dedicated retail store providing everything your child needs for school. From textbooks to uniforms, we have it all under one roof. We believe in quality, affordability, and helping every student succeed.
          </p>
        </motion.div>
      </section>

      {/* What We Sell Grid */}
      <section className="py-20 bg-bg-section">
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Sell
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp}>
              <Link href="/products/books" className="group block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all h-full">
                <div className="w-14 h-14 bg-primary-light text-primary rounded-lg flex items-center justify-center mb-6">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">School Books</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Course books for all classes and boards. From Montessori to A-Levels.
                </p>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp}>
              <Link href="/products/uniforms" className="group block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all h-full">
                <div className="w-14 h-14 bg-primary-light text-primary rounded-lg flex items-center justify-center mb-6">
                  <Shirt size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Uniforms</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High-quality, comfortable uniforms for local schools. Stitched to perfection.
                </p>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp}>
              <Link href="/products/stationery" className="group block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all h-full">
                <div className="w-14 h-14 bg-primary-light text-primary rounded-lg flex items-center justify-center mb-6">
                  <Pencil size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Stationery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pens, notebooks, registers, and art supplies for all your writing needs.
                </p>
              </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeInUp}>
              <Link href="/products/school-bags" className="group block bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all h-full">
                <div className="w-14 h-14 bg-primary-light text-primary rounded-lg flex items-center justify-center mb-6">
                  <Backpack size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">School Bags</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Durable and stylish bags for all ages. Strong zippers and ample space.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
