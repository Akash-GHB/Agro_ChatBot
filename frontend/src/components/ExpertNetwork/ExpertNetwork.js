import React from 'react';

const ExpertNetwork = () => {
  const experts = [
    { id: 1, name: 'Dr. Ramesh Sharma', field: 'Soil Science', contact: 'ramesh.s@agri-experts.com' },
    { id: 2, name: 'Smt. Anjali Singh', field: 'Horticulture', contact: 'anjali.s@agri-experts.com' },
    { id: 3, name: 'Shri. Prakash Kumar', field: 'Pest Management', contact: 'prakash.k@agri-experts.com' },
  ];

  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Expert Network</h2>
      <ul className="space-y-4">
        {experts.map(expert => (
          <li key={expert.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <p className="font-semibold text-lg">{expert.name} - <span className="text-green-600">{expert.field}</span></p>
            <small className="text-gray-500">Contact: {expert.contact}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertNetwork;