
import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
    const { state, dispatch } = useAppContext();
    const navigate = useNavigate();
    const { cart } = state;
    
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 50 ? 0 : 10;
    const taxes = subtotal * 0.08;
    const total = subtotal + shipping + taxes;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would process the payment
        alert('Thank you for your order! (This is a demo)');
        dispatch({type: 'CLEAR_CART'});
        navigate('/');
    };
    
    if (cart.length === 0) {
        return (
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
                <p className="text-secondary mb-8">You can't check out without any items!</p>
            </div>
        )
    }

    return (
        <div className="bg-light-gray min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-primary mb-8 text-center">Checkout</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Shipping and Payment */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md space-y-8">
                        {/* Shipping Information */}
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-4">Shipping Information</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="firstName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="lastName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                    <input type="text" id="address" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                    <input type="text" id="city" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                 <div>
                                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                                    <input type="text" id="state" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                <div>
                                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
                                    <input type="text" id="zip" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                            </div>
                        </section>

                        {/* Payment Details */}
                        <section>
                            <h2 className="text-xl font-bold text-primary mb-4">Payment Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                    <input type="text" id="cardNumber" placeholder="•••• •••• •••• ••••" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                        <input type="text" id="expiryDate" placeholder="MM / YY" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                        <input type="text" id="cvc" placeholder="•••" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-8 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-bold text-primary mb-6 border-b pb-4">Order Summary</h2>
                        <div className="space-y-2 mb-6 max-h-60 overflow-y-auto">
                            {cart.map(item => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex justify-between items-start text-sm">
                                    <div className="flex-grow pr-2">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 border-t pt-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                             <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>
                             <div className="flex justify-between text-sm">
                                <span>Taxes</span>
                                <span>${taxes.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-4 mt-4 flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                         <button type="submit" className="mt-6 w-full bg-accent text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center">
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
