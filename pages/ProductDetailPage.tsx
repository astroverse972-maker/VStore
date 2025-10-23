import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import StarRating from '../components/StarRating';
import { useAppContext } from '../hooks/useAppContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { dispatch, triggerCartAnimation } = useAppContext();
  const product = PRODUCTS.find(p => p.id === parseInt(productId || ''));

  const [mainImage, setMainImage] = useState(product?.images[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }
  
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity, selectedColor, selectedSize } });
    triggerCartAnimation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div>
            <div className="aspect-square mb-4">
                <img src={mainImage} alt={product.name} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
            <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                    <button key={index} onClick={() => setMainImage(img)} className={`rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-accent' : 'border-transparent'}`}>
                        <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" loading="lazy" width="200" height="200" />
                    </button>
                ))}
            </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">{product.name}</h1>
          <div className="flex items-center my-4">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-sm text-gray-500 hover:underline cursor-pointer">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-primary my-4">
            ${product.price.toFixed(2)}
            {product.originalPrice && <span className="ml-3 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>}
          </p>
          <p className="text-secondary leading-relaxed mb-6">{product.description}</p>
          
          {/* Color Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-primary mb-2">Color: <span className="font-semibold">{selectedColor}</span></h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-8 w-8 rounded-full border-2 transition transform hover:scale-110 ${selectedColor === color ? 'border-accent scale-110' : 'border-gray-200'}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>
          
          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-primary mb-2">Size: <span className="font-semibold">{selectedSize}</span></h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md text-sm transition-colors ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-white hover:border-primary'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4 mb-6">
            <h3 className="text-sm font-medium text-primary">Quantity:</h3>
            <div className="flex items-center border rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="px-4 py-2 text-lg font-semibold text-secondary hover:bg-gray-100 rounded-l-md">-</button>
                <span className="px-5 py-2 text-md font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-lg font-semibold text-secondary hover:bg-gray-100 rounded-r-md">+</button>
            </div>
          </div>
          
          <button
              onClick={handleAddToCart}
              disabled={addedToCart}
              className={`w-full font-semibold py-3 rounded-md transition-all duration-300 flex items-center justify-center text-white ${addedToCart ? 'bg-green-500' : 'bg-accent hover:bg-blue-600'}`}
          >
              {addedToCart ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Added!
                </>
              ) : 'Add to Cart' }
          </button>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-20">
         <h2 className="text-2xl font-bold text-primary text-center mb-8">You Might Also Like</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {relatedProducts.map(p => (
                 <ProductCard key={p.id} product={p} />
             ))}
         </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;