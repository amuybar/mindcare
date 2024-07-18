/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';

interface Resource {
  id: number;
  title: string;
  type: 'video' | 'pdf' | 'blog';
  url: string;
  preview?: string; // Preview content for video or document
}

const SampleResourceList: React.FC = () => {
  // Sample data for resources
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      title: 'Introduction to React Hooks',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=khJlrj3Y6Ls',
      preview: 'https://i.ytimg.com/vi/khJlrj3Y6Ls/maxresdefault.jpg', // Example thumbnail preview for video
    },
    {
      id: 2,
      title: 'JavaScript Basics',
      type: 'pdf',
      url: 'https://example.com/javascript-basics.pdf',
    },
    {
      id: 3,
      title: 'Getting Started with Tailwind CSS',
      type: 'blog',
      url: 'https://example.com/getting-started-with-tailwind-css',
    },
    {
      id: 4,
      title: 'React State Management Guide',
      type: 'blog',
      url: 'https://example.com/react-state-management-guide',
    },
  ]);

  const viewResource = (url: string) => {
    // Navigate to view the resource detail page or open the resource link
    window.open(url, '_blank'); // Opens in a new tab
  };

  const handlePreview = (resource: Resource) => {
    if (resource.type === 'video' && resource.preview) {
      return (
        <div className="mt-2">
          <img src={resource.preview} alt="Video Preview" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      );
    } else if (resource.type === 'pdf') {
      return (
        <div className="mt-2">
          <p className="text-gray-600">No preview available for PDFs.</p>
        </div>
      );
    } else {
      <div className="mt-2">
          <p className="text-gray-600">No preview available</p>
        </div>
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-slate-900">
      <h2 className="text-2xl font-bold mb-4"> Resources For Well Being of Mental Wellness</h2>
      <ul className="divide-y divide-gray-300">
        {resources.map((resource) => (
          <li key={resource.id} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium">{resource.title}</h3>
                <p className="text-gray-500 mt-1">
                  Type: {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </p>
              </div>
              <div>
                <button
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                  onClick={() => viewResource(resource.url)}
                >
                  View
                </button>
              </div>
            </div>
            {handlePreview(resource)}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <button
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none"
          onClick={() => alert('Load more resources')}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SampleResourceList;
