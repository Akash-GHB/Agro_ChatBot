import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStore } from '../../stores/useUserStore'; // <-- Corrected path
import { Loader } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { login, loading, error, user } = useUserStore();

    useEffect(() => {
        console.log('User state changed:', user);
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        await login(formData);
        // Do NOT navigate here, let useEffect handle it
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
                {error && <p className="text-center text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
                            placeholder="Enter your email"
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
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? <Loader className="mx-auto h-5 w-5 animate-spin" /> : "Login"}
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