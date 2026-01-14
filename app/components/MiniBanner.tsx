import React from "react";

interface MiniBannerProps {
    title: string;
    subtitle: string;
    badge: string;
}

export default function MiniBanner({ title, subtitle, badge }: MiniBannerProps) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <div className="inline-flex items-center gap-2">
                        <span className="rounded-md bg-blue-600 px-2 py-1 text-[11px] font-semibold text-white">
                            {badge}
                        </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-gray-900">{title}</p>
                    <p className="mt-1 text-xs text-gray-500">{subtitle}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-gray-100" />
            </div>
        </div>
    );
}
