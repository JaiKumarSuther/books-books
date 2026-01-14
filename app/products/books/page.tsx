export default function BooksPage() {
    return (
        <div className="py-12 max-w-[1280px] mx-auto px-4">
            {/* Header with Image */}
            <div className="relative h-[300px] bg-gray-100 rounded-3xl overflow-hidden mb-12 flex items-end p-8">
                {/* <img src="/product_books.png" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="relative z-10 text-white">
                    <span className="bg-primary px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Category</span>
                    <h1 className="text-4xl md:text-5xl font-bold">School & Academic Books</h1>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-primary-light text-primary rounded-lg flex items-center justify-center text-xl">📖</div>
                        <h2 className="text-2xl font-bold text-gray-900">Curriculum Books</h2>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We stock complete course sets for all major educational boards in Pakistan. We ensure the latest editions are always available.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">Pre-School:</span>
                            <span className="text-gray-700">Montessori, KG-1, KG-2 (Oxford, PTB, Afaq Sun Series)</span>
                        </li>
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">Primary:</span>
                            <span className="text-gray-700">Class 1 to 5 (All subjects including Islamiyat and Nazra)</span>
                        </li>
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">Middle:</span>
                            <span className="text-gray-700">Class 6 to 8 (Science, History, Geography, Computer Science)</span>
                        </li>
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">Matric:</span>
                            <span className="text-gray-700">Class 9 and 10 (Science and Arts Groups) - Punjab Text Board</span>
                        </li>
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">Inter:</span>
                            <span className="text-gray-700">F.Sc (Pre-Medical, Pre-Eng), I.C.S, I.Com, F.A</span>
                        </li>
                        <li className="flex gap-3 items-start p-4 bg-gray-50 rounded-lg">
                            <span className="font-bold text-primary whitespace-nowrap">O/A Levels:</span>
                            <span className="text-gray-700">Cambridge curriculum books (Redspot past papers, manuals, and text books)</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-accent-light text-accent rounded-lg flex items-center justify-center text-xl">📕</div>
                        <h2 className="text-2xl font-bold text-gray-900">General Reading</h2>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Expand your knowledge beyond the classroom with our wide selection of reference materials and literature.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-accent transition-colors">
                            <h3 className="font-bold text-lg mb-2">Dictionaries</h3>
                            <p className="text-sm text-gray-500">Urdu to English, English to English (Oxford, Ferozsons)</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-accent transition-colors">
                            <h3 className="font-bold text-lg mb-2">Islamic Books</h3>
                            <p className="text-sm text-gray-500">Quran with translation, Hadith books, Seerat-un-Nabi</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-accent transition-colors">
                            <h3 className="font-bold text-lg mb-2">Children's Books</h3>
                            <p className="text-sm text-gray-500">Story books, coloring books, activity books, Urdu stories</p>
                        </div>
                        <div className="border border-gray-200 p-6 rounded-xl hover:border-accent transition-colors">
                            <h3 className="font-bold text-lg mb-2">Novels</h3>
                            <p className="text-sm text-gray-500">Classic and contemporary Urdu and English novels</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
