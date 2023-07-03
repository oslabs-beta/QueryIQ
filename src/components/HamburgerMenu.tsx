import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signOut, signIn, useSession } from 'next-auth/react';
import Link from 'next/link';

const HamburgerMenu = () => {
  const { data: sessionData } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu relative ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <GiHamburgerMenu className="h-6 w-6 text-black" />
      </div>
      {isOpen && (
        <div className="menu-modal absolute right-0 top-full bg-white p-4 shadow ">
          <ul className="menu-items">
            <li className="py-2">
              <Link href="/homepage">Home</Link>
            </li>
            <li className="py-2">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="py-2">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="py-2">
              <Link href="https://github.com/oslabs-beta/QueryIQ/blob/main/README.md">
                Docs
              </Link>
            </li>
            <li
              className="py-2"
              onClick={
                sessionData
                  ? () => {
                      void signOut({ callbackUrl: window.location.origin });
                    }
                  : () => {
                      void signIn();
                    }
              }
            >
              {sessionData ? 'Logout' : 'Sign in'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
