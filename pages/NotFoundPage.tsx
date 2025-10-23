
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] text-center px-4">
            <div>
                <h1 className="text-9xl font-extrabold text-primary tracking-widest">404</h1>
                <div className="bg-accent px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <p className="mt-4 text-lg text-secondary">
                    Oops! The page you’re looking for doesn’t exist.
                </p>
                <Link 
                    to="/" 
                    className="mt-6 inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-secondary transition-colors"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
