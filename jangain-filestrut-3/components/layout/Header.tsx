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
