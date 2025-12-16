// components/layout/Layout.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const navMenu= ['Courses', 'Community', 'Contact', 'About'];

const Header: React.FC = () => {
    return (
        <header className="w-full px-6 py-4 shadow-md flex flex-col md:flex-row items-center justify-between bg-white sticky top-0 z-50">
            {/* Logo and Site Name */}
            <div className="flex items-center mb-4 md:mb-0">
                <Link href="/" passHref>
                    <div className="flex items-center cursor-pointer">
                        <Image src="/assets/jangainLogo3.png" alt="Jangain Logo" width={100} height={30} />
                    </div>
                </Link>
            </div>
             {/* Search Bar
            <div className="flex flex-1 max-w-md w-full mb-4 md:mb-0 md:mx-6">
            <input 
                type="text"
                placeholder="Search courses..."
                className="w-full px-4 py-2 border text-gray-500 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                 />
            </div> */}
              {/* Navigation Menu */}
              <nav className="w-full mt-4 md:mt-0 md:w-auto md:ml-6 overflow-y-x-auto scrollbar-hide">
                    <ul className="flex gap-4 text-xl md: text-xl font-semibold text-gray-500 font-medium whitespace-nowrap">
                        {navMenu.map((type) => (
                        <li key={type}>
                            <Link
                                href={`/navMenu/${type.toLowerCase()}`}
                                className="hover: relative w-fit cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0
                                    after:w-0 after:h-[2px] after:bg-teal-500 after:transition-all after:duration-300
                                    hover:after:w-full text-gray-600 transition rounded-md px-2 py-1">
                                {type}
                            </Link>
                       </li>
                        ))}
                    </ul>
                </nav>

            {/* Auth Buttons */}
            <div className="flex gap-4 items-center">
 
                <Link href="/signup" className="bg-teal-600 text-white text-xl md: text-5xl font-extrabold px-4 py-2 rounded-full hover:bg-teal-700 transition">
                    Login to Portal
                </Link>"
            </div>
        </header>
    );
};

export default Header;
