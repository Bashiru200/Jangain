"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Start learning today
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl text-gray-700 border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border text-gray-600 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl border text-gray-600 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input 
              type="confirm password"
              required
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-xl border text-gray-600 border-gray-200 focus:ring-2 focus:ring-teal-500 focus:outline-none" />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
