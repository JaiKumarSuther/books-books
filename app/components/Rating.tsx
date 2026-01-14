import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
    value?: number;
}

export default function Rating({ value = 4 }: RatingProps) {
    return (
        <div className="flex items-center gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < value ? "fill-amber-500" : "text-gray-300"} />
            ))}
        </div>
    );
}
