import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div>
          <Image src="/assets/logo-full-no-bg.png" alt="Logo" width="128" height="128" />
          <Link href=''>About</Link>
          <Link href=''>Docs</Link>
          <button>Settings</button>
        </div>
    );
};

export default Header;