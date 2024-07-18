'use client';
import { useEffect } from 'react';

import { Transition } from '@headlessui/react';
import CustomLink from './CustomLink';

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <div className="md:hidden">
      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >

        <div className="flex flex-col absolute z-40 bg-sky-500 border-b-2 min-h-screen w-full p-0 m-0">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/resources">Resources</CustomLink>
          <CustomLink href="/blog">Blog</CustomLink>
          <CustomLink href="/community">Community</CustomLink>
          <CustomLink href="/support">Support Group</CustomLink>
        </div>
      </Transition>
    </div>
  );
};

export default MobileMenu;
