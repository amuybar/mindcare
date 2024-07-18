
'use client'

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const SampleResourceList: React.FC = () => {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/resources'); // Assuming your API endpoint is at /api/resources
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }
        const data = await response.json();
        // Assuming data is an array of resources
        setResources(data.slice(0, 3)); // Slice to get the first 3 resources
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);
  const viewResource = (url: string) => {
    window.open(url, '_blank'); // Opens in a new tab
  };

  const handlePreview = (resource: any) => {
    // Handling previews or messages for different resource types
    switch (resource.type) {
      case 'videos':
        return (
          <div className="mt-2 bg-gray-100 rounded-lg p-4">
            <p className="text-gray-500">Video Preview</p>
          </div>
        );
      case 'articles':
        return (
          <div className="mt-2 bg-gray-100 rounded-lg p-4">
            <p className="text-gray-500">Article Preview</p>
          </div>
        );
      case 'podcasts':
        return (
          <div className="mt-2 bg-gray-100 rounded-lg p-4">
            <p className="text-gray-500">Podcast Preview</p>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    // Placeholder UI while loading
    return (
      <div className="max-w-7xl mx-auto px-4 py-6 text-slate-900">
        <h2 className="text-2xl font-bold mb-4">Resources for Wellbeing</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white min-w-60 rounded-lg shadow-lg p-4 animate-pulse">
              <div className="h-32 mb-4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-1/4 mt-2 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-slate-900">
      <h2 className="text-2xl font-bold mb-4">Resources for Wellbeing</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {resources.map((resource: any) => (
          <div key={resource.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium">{resource.title}</h3>
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                onClick={() => viewResource(resource.link)}
              >
                View
              </button>
            </div>
            <p className="text-gray-500 mb-4">Type: {resource.type}</p>
            {handlePreview(resource)}
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 focus:outline-none"
          href='/resources'
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default SampleResourceList;
