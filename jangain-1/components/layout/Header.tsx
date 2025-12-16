// // import Link from "next/link";
// // import Image from "next/image";
// // import React from "react";

// // const navMenu = ["Courses", "Community", "Contact", "About"];

// // const Header: React.FC = () => {
// //   return (
// //     <header className="w-full bg-white sticky top-0 z-50 border-b">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

// //         {/* Logo */}
// //         <Link href="/" className="flex items-center">
// //           <Image
// //             src="/assets/jangainLogo3.png"
// //             alt="Jangain Logo"
// //             width={120}
// //             height={40}
// //             priority
// //           />
// //         </Link>

// //         {/* Navigation */}
// //         <nav className="w-full md:w-auto">
// //           <ul className="flex justify-center md:justify-start gap-6 text-lg font-semibold text-gray-600 whitespace-nowrap">
// //             {navMenu.map((item) => (
// //               <li key={item}>
// //                 <Link
// //                   href={`/navMenu/${item.toLowerCase()}`}
// //                   className="
// //                     relative px-2 py-1 transition
// //                     hover:text-teal-600
// //                     after:absolute after:left-0 after:-bottom-1
// //                     after:h-[2px] after:w-0 after:bg-teal-500
// //                     after:transition-all after:duration-300
// //                     hover:after:w-full
// //                   "
// //                 >
// //                   {item}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         {/* Auth Buttons */}
// //         <div className="flex gap-3 items-center">
// //           <Link
// //             href="/login"
// //             className="px-4 py-2 rounded-full text-teal-600 font-semibold hover:bg-teal-50 transition"
// //           >
// //             Login
// //           </Link>

// //           <Link
// //             href="/signup"
// //             className="px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition shadow"
// //           >
// //             Sign Up
// //           </Link>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// // components/layout/Header.tsx

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import React, { useState } from "react";

// const navMenu = ["Community", "Contact", "About"];

// const courseMenu = [
//   { name: "Web Development", href: "/courses/web" },
//   { name: "UI / UX Design", href: "/courses/ui-ux" },
//   { name: "Cyber Security", href: "/courses/cyber" },
//   { name: "Cloud Engineering", href: "/courses/cloud" },
//   { name: "All Courses", href: "/courses" },
// ];

// const Header: React.FC = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full bg-white sticky top-0 z-50 border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/assets/jangainLogo3.png"
//             alt="Jangain Logo"
//             width={120}
//             height={40}
//             priority
//           />
//         </Link>

//         {/* Navigation */}
//         <nav className="relative">
//           <ul className="flex gap-6 text-lg font-semibold text-gray-600">

//             {/* Courses Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => setOpen(true)}
//               onMouseLeave={() => setOpen(false)}
//             >
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="
//                   flex items-center gap-1 relative px-2 py-1
//                   hover:text-teal-600 transition
//                   after:absolute after:left-0 after:-bottom-1
//                   after:h-[2px] after:w-0 after:bg-teal-500
//                   after:transition-all after:duration-300
//                   hover:after:w-full
//                 "
//               >
//                 Courses
//                 <span className="text-sm">▾</span>
//               </button>

//               {/* Dropdown */}
//               <div
//                 className={`
//                   absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-lg border
//                   transition-all duration-200 origin-top
//                   ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
//                 `}
//               >
//                 <ul className="py-2">
//                   {courseMenu.map((course) => (
//                     <li key={course.name}>
//                       <Link
//                         href={course.href}
//                         className="block px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition"
//                       >
//                         {course.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>

//             {/* Other Menu Items */}
//             {navMenu.map((item) => (
//               <li key={item}>
//                 <Link
//                   href={`/${item.toLowerCase()}`}
//                   className="
//                     relative px-2 py-1 transition
//                     hover:text-teal-600
//                     after:absolute after:left-0 after:-bottom-1
//                     after:h-[2px] after:w-0 after:bg-teal-500
//                     after:transition-all after:duration-300
//                     hover:after:w-full
//                   "
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Auth Buttons */}
//         <div className="flex gap-3 items-center">
//           <Link
//             href="/login"
//             className="px-4 py-2 rounded-full text-teal-600 font-semibold hover:bg-teal-50 transition"
//           >
//             Login
//           </Link>

//           <Link
//             href="/signup"
//             className="px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition shadow"
//           >
//             Sign Up
//           </Link>
//         </div>

//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const navMenu = ["Community", "Contact", "About"];

const courseMenu = [
  { title: "Web Development", href: "/courses/web" },
  { title: "UI / UX Design", href: "/courses/ui-ux" },
  { title: "Cyber Security", href: "/courses/cyber" },
  { title: "Cloud Engineering", href: "/courses/cloud" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/jangainLogo3.png"
            alt="Jangain Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="relative hidden md:flex items-center gap-8 text-lg font-semibold text-gray-600">

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-teal-600 transition">
              Courses <span className="text-sm"> ▾</span>
            </button>

            {/* Dropdown Panel */}
            <div
              className={`
                absolute left-1/2 -translate-x-1/2 mt-4 w-64
                rounded-xl bg-white shadow-xl border
                transition-all duration-200
                ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `}
            >
              <div className="flex flex-col p-2">
                {courseMenu.map((course) => (
                  <Link
                    key={course.title}
                    href={course.href}
                    className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-teal-50 hover:text-teal-600 transition"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>

              <div className="border-t px-4 py-3 bg-gray-50 rounded-b-xl">
                <Link
                  href="/courses"
                  className="text-sm font-semibold text-teal-600 hover:underline"
                >
                  View all courses →
                </Link>
              </div>
            </div>
          </div>

          {navMenu.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-teal-600 transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Auth */}
        <div className="flex gap-3 items-center">
          <Link
            href="/login"
            className="px-4 py-2 rounded-full text-teal-600 font-semibold hover:bg-teal-50 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition shadow"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
