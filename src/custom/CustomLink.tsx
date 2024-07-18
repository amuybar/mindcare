import React from 'react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-sky-950 text-2xl px-4 hover:border-b-2 border-transparent hover:border-sky-400 transition duration-300 ease-in-out"
    >
      {children}
    </a>
  );
};

export default CustomLink;
