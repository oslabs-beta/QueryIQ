import React from 'react';
import Image from 'next/image';
import HamburgerMenu from '../components/HamburgerMenu';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center px-4 py-1 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          <Link href="/homepage">
            <Image
              src="/../public/assets/logo-full-no-bg.png"
              alt="Logo"
              width={64}
              height={64}
            />
          </Link>
        </div>
        <div className="flex flex-col items-center md:flex-row md:space-x-4">
          <Link href="/homepage" className="font-reem-kufi text-4xl">
            QueryIQ
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <button>
          <HamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
