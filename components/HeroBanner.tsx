import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://picsum.photos/id/177/1920/800"
                    alt="Stylish woman walking in the city"
                    fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    Style That Defines You
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                    Discover our latest collection of curated fashion. Premium quality, modern designs, and unbeatable comfort.
                </p>
                <div className="mt-8">
                    <Link
                        to="/category/new"
                        className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
                    >
                        Shop New Arrivals
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;