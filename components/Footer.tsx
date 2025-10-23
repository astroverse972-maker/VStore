
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About VStore */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">VStore</h3>
                        <p className="text-sm text-gray-400">
                            Modern fashion for the modern individual. We believe in quality, style, and a seamless shopping experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="/profile" className="text-gray-400 hover:text-white transition-colors">My Account</Link></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    
                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
                        <p className="text-sm text-gray-400 mb-4">Get exclusive deals and updates straight to your inbox.</p>
                        <form className="flex">
                            <input 
                                type="email" 
                                placeholder="Your email"
                                className="w-full px-4 py-2 text-gray-800 bg-white border border-transparent rounded-l-md focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button type="submit" className="px-4 py-2 bg-accent text-white font-semibold rounded-r-md hover:bg-blue-600 transition-colors">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} VStore. All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* Social Icons would go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
