import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as per design.json
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books & Books - School Supplies Store",
  description: "One-stop shop for books, uniforms, and stationery in Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        {/* Top Bar */}
        <div className="bg-gray-50 border-b border-gray-200 text-xs py-2 px-4 text-center md:text-left text-gray-600">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">
            <span>Welcome to Books & Books - Your Education Partner</span>
            <div className="hidden md:flex gap-4">
              <span>Call us: 0300-1234567</span>
              <Link href="/contact" className="hover:text-primary">Help Center</Link>
            </div>
          </div>
        </div>

        {/* Client Side Header with Mobile Drawer */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow bg-bg-page">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-bg-footer text-white pt-12 pb-6">
          <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="relative h-12 w-40 mb-4">
                <Image
                  src="/logo.png"
                  alt="Books & Books"
                  fill
                  className="object-contain object-left invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your reliable partner for quality education supplies. We provide books, uniforms, and stationery at affordable prices.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/products/books" className="hover:text-white">School Books</Link></li>
                <li><Link href="/products/uniforms" className="hover:text-white">Uniforms</Link></li>
                <li><Link href="/products/stationery" className="hover:text-white">Stationery</Link></li>
                <li><Link href="/products/school-bags" className="hover:text-white">School Bags</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Customer Care</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/why-choose-us" className="hover:text-white">Why Choose Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Main Market Area, [City Name]</li>
                <li>0300-1234567</li>
                <li>info@booksandbooks.pk</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Books & Books. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
