// components/layout/Footer.tsx

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-teal-100 text-teal-800 py-8 px-6 mt-10 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <div className="flex items-center mb-2">
                        <Image src="/assets/jangainLogo3.png" alt="Logo" width={200} height={10} />
                    </div>
                    <p className="text-sm font-semibold text-gray-500">
                        Learning should not be a privilege. Jangain is dedicated to providing free, high-quality education to everyone, everywhere.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-3">Explore</h3>
                    <ul className="space-y-2 text-lg">
                        <li><Link href="/about" className="hover:text-teal-600">About</Link></li>
                        <li><Link href="/course" className="hover:text-teal-600">Courses</Link></li>
                        <li><Link href="/terms" className="hover:text-teal-600">Terms</Link></li>
                        <li><Link href="/privacy" className="hover:text-teal-600">Privacy</Link></li>
                    </ul>
                </div>

                {/* social media links {placeholder icons} */}
                <div>
                    <h3 className="font-semibold mb-3">Connect</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-teal-600">Facebook</Link>
                        <Link href="#" className="hover:text-teal-600">Instagram</Link>
                        <Link href="#" className="hover:text-teal-600">TikTok</Link>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center text-sm text-gray-500 mt-8">
                &copy; {new Date().getFullYear()} Jangain. All rights reserved.
            </div>
        </footer>        
    );
};

export default Footer;