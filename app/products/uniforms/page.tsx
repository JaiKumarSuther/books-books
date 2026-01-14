import { User, Baby, Snowflake } from "lucide-react";

export default function UniformsPage() {
    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4">
            {/* Header with Image */}
            <div className="relative h-[300px] bg-gray-100 rounded-3xl overflow-hidden mb-12 flex items-end p-8">
                {/* <img src="/product_uniforms.png" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold">School Uniforms</h1>
                </div>
            </div>

            <div className="mb-16 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">High Quality Fabrics</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    We use premium mixed cotton and wash-and-wear fabrics that are breathable for summer and warm for winter. Our stitching is double-locked to ensure durability for active students who need their uniforms to last the entire academic year.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Boys Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <User size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">For Boys</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Shirts: White and Blue (Half/Full sleeves)</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Pants: Khaki, Grey, and Blue (Formal cut)</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Shoes: Black school shoes (Bata, Service)</li>
                    </ul>
                </div>

                {/* Girls Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mb-4">
                        <Baby size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">For Girls</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Shirts/Kameez: White with colored sashes</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Shalwars: White cotton shalwars</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Dupattas: White & house colors</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Shoes: Black pumps & joggers</li>
                    </ul>
                </div>

                {/* Winter Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mb-4">
                        <Snowflake size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Winter Wear</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Sweaters: V-neck (Blue, Black, Maroon)</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Blazers: Monogrammed blazers</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-1">●</span> Hoodies: Casual school hoodies</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
