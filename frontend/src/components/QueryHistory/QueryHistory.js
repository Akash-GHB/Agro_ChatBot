import React from 'react';

const QueryHistory = ({ queries }) => {
  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Query History</h2>
      {queries.length > 0 ? (
        <ul className="space-y-4">
          {queries.map((query) => (
            <li key={query.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <p className="text-gray-800">
                <strong className="font-semibold">You asked:</strong> {query.question}
              </p>
              <p className="mt-2 text-gray-600">
                <strong className="font-semibold">Response:</strong> {query.response}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center mt-8">You have not submitted any queries yet.</p>
      )}
    </div>
  );
};

export default QueryHistory;