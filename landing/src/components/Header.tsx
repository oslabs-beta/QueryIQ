import React from 'react';
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';
// import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center md:flex-row md:justify-between px-8 py-4">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          {/* <Link href="/homepage"> */}
            <Image
              src="/../public/assets/logo-full-no-bg.png"
              alt="Logo"
              width={64}
              height={64}
            />
          {/* </Link> */}
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4">
          <h1 className="font-reem-kufi text-6xl text-white">
            Query IQ
          </h1>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="menu-items">
            {/* <li className="py-2">
              <Link href="/homepage">Home</Link>
            </li> */}
            <li className="py-2">
              <a href="#about">About</a>
            </li>
            <li className="py-2">
              <a href="#faq">FAQ</a>
            </li>
            <li className="py-2">
              <a href="#team">Team</a>
            </li>
            <li className="py-2">
              <a
                href="https://github.com/oslabs-beta/QueryIQ/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docs
              </a>
            </li>
        </ul>
        <button>
          <HamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
