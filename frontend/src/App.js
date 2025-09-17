import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AskQuery from './components/AskQuery/AskQuery.js';
import QueryHistory from './components/QueryHistory/QueryHistory.js';
import ExpertNetwork from './components/ExpertNetwork/ExpertNetwork.js';
import Resources from './components/Resources/Resources.js';
import EmergencyContacts from './components/EmergencyContacts/EmergencyContacts.js';
import Settings from './components/Settings/Settings.js';
import { useUserStore } from './stores/useUserStore.js'; // <-- Corrected path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// A private route component to wrap protected routes
const PrivateRoute = ({ children }) => {
    const { user, loading, checkAuth } = useUserStore();
    const navigate = useNavigate();

    // On component mount, check if the user is authenticated
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Show a loading state while checking auth
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    // If no user is found, redirect to the login page
    if (!user) {
        toast.error("Please log in to view this page.");
        navigate('/login');
        return null;
    }

    // If authenticated, render the children (the protected page)
    return <>{children}</>;
};

function App() {
    const { user, checkAuth } = useUserStore();

    // Use a useEffect hook to check for a token on initial load
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <Router>
            <div className="flex min-h-screen font-sans bg-gray-50">
                <ToastContainer />
                <Routes>
                    {/* Public Routes for Login and Signup */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    
                    {/* A conditional render for the entire application layout */}
                    <Route
                        path="/*"
                        element={
                            user ? (
                                <>
                                    <Sidebar />
                                    <div className="flex-1 p-8 text-center">
                                        <Routes>
                                            {/* Protected Routes */}
                                            <Route path="/" element={<AskQuery />} />
                                            <Route path="/query-history" element={<QueryHistory />} />
                                            <Route path="/expert-network" element={<ExpertNetwork />} />
                                            <Route path="/resources" element={<Resources />} />
                                            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
                                            <Route path="/settings" element={<Settings />} />
                                        </Routes>
                                    </div>
                                </>
                            ) : (
                                // Redirect to login if not authenticated
                                <Login />
                            )
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;