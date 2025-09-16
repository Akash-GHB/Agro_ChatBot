import React from 'react';

const Resources = () => {
  const resources = [
    { id: 1, title: 'Government Schemes for Farmers', url: '#' },
    { id: 2, title: 'Seasonal Crop Guide', url: '#' },
    { id: 3, title: 'Weather Forecasts', url: '#' },
  ];

  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Resources</h2>
      <ul className="space-y-4">
        {resources.map(resource => (
          <li key={resource.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;