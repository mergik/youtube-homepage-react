import React from 'react';
import codse from './codse.webp'
import teamcol from './teamcol.webp'
import uiux from './uiux.webp'
import planning from './planning.webp'
import Design from './design.png'

export const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <img src={teamcol} alt="Team Collaboration" className="w-full object-cover rounded-lg shadow-lg" />
            <img src={teamcol} alt="Coding Session" className="w-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <img src={planning} alt="Project Planning" className="w-full object-cover rounded-lg shadow-lg" />
            <img src={uiux} alt="UI/UX Design" className="w-full object-cover rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="text-center p-8 shadow-lg rounded-lg bg-gray-50">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Project</h1>
          <p className="text-lg font-medium text-gray-600">
            Initiated as a post-graduate collaboration after completing the ALX Africa SE Program, our project represents the culmination of our learning journey. It embodies our dedication to mastering cutting-edge technologies in front-end development, version control with Git, and effective team collaboration.
          </p>
          <p className="text-lg font-medium text-gray-600 mt-4">
            Our goal was to develop a robust platform that not only showcases our technical skills but also promotes the importance of teamwork and shared learning. We have designed and built an application that is intuitive, responsive, and visually appealing, reflecting the high standards of code quality and user experience we strive to achieve.
          </p>
          <div className="mt-6 font-medium">
            <p className="text-gray-700">Team Members:</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Michael Mutinda - Frontend/Backend Engineer</li>
              <li>Annah Njuguna - Frontend/Backend Engineer</li>
              <li>Merlix Gikunju - Frontend/Backend Enginner</li>
              <li>Hillary Kiprotich - Frontend/Backend Engineer</li>
              <li>Kennedy Ryan - Frontend/Backend Engineer</li>
              <li>Steve Murimi - Frontend/Backend Engineer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
