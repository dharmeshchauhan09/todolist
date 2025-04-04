import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-500 transition-colors duration-500">
            <h1 className="text-4xl font-bold text-white">Welcome to the Home Page</h1>
            <p className="mt-4 text-lg text-white">This is the home page of the application.</p>
            <Link 
                to="/dashboard" 
                className="mt-4 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold no-underline shadow-md hover:bg-gray-200 hover:text-red-700 transition-all duration-300"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default Home;
