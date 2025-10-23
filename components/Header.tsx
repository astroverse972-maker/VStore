
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';
import { CATEGORIES } from '../constants';

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const HeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Header: React.FC = () => {
    const { state, cartShake } = useAppContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItemCount = state.cart.reduce((count, item) => count + item.quantity, 0);
    const wishlistItemCount = state.wishlist.length;

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors duration-300 hover:text-accent ${
        isActive ? 'text-accent' : 'text-primary'
    } after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-accent after:transform after:scale-x-0 after:transition-transform after:duration-300 ${
        isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
    }`;
    
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary hover:text-accent">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-primary tracking-wider">VStore</Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:space-x-8">
                        {CATEGORIES.map(category => (
                            <NavLink key={category.name} to={category.path} className={navLinkClasses}>
                                {category.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                            />
                            <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                         <Link to="/profile" className="relative text-primary hover:text-accent transition-colors">
                            <HeartIcon className="h-6 w-6" />
                             {wishlistItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-medium">
                                    {wishlistItemCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/profile" className="text-primary hover:text-accent transition-colors">
                            <UserIcon className="h-6 w-6" />
                        </Link>
                        <Link to="/cart" className={`relative text-primary hover:text-accent transition-colors ${cartShake ? 'animate-cart-shake' : ''}`}>
                            <ShoppingBagIcon className="h-6 w-6" />
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-white text-xs font-medium">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
             {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                 <div className="flex justify-between items-center p-4 border-b">
                     <h2 className="text-lg font-bold">Menu</h2>
                     <button onClick={() => setIsMenuOpen(false)}><CloseIcon className="h-6 w-6"/></button>
                 </div>
                 <nav className="flex flex-col p-4 space-y-4">
                    {CATEGORIES.map(category => (
                        <NavLink key={category.name} to={category.path} className={({ isActive }) => `text-lg ${isActive ? 'text-accent' : 'text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                            {category.name}
                        </NavLink>
                    ))}
                 </nav>
            </div>
        </header>
    );
};

export default Header;
