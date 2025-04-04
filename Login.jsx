import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5174/login', { email, password });
            console.log(response.data);
            
            // Redirect to dashboard or another page after successful login
            navigate('/dashboard'); // Change to your desired route
        } catch (error) {
            console.error('Login error', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="bg-black p-8 rounded-2xl shadow-2xl w-96 transform transition duration-500 hover:scale-105 hover:shadow-3xl">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-800 text-white"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-gray-800 text-white"
                    />
                    <button 
                        type="submit" 
                        className="w-full p-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 shadow-md"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <Link to="/registrationpage" className="text-blue-400 hover:underline">Don't have an account? Register here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
