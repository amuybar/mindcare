import React from 'react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-slate-900 text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-sky-900 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
};

export default CustomLink;
