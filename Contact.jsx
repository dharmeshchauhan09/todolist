import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-600 transition-colors duration-500">
      <h1 className="text-4xl font-bold text-white">Contact Us</h1>

      <p className="mt-2 text-lg text-white">You can contact us via email at <strong>support@example.com</strong>.</p>

      <Link 
        to="/dashboard" 
        className="mt-4 bg-white text-yellow-700 px-6 py-3 rounded-lg font-semibold no-underline shadow-md hover:bg-yellow-700 hover:text-white transition-all duration-300"
      >
        Go to Dashboard
      </Link>
      
    </div>
  );
}

export default Contact;
