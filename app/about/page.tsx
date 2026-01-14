export default function About() {
    return (
        <div className="py-16 md:py-24 max-w-[1024px] mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="bg-gray-100 rounded-2xl h-[300px] flex items-center justify-center text-gray-400">
                    {/* Placeholder for Store Image */}
                    <span>Store Image Placeholder</span>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Books & Books was started with a simple idea: to make school shopping easy for parents in Pakistan. We know how hard it can be to find the right books and quality uniforms in one place. That is why we built a store where you can find everything you need for the academic year.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        From humble beginnings in 2010 to a trusted community staple, our growth has been driven by customer trust and our commitment to educational excellence.
                    </p>
                </div>
            </div>

            <div className="bg-primary-light rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl font-bold mb-4 text-primary-dark">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                    "Our mission is to support education by providing high-quality supplies at prices that Pakistani families can afford. We want to ensure that every student has the right tools to learn and grow."
                </p>
            </div>
        </div>
    );
}
