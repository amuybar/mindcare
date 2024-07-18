'use client'
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa'; // Assuming you're using react-icons for the arrow icon

interface Blog {
  id: number;
  title: string;
  content: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Simulating fetch from API with a delay
        setTimeout(() => {
          const mockBlogs: Blog[] = [
            {
              id: 1,
              title: 'First Blog Post',
              content: 'Content of the first blog post...',
            },
            {
              id: 2,
              title: 'Second Blog Post',
              content: 'Content of the second blog post...',
            },
            {
              id: 3,
              title: 'Third Blog Post',
              content: 'Content of the third blog post...',
            },
          ];
          setBlogs(mockBlogs);
          setLoading(false);
        }, 1500); // Simulated delay for loading effect
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const handleBackToList = () => {
    setSelectedBlog(null);

  };

  if (loading) {
    // Placeholder UI while loading
    return (
      <div className="flex min-h-screen flex-col bg-sky-100 px-14 py-11">
        <div className="flex items-center mb-4">
          <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors">
          <FaArrowCircleLeft className="w-5 h-5 mr-2" />
          
        </Link>
        <p className="text-sky-600">Mental Health &gt; Blogs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 animate-pulse">
              <div className="h-8 mb-2 bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded-lg"></div>
              <div className="h-4 mt-2 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-sky-100 px-9 py-7">
      <div className="flex items-center mb-4">
      <Link href="/" className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors">
          <FaArrowCircleLeft className="w-5 h-5 mr-2" />
          
        </Link>
        <p className="text-sky-600">Mental Health &gt; Blogs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {/* Sidebar with list of blogs */}
        <div className="col-span-1 max-w-xl">
          <h2 className="text-lg text-sky-950 font-bold mb-4">Blog Posts</h2>
          <ul className="divide-y divide-gray-900">
            {blogs.map(blog => (
              <li key={blog.id} className="py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleBlogClick(blog)}>
                <h3 className="text-lg text-slate-900 font-medium">{blog.title}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 min-h-screen md:border-l md:border-gray-300"></div>
        {/* View section for selected blog */}
        <div className="col-span-2">
          {selectedBlog ? (
            <div className="bg-sky-200 rounded-lg shadow-lg p-4">
              <h2 className="text-xl text-slate-900 font-bold mb-4">{selectedBlog.title}</h2>
              <p className="text-gray-900">{selectedBlog.content}</p>
            </div>
          ) : (
            <p className="text-sky-950">Select a blog post to read</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
