import React from "react";

interface PriceProps {
    value: string | number;
    old?: string | number;
}

export default function Price({ value, old }: PriceProps) {
    return (
        <div className="flex items-end gap-2">
            <span className="text-lg font-bold text-gray-900">Rs {value}</span>
            {old ? <span className="text-sm text-gray-400 line-through">Rs {old}</span> : null}
        </div>
    );
}
