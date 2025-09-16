import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ users }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      alert('Login successful!');
      navigate('/ask-query');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-green-300 to-green-600 p-4">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Welcome to <span className="text-green-600">Krishi Sahayi</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your agricultural companion. Please log in to continue.
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="Enter your username"
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
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          New user?{' '}
          <Link to="/signup" className="text-green-600 hover:underline font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;