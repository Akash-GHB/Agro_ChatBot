// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { Sprout, BookOpen, Users, History, Phone, Settings } from "lucide-react";

const Home = () => {
  const features = [
    {
      name: "Ask Query",
      description: "Ask your farming doubts and get AI-powered expert answers.",
      icon: <Sprout className="text-green-600 mb-3" size={32} />,
      path: "/ask-query",
    },
    {
      name: "Query History",
      description: "Track all your past queries and solutions in one place.",
      icon: <History className="text-green-600 mb-3" size={32} />,
      path: "/query-history",
    },
    {
      name: "Expert Network",
      description: "Connect with agriculture experts and get real-time advice.",
      icon: <Users className="text-green-600 mb-3" size={32} />,
      path: "/expert-network",
    },
    {
      name: "Resources",
      description: "Explore guides, tips, and tutorials on best farming practices.",
      icon: <BookOpen className="text-green-600 mb-3" size={32} />,
      path: "/resources",
    },
    {
      name: "Emergency",
      description: "Quick access to emergency helplines for urgent farming support.",
      icon: <Phone className="text-green-600 mb-3" size={32} />,
      path: "/emergency-contacts",
    },
    {
      name: "Settings",
      description: "Customize language, notifications, and app preferences.",
      icon: <Settings className="text-green-600 mb-3" size={32} />,
      path: "/settings",
    },
  ];

  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-md mb-8 text-center">
          <h1 className="text-3xl font-bold text-green-700 mb-3">
            🌱 Welcome to Krishi Sahayi
          </h1>
          <p className="text-gray-600 text-lg">
            Your Digital Krishi Officer is here to help you with expert
            agricultural guidance anytime, anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              to={feature.path}
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.name}
              </h3>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
