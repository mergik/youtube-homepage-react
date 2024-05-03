import React from 'react';
import Mike from './mike1.jpg';
import Annah from './Annah.png';
import Merlix from './Merlix.webp';
import Hillary from './hillary.jpg';

const teamMembers = [
  { name: 'Michael Mutinda', imageUrl: Mike, whatsappNumber: '+254717219123' },
  { name: 'Annah Njuguna', imageUrl: Annah, whatsappNumber: '+254702351165' },
  { name: 'Merlix Gikunju', imageUrl: Merlix, whatsappNumber: '+254728788129' },
  { name: 'Hillary Kiprotich', imageUrl: Hillary, whatsappNumber: '+254797490998' }
];

export const ContactUs = () => {
  return (
    <div className="bg-white text-center py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 mx-auto max-w-2xl mb-6">
        Looking for expert software solutions? Our team is ready to help you design, develop, and deploy your projects. Contact us for high-quality, reliable software engineering tasks tailored to meet your business needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
            <img className="w-full" src={member.imageUrl} alt={member.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{member.name}</div>
              <a href={`https://wa.me/${member.whatsappNumber}`} 
                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Contact {member.name.split(' ')[0]}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
