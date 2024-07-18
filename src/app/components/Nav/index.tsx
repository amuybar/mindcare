'use client';

import React, { useState } from 'react';
import CustomLink from '@/custom/CustomLink'; 
import MobileMenu from '@/custom/MobileMenu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <CustomLink href="/login">Join</CustomLink>
        </div>
      </div>
      {isOpen &&( <MobileMenu isOpen={isOpen} />)}
     

    </nav>
  );
};

export default Navbar;
