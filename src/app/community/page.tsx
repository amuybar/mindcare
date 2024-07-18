'use client'
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa'; // Assuming you're using react-icons for the arrow icon
import { FiUser, FiSun, FiMoon } from 'react-icons/fi'; // Assuming icons for profile, light mode, dark mode

const CommunityForumPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('introduction'); // Default selected section

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  return (
    <div className="flex min-h-screen flex-col bg-sky-100 px-9 py-7">
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-slate-500 p-4 mb-4">
        <div className="flex items-center">
        <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors">
          <FaArrowCircleLeft className="w-5 h-5 mr-2" />
          
        </Link>
          <p className="text-sm text-gray-900">Home / Community Forum / {selectedSection}</p>
        </div>
        <div className="flex items-center">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none mr-4">
            <FiUser className="text-xl" />
          </button>
          <div className="relative">
            <input type="checkbox" id="darkModeToggle" className="sr-only" />
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <FiSun className="text-xl text-yellow-500" />
              <FiMoon className="text-xl text-gray-600 ml-1" />
            </label>
          </div>
        </div>
      </div>
      
      {/* Main Layout: Sidebar and View */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* Sidebar */}
        <div className="col-span-1">
          <h2 className="text-lg text-sky-950 font-bold mb-4">Community Forum</h2>
          <ul className="divide-y divide-gray-300">
            <li className={`py-2 cursor-pointer ${selectedSection === 'introduction' ? 'bg-gray-100' : ''}`} onClick={() => handleSectionSelect('introduction')}>
              <h3 className="text-lg text-sky-950 font-medium">Introduction</h3>
            </li>
            <li className={`py-2 cursor-pointer ${selectedSection === 'welcome' ? 'bg-gray-100' : ''}`} onClick={() => handleSectionSelect('welcome')}>
              <h3 className="text-lg text-sky-950 font-medium">Welcome</h3>
            </li>
            <li className={`py-2 cursor-pointer ${selectedSection === 'profile' ? 'bg-gray-100' : ''}`} onClick={() => handleSectionSelect('profile')}>
              <h3 className="text-lg text-sky-950 font-medium">Profile</h3>
            </li>
            <li className="py-2 mt-4 text-sky-950">Feeds</li>
            <ul className="ml-4 text-sm">
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Feed Link 1</li>
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Feed Link 2</li>
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Feed Link 3</li>
            </ul>
            <li className="py-2 text-sky-950 mt-4">Groups</li>
            <ul className="ml-4 text-sm">
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Group Link 1</li>
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Group Link 2</li>
              <li className="py-1 cursor-pointer text-sky-950 hover:text-blue-500">Group Link 3</li>
            </ul>
            <li className={`py-2 mt-4 ${selectedSection === 'forums' ? 'bg-gray-100' : ''}`} onClick={() => handleSectionSelect('forums')}>
              <h3 className="text-lg font-medium text-sky-950">Forums</h3>
            </li>
            <li className="py-2 mt-4 text-sky-950 cursor-pointer hover:text-blue-500">Resources</li>
            <li className="py-2 cursor-pointer text-sky-950 hover:text-blue-500">About</li>
            <li className="py-2 cursor-pointer text-sky-950 hover:text-blue-500">Report Abuse</li>
          </ul>
        </div>

        {/* Divider */}
        <div className="col-span-1 md:border-l md:border-gray-300"></div>

        {/* Main View */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-black mb-4">{selectedSection}</h2>
            {/* Render content based on selectedSection */}
            {selectedSection === 'introduction' && (
              <p>Introduction content goes here...</p>
            )}
            {selectedSection === 'welcome' && (
              <p>Welcome content goes here...</p>
            )}
            {selectedSection === 'profile' && (
              <p>Profile content goes here...</p>
            )}
            {selectedSection === 'forums' && (
              <p>Forums content goes here...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForumPage;
