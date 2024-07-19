'use client';

import React, { useState } from 'react';
import CustomLink from '@/custom/CustomLink';
import MobileMenu from '@/custom/MobileMenu';
import { useAuth, UserButton } from '@clerk/nextjs';
import { FiLogOut } from 'react-icons/fi';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-100  border-teal-950 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex justify-between">
        <div className="flex items-center">
          <a href="/" className="text-sky-950 text-3xl p-6 font-bold">MindCare</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden p-6">
          <button
            type="button"
            className="text-sky-950 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center py-5 ">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/resources">Resources</CustomLink>
          <CustomLink href="/blog">Blog</CustomLink>
          <CustomLink href="/community">Community</CustomLink>
          <CustomLink href="/support">Support Group</CustomLink>
          {isLoaded && userId ? (
            <>
               <UserButton 
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10"  // Adjust size as needed
              }
            }}
          />
              <button
                className="text-sky-950 hover:text-sky-700 focus:outline-none transition-colors duration-200 flex items-center space-x-2"
                onClick={() => {
                  localStorage.removeItem('clerk-session-id');
                  window.location.reload();
                }}
              >
                <FiLogOut className="text-xl" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="text-sky-950 hover:text-sky-700 focus:outline-none transition-colors duration-200">
                Sign In
              </Link>
              <Link href="/sign-up" className="bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 focus:outline-none transition-colors duration-200">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      {isOpen && (<MobileMenu isOpen={isOpen} />)}


    </nav>
  );
};

export default Navbar;
