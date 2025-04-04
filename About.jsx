import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-white">About This Application</h1>
      <p className="mt-4 text-lg text-white max-w-lg text-center">
        This application is designed to help users manage their tasks efficiently.
      </p>

      <Link 
        to="/dashboard" 
        className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold no-underline shadow-md hover:bg-gray-200 hover:text-blue-700 transition-all duration-300"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

export default About;
