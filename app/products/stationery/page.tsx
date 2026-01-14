export default function StationeryPage() {
    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4">
            {/* Header with Image */}
            <div className="relative h-[300px] bg-gray-100 rounded-3xl overflow-hidden mb-12 flex items-end p-8">
                {/* <img src="/product_stationery.png" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold">Stationery & Art Supplies</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center text-3xl">🖊️</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Writing Instruments</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Ballpoints: Piano, Dollar, Reynolds</li>
                            <li>• Pencils: Oro, Goldfish, Deer (HB, 2B)</li>
                            <li>• Gel Pens: Uniball, Signo, Sarasa</li>
                            <li>• Markers: Calligraphy & Whiteboard</li>
                        </ul>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-3xl">📝</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Paper Products</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Notebooks: Broad, Narrow, Four line</li>
                            <li>• Registers: Neat & Rough binding</li>
                            <li>• Practical Notebooks: Science subjects</li>
                            <li>• Diaries: School homework diaries</li>
                        </ul>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-3xl">🎨</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Art & Craft</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Colors: Pencils, Crayons, Paints</li>
                            <li>• Craft Paper: Glazed, Crepe, Foam</li>
                            <li>• Adhesives: UHU, Glue sticks, Tape</li>
                        </ul>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center text-3xl">📐</div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Geometry & Math</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Geometry boxes (Dux, Dollar)</li>
                            <li>• Scientific Calculators (Casio)</li>
                            <li>• Scales, rulers, protractors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
