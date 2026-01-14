export default function FAQ() {
    return (
        <div className="py-16 md:py-24 max-w-[800px] mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
            </div>

            <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="text-primary">Q:</span> Do you offer home delivery?
                    </h3>
                    <p className="text-gray-600 pl-8 leading-relaxed">
                        A: Yes, we offer home delivery within [City Name] for orders above Rs. 2000. Please contact us on WhatsApp to place your order.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="text-primary">Q:</span> Do you buy old books?
                    </h3>
                    <p className="text-gray-600 pl-8 leading-relaxed">
                        A: Yes, we have a specific section for buying and selling second-hand course books. Please bring them to the store for evaluation. They must be in usable condition.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="text-primary">Q:</span> Can I order by phone?
                    </h3>
                    <p className="text-gray-600 pl-8 leading-relaxed">
                        A: Yes, you can WhatsApp your class list and items required to our number (0300-1234567) and we will prepare your package for pickup or delivery.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                        <span className="text-primary">Q:</span> What is your return policy?
                    </h3>
                    <p className="text-gray-600 pl-8 leading-relaxed">
                        A: We offer a 7-day exchange policy for books (if unused and condition is new) and uniforms (for size issues). Original receipt is required.
                    </p>
                </div>
            </div>
        </div>
    );
}
