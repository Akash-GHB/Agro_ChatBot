import React, { useState } from 'react';

const AskQuery = ({ onNewQuery }) => {
  const [queryText, setQueryText] = useState('');

  const handleSubmit = () => {
    if (queryText.trim() !== '') {
      onNewQuery({
        id: Date.now(),
        question: queryText,
        response: "I'm a placeholder response. An expert will get back to you soon!",
      });
      setQueryText('');
    }
  };

  return (
    <div className="max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Ask a Query</h2>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Type your question here..."
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AskQuery;