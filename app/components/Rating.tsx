import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
    value?: number;
}

export default function Rating({ value = 4 }: RatingProps) {
    return (
        <div className="flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < value ? "fill-primary" : "text-gray-300"} />
            ))}
        </div>
    );
}
