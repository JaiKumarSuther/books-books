import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <div className="py-16 md:py-24 max-w-[1280px] mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                <p className="text-xl text-gray-600">We are here to help you get ready for school.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Contact Info Section */}
                <div className="p-10 md:p-16 bg-primary text-white">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-primary-light text-lg mb-12">
                        Have a question about a book stock or need to check uniform sizes? Visit us or contact us today!
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-white opacity-80" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                                <p className="text-primary-light">Books & Books Store<br />Main Market Area, [City Name], Pakistan.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-white opacity-80" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                                <p className="text-primary-light">0300-1234567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-white opacity-80" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                                <p className="text-primary-light">info@booksandbooks.pk</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-white opacity-80" size={24} />
                            <div>
                                <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
                                <p className="text-primary-light">Mon - Sat: 10:00 AM - 9:00 PM<br />Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder or simple message */}
                <div className="p-10 md:p-16 bg-white flex flex-col justify-center items-center text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                        <MessageCircle size={48} className="text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Assistance?</h3>
                    <p className="text-gray-600 mb-8">
                        You can also reach us via WhatsApp for quick stock inquiries and order placements.
                    </p>
                    <button className="bg-success hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors w-full max-w-sm">
                        Chat on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
