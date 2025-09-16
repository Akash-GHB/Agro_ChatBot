import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    onSignUp({ username, password });
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-green-300 to-green-600 p-4">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Join <span className="text-green-600">Krishi Sahayi</span>
        </h2>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              placeholder="Create a username"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              placeholder="Create a password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/" className="text-green-600 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;