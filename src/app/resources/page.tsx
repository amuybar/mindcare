'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowCircleLeft } from 'react-icons/fa';

// Define the Resource interface
interface Resource {
  id: number;
  title: string;
  type: 'articles' | 'videos' | 'podcasts';
  description: string;
  link: string;
}

// Define the tab type
type Tab = {
  id: 'all' | 'articles' | 'videos' | 'podcasts';
  label: string;
};

const ResourcesPage = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab['id']>('all');
 
  const tabs: Tab[] = [
    { id: 'all', label: 'All Resources' },
    { id: 'articles', label: 'Articles' },
    { id: 'videos', label: 'Videos' },
    { id: 'podcasts', label: 'Podcasts' },
  ];

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/api/resources');
        const data: Resource[] = await response.json();
        setResources(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching resources:', error);
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const filteredResources = activeTab === 'all'
    ? resources
    : resources.filter(resource => resource.type === activeTab);

  return (
    <div className="flex min-h-screen flex-col bg-sky-100 px-6 py-4">
      <header className="mb-8">
        <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors">
          <FaArrowCircleLeft className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-bold text-sky-900 mt-4">Resources</h1>
        <p className="text-sky-600">Mental Health &gt; Resources</p>
      </header>

      <div className="mb-8">
        <nav className="flex space-x-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-200 text-sky-800 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 animate-pulse"
              >
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            ))
          : filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-sky-800 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sky-600 mb-4">{resource.type}</p>
                <p className="text-gray-600">{resource.description}</p>
                <a href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sky-600 hover:text-sky-800 transition-colors"
                >
                  Learn More &rarr;
                </a>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
