"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="py-12 md:py-20 max-w-[1024px] mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                <p className="text-gray-600 max-w-lg mx-auto">
                    We are here to assist you. Reach out to us for any queries regarding books, uniforms, or school supplies.
                </p>
            </div>

            <div className="grid md:grid-cols-12 gap-12">
                {/* Contact Info Column */}
                <div className="md:col-span-5 space-y-8">
                    <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">Contact Information</h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Books & Books Store<br />
                                    Main Market Area, [City Name],<br />
                                    Pakistan.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                                <p className="text-sm text-gray-600">0300-1234567</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                                <p className="text-sm text-gray-600">info@booksandbooks.pk</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                <Clock size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                                <p className="text-sm text-gray-600">Mon - Sat: 10:00 AM - 9:00 PM</p>
                                <p className="text-sm text-gray-500">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="0300-XXXXXXX"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm">
                                <option>General Inquiry</option>
                                <option>Order Status</option>
                                <option>Product Availability</option>
                                <option>Complaint</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows={5}
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
