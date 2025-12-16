// // components/layout/Footer.tsx

// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-teal-100 text-teal-800 py-8 px-6 mt-10 border-t">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Logo and Description */}
//                 <div>
//                     <div className="flex items-center mb-2">
//                         <Image src="/assets/jangainLogo3.png" alt="Logo" width={200} height={10} />
//                     </div>
//                     <p className="text-sm font-semibold text-gray-500">
//                         Learning should not be a privilege. Jangain is dedicated to providing free, high-quality education to everyone, everywhere.
//                     </p>
//                 </div>

//                 {/* Navigation Links */}
//                 <div>
//                     <h3 className="font-extrabold md:text-4xl text-2xl mb-3">Explore</h3>
//                     <ul className="space-y-1 text-2xl md:text-xl font-semibold">
//                         <li><Link href="/about" className="hover:text-teal-600">About</Link></li>
//                         <li><Link href="/course" className="hover:text-teal-600">Courses</Link></li>
//                         <li><Link href="/terms" className="hover:text-teal-600">Terms</Link></li>
//                         <li><Link href="/privacy" className="hover:text-teal-600">Privacy</Link></li>
//                     </ul>
//                 </div>

//                 {/* social media links {placeholder icons} */}
//                 <div>
//                     <h3 className="font-extrabold md:text-3xl text-2xl mb-3">Connect</h3>
//                     <div className="flex gap-4">
//                         <Link href="#" className="hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.506 0-1.797.716-1.797 1.767v2.317h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
// </svg>
// </Link>
//                         <Link href="#" className="hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0-2A7.75 7.75 0 0 0 0 7.75v8.5A7.75 7.75 0 0 0 7.75 24h8.5A7.75 7.75 0 0 0 24 16.25v-8.5A7.75 7.75 0 0 0 16.25 0h-8.5z"/>
//   <path d="M12 6.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 6.5zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5zm6.75-10.88a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12z"/>
// </svg>
// </Link>
//                         <Link href="#" className="hover:text-teal-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
//   <path d="M12.783 0h3.69c.267 2.113 1.686 3.67 3.843 4.14v3.72a7.147 7.147 0 0 1-3.843-1.17v7.873a7.437 7.437 0 1 1-7.437-7.437c.267 0 .54.02.807.06v3.8a3.56 3.56 0 1 0 2.94 3.5V0z"/>
// </svg>
// </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom copyright */}
//             <div className="text-center text-sm text-gray-500 mt-8">
//                 &copy; {new Date().getFullYear()} Jangain. All rights reserved.
//             </div>
//         </footer>        
//     );
// };

// export default Footer;



import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo + Description */}
        <div>
          <Image
            src="/assets/jangainLogo3.png"
            alt="Logo"
            width={180}
            height={40}
            className="mb-4 opacity-90 hover:opacity-100 transition"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Jangain makes learning accessible for all through free, high-quality
            and community-driven education.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-teal-400 transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/course" className="hover:text-teal-400 transition-all">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-teal-400 transition-all">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-teal-400 transition-all">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
          <div className="flex gap-5 items-center text-gray-400">
            {/* Facebook */}
            <Link href="#" className="hover:text-teal-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.92c-1.506 0-1.797.716-1.797 1.767v2.317h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="#" className="hover:text-teal-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0-2A7.75 7.75 0 0 0 0 7.75v8.5A7.75 7.75 0 0 0 7.75 24h8.5A7.75 7.75 0 0 0 24 16.25v-8.5A7.75 7.75 0 0 0 16.25 0h-8.5z" />
                <path d="M12 6.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 6.5zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5zm6.75-10.88a1.12 1.12 0 1 1-1.12-1.12 1.12 1.12 0 0 1 1.12 1.12z" />
              </svg>
            </Link>

            {/* TikTok */}
            <Link href="#" className="hover:text-teal-400 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.783 0h3.69c.267 2.113 1.686 3.67 3.843 4.14v3.72a7.147 7.147 0 0 1-3.843-1.17v7.873a7.437 7.437 0 1 1-7.437-7.437c.267 0 .54.02.807.06v3.8a3.56 3.56 0 1 0 2.94 3.5V0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Jangain. All rights reserved.
      </div>
    </footer>
  );
}
