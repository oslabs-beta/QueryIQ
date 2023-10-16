import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu relative z-50 ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <GiHamburgerMenu className="mr-6 h-10 w-10 text-slate-100" />
      </div>
      {isOpen && (
        <div className="menu-modal absolute right-12 top-full ml-8 rounded-md bg-slate-600 px-12 py-8 text-xl font-bold tracking-widest text-slate-100 shadow ring ring-2 ring-slate-50">
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
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
