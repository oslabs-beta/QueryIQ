import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white p-2 md:flex-row">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          <Image
            src="/assets/logo-full-no-bg.png"
            alt="Logo"
            width={128}
            height={128}
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <Link href="">About</Link>
          <Link href="">Docs</Link>
        </div>
      </div>
      <div className="flex items-center">
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Header;
