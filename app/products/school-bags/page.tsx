export default function SchoolBagsPage() {
    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4">
            {/* Header with Image */}
            <div className="relative h-[300px] bg-gray-100 rounded-3xl overflow-hidden mb-12 flex items-end p-8">
                {/* <img src="/product_bags.png" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold">School Bags</h1>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-3xl">🎒</span> Backpacks
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        We understand that school bags need to be tough. Our collection features reinforced stitching and high-quality zippers to withstand daily use.
                    </p>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Character Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Spiderman, Frozen, Ben10, Barbie, and other popular characters for junior classes.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Solid Colors</h3>
                            <p className="text-sm text-gray-600 mt-1">Durable parachute bags used by senior students for their reliability.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Laptop Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Padded bags suitable for college and university students carrying laptops.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <h3 className="font-bold text-gray-900">Trolley Bags</h3>
                            <p className="text-sm text-gray-600 mt-1">Easy-to-pull trolley bags to reduce the burden on shoulders.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span className="text-3xl">🥪</span> Lunch & Water
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl mb-4">🍱</div>
                            <h3 className="font-bold text-gray-900 mb-2">Lunch Boxes</h3>
                            <p className="text-sm text-gray-600">BPA free plastic boxes and insulated hot-pots to keep food warm and fresh.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4">💧</div>
                            <h3 className="font-bold text-gray-900 mb-2">Water Bottles</h3>
                            <p className="text-sm text-gray-600">Steel flasks (keep hot/cold for hours) and durable plastic sports bottles.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
