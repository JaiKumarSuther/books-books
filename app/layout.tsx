import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as per design.json
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books & Books - School Supplies Store",
  description: "One-stop shop for books, uniforms, and stationery in Pakistan.",
};

import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import AddToCartModal from "./components/AddToCartModal";
import SuccessBanner from "./components/SuccessBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen`}>
        <AuthProvider>
          <OrderProvider>
            <WishlistProvider>
              <CartProvider>
                {/* Client Side Header (includes Top Bar) */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow bg-gray-50">
                  {children}
                </main>

                {/* Footer */}
                <Footer />
                <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
                <AddToCartModal />
                <SuccessBanner />
              </CartProvider>
            </WishlistProvider>
          </OrderProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
