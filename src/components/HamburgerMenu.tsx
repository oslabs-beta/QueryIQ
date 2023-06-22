import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu relative ${isOpen ? "open" : ""}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <GiHamburgerMenu className="h-6 w-6 text-black" />
      </div>
      {isOpen && (
        <div className="menu-modal absolute right-0 top-full bg-white p-4 shadow">
          <ul className="menu-items">
            <li className="py-2">Home</li>
            {/* <Link href="http://localhost:3000/about">
              <h1>About</h1>
            </Link> */}
            <li className="py-2">FAQ</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};
/**<Link href="http://localhost:3000/homepage">
              <h3 className="text-2xl font-bold">HOME PAGE →</h3>
            </Link> */
export default HamburgerMenu;
