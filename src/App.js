import React, { useState } from "react";
import { Send, Image, Mic, History, Users, BookOpen, Phone, Settings, Bell } from "lucide-react";

function App() {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([
    {
      id: 1,
      location: "Kottayam",
      crop: "Rice",
      time: "9/13/2025, 9:19:15 PM",
      question: "എന്തിന് വെള്ളത്തിൽ ഇലകൾ മഞ്ഞളിക്കുന്നു, എന്തു ചെയ്യണം?",
      aiResponse:
        "വെള്ളത്തിൽ ഇലകൾ മഞ്ഞളിക്കുന്നത് സാധാരണയായി ഫംഗസ് മൂലമാണ് വരുന്നത്. പ്രൊപികോണസോൾ 25% EC @ 1 മില്ലി/ലിറ്റർ വെള്ളത്തിൽ കലക്കി സ്പ്രേ ചെയ്യുക. നല്ല ഡ്രെയിനേജ് ഉറപ്പാക്കുക. ബാധിച്ച ഇലകൾ നീക്കം ചെയ്തു നശിപ്പിക്കുക.",
      confidence: "88%",
    },
  ]);

  const handleSend = () => {
    if (query.trim() === "") return;
    const newResponse = {
      id: responses.length + 1,
      location: "Kerala (demo)",
      crop: "Banana",
      time: new Date().toLocaleString(),
      question: query,
      aiResponse:
        "ഇത് ഒരു ഡെമോ മറുപടിയാണ്. ഇവിടെ നിങ്ങളുടെ ഡിജിറ്റൽ കൃഷി ഓഫീസർ നിന്നുള്ള നിർദേശങ്ങൾ കാണാം.",
      confidence: "90%",
    };
    setResponses([newResponse, ...responses]);
    setQuery("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h2 className="text-2xl font-bold text-green-700 mb-6">🌱 Krishi Sahayi</h2>
        <nav className="flex-1 space-y-4">
          <button className="flex items-center space-x-2 text-green-700 font-semibold">
            <Send size={18} /> <span>Ask Query</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <History size={18} /> <span>Query History</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <Users size={18} /> <span>Expert Network</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <BookOpen size={18} /> <span>Resources</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <Phone size={18} /> <span>Emergency Contacts</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-700">
            <Settings size={18} /> <span>Settings</span>
          </button>
        </nav>
        <div className="mt-6 p-3 bg-green-50 text-sm rounded-lg text-green-800">
          ✅ Online Support <br />
          Agricultural experts are available 24/7 to help you.
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between bg-green-700 text-white p-4">
          <h1 className="text-xl font-bold">Digital Krishi Officer</h1>
          <button className="relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </button>
        </div>

        {/* Query Box */}
        <div className="p-4 bg-gray-50">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask your question..."
            className="w-full p-3 border rounded-lg mb-3"
          />
          <div className="flex space-x-3">
            <button className="flex items-center px-3 py-2 border rounded-lg">
              <Image size={18} className="mr-2" /> Upload Image
            </button>
            <button className="flex items-center px-3 py-2 border rounded-lg">
              <Mic size={18} className="mr-2" /> Voice Input
            </button>
            <button
              onClick={handleSend}
              className="flex items-center px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Send size={18} className="mr-2" /> Send
            </button>
          </div>
        </div>

        {/* Responses */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {responses.map((res) => (
            <div key={res.id} className="bg-white p-4 shadow rounded-lg">
              <p className="text-sm text-gray-500">
                📍 {res.location} • {res.crop} • {res.time}
              </p>
              <p className="mt-2 font-semibold">❓ {res.question}</p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg">
                🌿 {res.aiResponse}
              </div>
              <p className="mt-2 text-sm text-gray-600">🤖 Confidence: {res.confidence}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
