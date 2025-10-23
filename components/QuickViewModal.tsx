
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useAppContext } from '../hooks/useAppContext';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const QuickViewModal: React.FC = () => {
    const { quickViewProduct, closeQuickView, dispatch, triggerCartAnimation } = useAppContext();
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (quickViewProduct) {
            setSelectedColor(quickViewProduct.colors[0]);
            setSelectedSize(quickViewProduct.sizes[0]);
            setQuantity(1);
        }
    }, [quickViewProduct]);

    if (!quickViewProduct) return null;

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
          alert('Please select a color and size.');
          return;
        }
        dispatch({
          type: 'ADD_TO_CART',
          payload: { ...quickViewProduct, quantity, selectedColor, selectedSize },
        });
        triggerCartAnimation();
        closeQuickView();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={closeQuickView}>
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-slide-in" onClick={e => e.stopPropagation()}>
                <button onClick={closeQuickView} className="absolute top-4 right-4 text-gray-500 hover:text-black z-10">
                    <CloseIcon className="h-6 w-6" />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4">
                        <img src={quickViewProduct.images[0]} alt={quickViewProduct.name} className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    <div className="p-8 flex flex-col">
                        <h2 className="text-2xl font-bold text-primary">{quickViewProduct.name}</h2>
                        <div className="flex items-center my-2">
                            <StarRating rating={quickViewProduct.rating} />
                            <span className="ml-2 text-sm text-gray-500">({quickViewProduct.reviews} reviews)</span>
                        </div>
                        <p className="text-2xl font-bold text-primary my-4">
                            ${quickViewProduct.price.toFixed(2)}
                            {quickViewProduct.originalPrice && <span className="ml-2 text-base text-gray-500 line-through">${quickViewProduct.originalPrice.toFixed(2)}</span>}
                        </p>
                        <p className="text-secondary text-sm leading-relaxed mb-6">{quickViewProduct.description}</p>
                        
                        {/* Color Selector */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-primary mb-2">Color: <span className="font-semibold">{selectedColor}</span></h3>
                            <div className="flex flex-wrap gap-2">
                                {quickViewProduct.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`h-8 w-8 rounded-full border-2 transition ${selectedColor === color ? 'border-accent scale-110' : 'border-gray-200'}`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-primary mb-2">Size: <span className="font-semibold">{selectedSize}</span></h3>
                            <div className="flex flex-wrap gap-2">
                                {quickViewProduct.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-3 py-1 border rounded-md text-sm transition-colors ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-white hover:border-primary'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-auto pt-6 border-t">
                             <div className="flex items-center space-x-4 mb-6">
                                <h3 className="text-sm font-medium text-primary">Quantity:</h3>
                                <div className="flex items-center border rounded-md">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 text-lg">-</button>
                                    <span className="px-4 py-1 text-md font-semibold">{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 text-lg">+</button>
                                </div>
                            </div>
                            <button onClick={handleAddToCart} className="w-full bg-accent text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-colors">Add to Cart</button>
                            <Link to={`/product/${quickViewProduct.id}`} onClick={closeQuickView} className="block text-center mt-2 text-sm text-accent hover:underline">View Full Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
