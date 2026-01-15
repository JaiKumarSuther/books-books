import Link from "next/link";
import React from "react";

interface MiniBannerProps {
    title: string;
    subtitle: string;
    color?: string; // e.g. "bg-purple-100"
    textColor?: string; // e.g. "text-purple-800"
    buttonColor?: string; // e.g. "bg-purple-600"
    badge?: string;
    href?: string;
    image?: string;
}

export default function MiniBanner({
    title,
    subtitle,
    color = "bg-gray-100",
    textColor = "text-gray-800",
    buttonColor = "bg-gray-800",
    badge,
    href = "/products",
    image
}: MiniBannerProps) {
    return (
        <div className={`relative overflow-hidden rounded-xl border border-gray-100 p-6 sm:p-8 ${color}`}>
            {/* Background Decor */}
            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-10 mix-blend-multiply bg-[url('/grid-pattern.svg')]"></div>

            <div className="relative z-10 flex flex-col items-start justify-center h-full">
                {badge && (
                    <span className={`rounded-md px-2 py-1 text-[10px] font-bold text-white mb-3 ${buttonColor}`}>
                        {badge}
                    </span>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${textColor}`}>
                    {title}
                </h3>

                <p className={`text-sm mb-6 max-w-[200px] ${textColor} opacity-80`}>
                    {subtitle}
                </p>

                <Link
                    href={href}
                    className={`px-6 py-2 rounded-full text-xs font-bold text-white shadow-md hover:shadow-lg transition-transform hover:scale-105 active:scale-95 ${buttonColor}`}
                >
                    SHOP NOW
                </Link>
            </div>

            {/* Image Placeholder - simulating a product shot on the right */}
            {/* Image Placeholder - simulating a product shot on the right */}
            <div className="absolute right-4 bottom-4 w-32 h-32 bg-white/40 rounded-full backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                ) : (
                    <div className={`w-24 h-24 rounded-full opacity-20 ${buttonColor}`}></div>
                )}
            </div>
        </div>
    );
}
