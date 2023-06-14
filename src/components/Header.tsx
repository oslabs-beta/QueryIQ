import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div className='flex justify-between items-center p-2'>
          <div className="flex items-center">
            <Image src="/assets/logo-full-no-bg.png" alt="Logo" width="128" height="128" />
            <Link href=''>About</Link>
            <Link href=''>Docs</Link>
          </div>
          <div className="flex items-center">
            <button>Settings</button>
          </div>
        </div>
    );
};

export default Header;