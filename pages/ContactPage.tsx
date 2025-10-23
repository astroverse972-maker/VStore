
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-light-gray">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
                    <p className="text-lg text-secondary mb-12">We'd love to hear from you. Whether you have a question about our products, an order, or anything else, our team is ready to answer all your questions.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
                    {/* Contact Form */}
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={5} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8">
                         <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Visit Us</h3>
                            <p className="text-secondary">123 Fashion Ave<br/>New York, NY 10001</p>
                        </div>
                         <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Call Us</h3>
                            <p className="text-secondary">(123) 456-7890</p>
                        </div>
                         <div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Email Us</h3>
                            <p className="text-secondary">support@vstore.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
