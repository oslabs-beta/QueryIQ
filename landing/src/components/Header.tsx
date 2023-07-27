import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const Header: React.FC = () => {
//   const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
//   const headerRef = useRef(null);


//  // handle scroll event
//  const handleScroll = (elTopOffset, elHeight) => {
//   if (window.scrollY > (elTopOffset + elHeight)) {
//     setSticky({ isSticky: true, offset: elHeight });
//   } else {
//     setSticky({ isSticky: false, offset: 0 });
//   }
// };

//   // add/remove scroll event listener
//   useEffect(() => {
//     var header = headerRef.current.getBoundingClientRect();
//     const handleScrollEvent = () => {
//       handleScroll(header.top, header.height)
//     }

//     window.addEventListener('scroll', handleScrollEvent);

//     return () => {
//       window.removeEventListener('scroll', handleScrollEvent);
//     };
//   }, []);

const headerStyle = {
  position: 'sticky',
  top: 0,
  bottom:0,
  zIndex: 999, // Optional: To ensure the header appears above other content
  background: 'linear-gradient(to bottom, #1F1F1F, transparent)', // Replace 'blue' with your desired background color
  padding: '8px',
};

  return (
    <div style={headerStyle}>
    <div
      className="flex items-center justify-center md:flex-row md:justify-between px-8 py-4"
    >
      <div className="flex items-center space-x-4" id='header'>
        <div className="flex justify-center md:mx-0 md:mr-4 md:items-center md:justify-start">
          <Image
            src="https://user-images.githubusercontent.com/32769592/256317225-f3c7607f-e661-4d0a-96a1-83665e4918bc.png"
            alt="Logo"
            width={64}
            height={64}
            className='min-w-[32px]'
          />
        </div>
        <h1 className="font-reem-kufi text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-slate-100">Query IQ</h1>
      </div>
      <div className="flex items-center text-slate-200 mr-4">
        <ul className="menu-items flex space-x-4 lg:space-x-8 text-xl md:text-2xl lg:text-4xl">
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#about">About</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#features">Features</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#faq">FAQ</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
            <a href="#team">Team</a>
          </li>
          <li className="py-2 hover:text-gray-700 transition-colors duration-200">
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
  </div>

  );
};

export default Header;
