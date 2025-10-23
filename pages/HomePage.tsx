import React, { useRef } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import QuickViewModal from '../components/QuickViewModal';
import { Link } from 'react-router-dom';
import { useOnScreen } from '../hooks/useOnScreen';

const HomePage: React.FC = () => {
    const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);
    const topRated = [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 4);

    const arrivalsRef = useRef<HTMLElement>(null);
    const topRatedRef = useRef<HTMLElement>(null);
    const categoriesRef = useRef<HTMLElement>(null);

    const isArrivalsVisible = useOnScreen(arrivalsRef, '-100px');
    const isTopRatedVisible = useOnScreen(topRatedRef, '-100px');
    const isCategoriesVisible = useOnScreen(categoriesRef, '-100px');

    return (
        <div>
            <HeroBanner />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* New Arrivals Section */}
                <section ref={arrivalsRef} className={`transition-all duration-700 ease-out ${isArrivalsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-primary">New Arrivals</h2>
                        <Link to="/category/new" className="text-accent font-semibold hover:underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newArrivals.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Top Rated Section */}
                <section ref={topRatedRef} className={`mt-16 transition-all duration-700 ease-out delay-200 ${isTopRatedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-primary">Top Rated Products</h2>
                         <Link to="/category/all" className="text-accent font-semibold hover:underline">View All</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                         {topRated.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                {/* Categories Section */}
                <section ref={categoriesRef} className={`mt-16 transition-all duration-700 ease-out delay-200 ${isCategoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                     <h2 className="text-3xl font-bold text-center text-primary mb-8">Shop by Category</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/category/men" className="relative group block rounded-lg overflow-hidden">
                             <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_600/v1761212484/category-men_jtabmx.png" alt="Men's Fashion" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" width="600" height="800"/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Men</h3>
                             </div>
                        </Link>
                        <Link to="/category/women" className="relative group block rounded-lg overflow-hidden">
                             <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_600/v1761212695/category-women_rewjzn.png" alt="Women's Fashion" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" width="600" height="800"/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Women</h3>
                             </div>
                        </Link>
                         <Link to="/category/accessories" className="relative group block rounded-lg overflow-hidden">
                             <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_600/v1761212643/category-accessories-mockup_tbvjh6.png" alt="Accessories" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" width="600" height="800"/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Accessories</h3>
                             </div>
                        </Link>
                         <Link to="/category/shoes" className="relative group block rounded-lg overflow-hidden">
                             <img src="https://res.cloudinary.com/dubg7bfmv/image/upload/q_auto,f_auto,w_600/v1761212641/category-shoe-mockup_am22mr.png" alt="Shoes" className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" width="600" height="800"/>
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold">Shoes</h3>
                             </div>
                        </Link>
                     </div>
                </section>

            </div>
            <QuickViewModal />
        </div>
    );
};

export default HomePage;