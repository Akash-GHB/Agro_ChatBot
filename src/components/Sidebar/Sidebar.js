import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-6 flex flex-col items-center border-r border-gray-300">
      <div className="flex items-center mb-8">
        <span className="text-3xl mr-2">🌱</span>
        <h3 className="text-xl font-semibold">Krishi Sahayi</h3>
      </div>
      <ul className="w-full space-y-2">
        <li>
          <Link to="/ask-query" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Ask Query
          </Link>
        </li>
        <li>
          <Link to="/query-history" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Query History
          </Link>
        </li>
        <li>
          <Link to="/expert-network" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Expert Network
          </Link>
        </li>
        <li>
          <Link to="/resources" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/emergency-contacts" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Emergency Contacts
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block p-3 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150 ease-in-out">
            Settings
          </Link>
        </li>
      </ul>
      <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-md mt-auto">
        <p className="text-sm font-bold text-green-700">✅ Online Support</p>
        <small className="text-xs text-green-600">Agricultural experts are available 24/7 to help you.</small>
      </div>
    </div>
  );
};

export default Sidebar;