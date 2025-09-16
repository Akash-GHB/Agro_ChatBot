import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.js';
import SignUp from './components/SignUp/SignUp.js';
import Sidebar from './components/Sidebar/Sidebar.js';
import AskQuery from './components/AskQuery/AskQuery.js';
import QueryHistory from './components/QueryHistory/QueryHistory.js';
import ExpertNetwork from './components/ExpertNetwork/ExpertNetwork.js';
import Resources from './components/Resources/Resources.js';
import EmergencyContacts from './components/EmergencyContacts/EmergencyContacts.js';
import Settings from './components/Settings/Settings.js';
import './index.css';
function App() {
  const [queries, setQueries] = useState([]);
  const [users, setUsers] = useState([]); // State to store signed-up users

  const handleNewQuery = (newQuery) => {
    setQueries([...queries, newQuery]);
  };

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    alert('Sign-up successful! Please log in.');
  };

  return (
    <Router>
      <div className="flex min-h-screen font-sans bg-gray-50">
        <Routes>
          <Route path="/login" element={<Login users={users} />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
          
          <Route path="*" element={
            <>
              <Sidebar />
              <div className="flex-1 p-8 text-center">
                <Routes>
                  <Route path="/" element={<AskQuery onNewQuery={handleNewQuery} />} />
                  <Route path="/query-history" element={<QueryHistory queries={queries} />} />
                  <Route path="/expert-network" element={<ExpertNetwork />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/emergency-contacts" element={<EmergencyContacts />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;