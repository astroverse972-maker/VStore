import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useAppContext } from '../hooks/useAppContext';
import StarRating from './StarRating';

interface ProductCardProps {
  product: Product;
}

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement> & { isFavorite?: boolean }> = ({ isFavorite, ...props }) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
         className={`h-6 w-6 transition-all duration-300 ${isFavorite ? 'fill-red-500 stroke-red-500' : 'fill-none'}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch, openQuickView } = useAppContext();
  const isWishlisted = state.wishlist.includes(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product.id });
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform">
        <Link to={`/product/${product.id}`} className="block">
            <div className="aspect-square w-full bg-gray-200 overflow-hidden relative">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
                    loading="lazy"
                    width="800"
                    height="800"
                />
                <img
                    src={product.images.length > 1 ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-center object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                    width="800"
                    height="800"
                />
            </div>
            
            <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && <span className="bg-white text-accent text-xs font-semibold px-2 py-1 rounded-full shadow">NEW</span>}
                {product.onSale && <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow">SALE</span>}
            </div>

            <div className="p-4 bg-white">
                <h3 className="text-sm font-medium text-primary truncate">{product.name}</h3>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-lg font-semibold text-primary">
                        ${product.price.toFixed(2)}
                        {product.originalPrice && <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>}
                    </p>
                    <div className="flex items-center">
                        <StarRating rating={product.rating} />
                    </div>
                </div>
            </div>
        </Link>
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <button onClick={handleWishlistToggle} className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-red-500 transition-colors">
                <HeartIcon isFavorite={isWishlisted} />
            </button>
            <button onClick={handleQuickView} className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-accent transition-colors">
                <EyeIcon className="h-6 w-6" />
            </button>
        </div>
    </div>
  );
};

export default ProductCard;