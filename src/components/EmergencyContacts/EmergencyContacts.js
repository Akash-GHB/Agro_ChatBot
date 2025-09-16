import React from 'react';

const EmergencyContacts = () => {
  const contacts = [
    { id: 1, name: 'National Farmer Helpline', number: '1800-180-1551' },
    { id: 2, name: 'Local Veterinary Services', number: '108' },
    { id: 3, name: 'Agricultural Disaster Relief', number: '1070' },
  ];

  return (
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Emergency Contacts</h2>
      <ul className="space-y-4">
        {contacts.map(contact => (
          <li key={contact.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <p className="font-semibold">{contact.name}: <span className="text-red-600">{contact.number}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmergencyContacts;