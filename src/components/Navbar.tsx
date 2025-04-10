import React from 'react';

type NavbarProps = {
  isVisible: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: 'var(--space-blue)',
        opacity: isVisible ? 0.8 : 0,
        transition: 'opacity 1s ease-in-out 1s',
      }}
    >
      <ul className="flex justify-center items-center p-4 space-x-8">
        <li className="text-white font-bold hover:text-gray-400 transition duration-300 cursor-pointer">Home</li>
        <li className="text-white font-bold hover:text-gray-400 transition duration-300 cursor-pointer">Links</li>
        <li className="text-white font-bold hover:text-gray-400 transition duration-300 cursor-pointer">Gallery</li>
        <li className="text-white font-bold hover:text-gray-400 transition duration-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
