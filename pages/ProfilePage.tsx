
import React, { useState } from 'react';
import { MOCK_ORDERS } from '../constants';
import { useAppContext } from '../hooks/useAppContext';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('orders');
    const { state } = useAppContext();
    const wishlistedProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));

    const renderContent = () => {
        switch (activeTab) {
            case 'orders':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-primary">Order History</h2>
                        {MOCK_ORDERS.map(order => (
                            <div key={order.id} className="bg-white p-6 rounded-lg border">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="font-bold">Order #{order.id}</p>
                                        <p className="text-sm text-secondary">Date: {order.date}</p>
                                    </div>
                                    <div>
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>{order.status}</span>
                                    </div>
                                </div>
                                <div className="space-y-2 border-t pt-4">
                                     {order.items.map(item => (
                                         <div key={item.id} className="flex items-center justify-between text-sm">
                                             <div className="flex items-center">
                                                 <img src={item.images[0]} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-4"/>
                                                 <span>{item.name} (x{item.quantity})</span>
                                             </div>
                                             <span>${(item.price * item.quantity).toFixed(2)}</span>
                                         </div>
                                     ))}
                                </div>
                                <div className="text-right font-bold mt-4">Total: ${order.total.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                );
            case 'wishlist':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">Your Wishlist</h2>
                        {wishlistedProducts.length > 0 ? (
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {wishlistedProducts.map(product => <ProductCard key={product.id} product={product} />)}
                             </div>
                        ) : (
                            <p>You haven't added any items to your wishlist yet.</p>
                        )}
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">Account Settings</h2>
                        <form className="space-y-4 bg-white p-6 rounded-lg border">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium">First Name</label>
                                    <input type="text" defaultValue="John" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium">Last Name</label>
                                    <input type="text" defaultValue="Doe" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email Address</label>
                                <input type="email" defaultValue="john.doe@example.com" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"/>
                            </div>
                            <div>
                                <button type="submit" className="bg-accent text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600">Save Changes</button>
                            </div>
                        </form>
                    </div>
                );
            default:
                return null;
        }
    };
    
    const tabClasses = (tabName: string) => `px-4 py-2 font-semibold rounded-md transition-colors text-sm ${
        activeTab === tabName ? 'bg-primary text-white' : 'hover:bg-gray-200'
    }`;


    return (
        <div className="bg-light-gray min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-primary mb-8">My Account</h1>
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="md:w-1/4">
                        <nav className="flex flex-row md:flex-col bg-white p-4 rounded-lg border space-x-2 md:space-x-0 md:space-y-2">
                           <button onClick={() => setActiveTab('orders')} className={tabClasses('orders')}>Order History</button>
                           <button onClick={() => setActiveTab('wishlist')} className={tabClasses('wishlist')}>Wishlist</button>
                           <button onClick={() => setActiveTab('settings')} className={tabClasses('settings')}>Settings</button>
                        </nav>
                    </aside>
                    <main className="flex-1">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
