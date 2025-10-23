import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { PRODUCTS } from '../constants';
import QuickViewModal from '../components/QuickViewModal';
import { Product } from '../types';

const ProductListPage: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const [sortOption, setSortOption] = useState('featured');
    
    const filteredProducts = useMemo(() => {
        let products = PRODUCTS;
        if (categoryName && categoryName !== 'all' && categoryName !== 'new') {
            products = PRODUCTS.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
        } else if (categoryName === 'new') {
            products = PRODUCTS.filter(p => p.isNew);
        }
        
        return [...products].sort((a, b) => {
             switch (sortOption) {
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'newest':
                    return b.id - a.id; // Assuming higher ID is newer
                default:
                    return 0; // 'featured' or default
            }
        });
    }, [categoryName, sortOption]);

    const title = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : 'All Products';

    const allCategories = [...new Set(PRODUCTS.map(p => p.category))];
    const allSizes = [...new Set(PRODUCTS.flatMap(p => p.sizes))];
    const allColors = [...new Set(PRODUCTS.flatMap(p => p.colors))];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-primary">{title === 'New' ? 'New Arrivals' : title}</h1>
                <p className="text-secondary mt-2">Browse our collection of high-quality products.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters */}
                <FilterSidebar
                    categories={allCategories}
                    sizes={allSizes}
                    colors={allColors}
                    onFilterChange={() => {}} 
                />

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b">
                        <span className="text-sm text-secondary">{filteredProducts.length} Products</span>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="sort" className="text-sm">Sort by:</label>
                            <select
                                id="sort"
                                value={sortOption}
                                onChange={e => setSortOption(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 text-sm focus:ring-accent focus:border-accent"
                            >
                                <option value="featured">Featured</option>
                                <option value="newest">Newest</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>
                    <div key={sortOption} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <QuickViewModal />
        </div>
    );
};

export default ProductListPage;