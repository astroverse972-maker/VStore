
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Link } from 'react-router-dom';

const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);


const CartPage: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const { cart } = state;

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const taxes = subtotal * 0.08;
    const total = subtotal + shipping + taxes;
    
    const handleQuantityChange = (id: number, selectedSize: string, selectedColor: string, quantity: number) => {
        dispatch({type: 'UPDATE_QUANTITY', payload: {id, selectedSize, selectedColor, quantity}});
    };
    
    const handleRemoveItem = (id: number, selectedSize: string, selectedColor: string) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: {id, selectedSize, selectedColor}});
    };

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
                <p className="text-secondary mb-8">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="bg-accent text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
                    Continue Shopping
                </Link>
            </div>
        );
    }
    
    return (
        <div className="bg-light-gray min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">Shopping Cart</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md space-y-6">
                       {cart.map(item => (
                           <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-6 last:border-b-0">
                               <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                               <div className="flex-grow text-center sm:text-left">
                                   <Link to={`/product/${item.id}`} className="text-lg font-semibold text-primary hover:text-accent">{item.name}</Link>
                                   <p className="text-sm text-secondary">Color: {item.selectedColor}</p>
                                   <p className="text-sm text-secondary">Size: {item.selectedSize}</p>
                               </div>
                               <div className="flex items-center border rounded-md">
                                    <button onClick={() => handleQuantityChange(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)} className="px-3 py-1 text-lg font-semibold">-</button>
                                    <span className="px-4 py-1 text-md font-semibold">{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)} className="px-3 py-1 text-lg font-semibold">+</button>
                                </div>
                               <p className="font-semibold text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                               <button onClick={() => handleRemoveItem(item.id, item.selectedSize, item.selectedColor)} className="text-gray-500 hover:text-red-600 transition-colors">
                                   <TrashIcon className="h-6 w-6"/>
                               </button>
                           </div>
                       ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-bold text-primary mb-6 border-b pb-4">Order Summary</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                             <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                             <div className="flex justify-between">
                                <span>Taxes</span>
                                <span>${taxes.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <Link to="/checkout" className="mt-6 w-full bg-accent text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
