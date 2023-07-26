import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    // Get the header height or any threshold value you prefer
    const headerHeight = 100;

    if (window.scrollY > headerHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-center md:flex-row md:justify-between px-8 py-4 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''
      }`}
    >
      <div className="flex items-center space-x-4" id='header'>
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          <Image
            src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
        <h1 className="font-reem-kufi text-6xl text-white">Query IQ</h1>
      </div>
      <div className="flex items-center text-white mr-10">
        <ul className="menu-items flex space-x-8 text-3xl">
          <li className="py-2 hover:text-gray-700 transition-colors duration-300">
            <a href="#about">About</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-300">
            <a href="#faq">FAQ</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-300">
            <a href="#team">Team</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-300">
            <a
              href="https://github.com/oslabs-beta/QueryIQ/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;