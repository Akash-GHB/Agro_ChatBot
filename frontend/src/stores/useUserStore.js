import { create } from 'zustand';
import axiosInstance from '../lib/axios';

// Get the initial token from localStorage
const storedToken = localStorage.getItem('token');
if (storedToken) {
    // Set the default Authorization header for Axios if a token exists
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
}

export const useUserStore = create((set, get) => ({
    user: null,
    token: storedToken || null, // Initialize with the stored token
    loading: false,
    error: null,

    
    // Signup function with correct token handling and localStorage persistence
    signup: async (formData) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.post('/auth/signup', {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            });

            // Assuming your backend returns an object with a user and a token
            const { user, token } = response.data;

            // Store token in Zustand and localStorage
            set({ user, token, loading: false });
            localStorage.setItem('token', token);

            // Set the Authorization header for future requests
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } catch (err) {
            set({ error: err.response?.data?.message || "An unexpected error occurred.", loading: false });
        }
    },

    // Login function with correct token handling and localStorage persistence
    login: async (formData) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.post('/auth/login', formData);
            // If your backend returns just the user object (no token)
            const user = response.data;
            set({ user, loading: false });
            // If you have a token, set it here as well
            // localStorage.setItem('token', token);
            // axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } catch (err) {
            set({ error: err.response?.data?.message || "Login failed", loading: false });
        }
    },

    // A function to check if the user is authenticated from the token
    checkAuth: async () => {
        const { token } = get();
        if (!token) {
            return;
        }

        set({ loading: true, error: null });
        try {
            // Your backend should have a route like /auth/me that returns user info from a valid token
            const response = await axiosInstance.get('/auth/me');
            set({ user: response.data, loading: false });
        } catch (err) {
            // If the token is invalid or expired, clear the state
            set({ user: null, token: null, loading: false });
            localStorage.removeItem('token');
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
    },

    // Logout function to clear state and remove token
    logout: () => {
        set({ user: null, token: null });
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
    },
}));