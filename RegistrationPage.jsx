import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegistrationPage() {
  const [username, setUsername] = useState(''); // New state for username
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();

  const checkPasswordStrength = (password) => {
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    setPasswordStrength(strongPasswordRegex.test(password) ? 'Strong' : 'Weak');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(null);
    
    if (password !== passwordConfirm) {
      setMessage('Passwords do not match');
      setIsSuccess(false);
      return;
    }
    try {
      await axios.post('http://localhost:5174/RegistrationPage', { username, email, password });
      setMessage('Registration successful! Redirecting...');
      setIsSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      console.error('Registration error:', error.response.data); // Log the error responsexxxxxxxxxxxzxc
      setMessage('Registration failed. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-96">
        <h1 className="text-4xl font-extrabold text-center text-white mb-6">Register</h1>
        {message && (
          <p className={`text-center text-lg font-medium mb-4 ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength(e.target.value);
            }} 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            value={passwordConfirm} 
            onChange={(e) => setPasswordConfirm(e.target.value)} 
            required 
            className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-sm"
          />
          <div className={`text-sm font-semibold text-center ${passwordStrength === 'Strong' ? 'text-green-400' : 'text-red-400'}`}>
            Password Strength: {passwordStrength}
          </div>
          <button 
            type="submit" 
            className="w-full p-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationPage;
