import React from "react";
import Image from "next/image";
import pcbg from "@/public/assets/illustration/pcbg.svg";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-28 px-8">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-teal-100 opacity-60"></div>

        {/* Glow circles */}
        <div className="absolute top-10 left-10 w-60 h-60 bg-teal-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Left */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn Smarter,  
              <span className="text-teal-600"> Grow Faster</span>
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Join Jangian to upgrade your skills through engaging lessons, hands-on projects, and job-ready guidance.
            </p>

            <div className="mt-10 flex gap-5">
              <a className="px-8 py-3 rounded-full bg-teal-600 text-white text-lg hover:bg-teal-700 transition shadow-md">
                Explore Courses
              </a>
              <a className="px-8 py-3 rounded-full border border-gray-800 text-gray-800 text-lg hover:bg-gray-100 transition">
                Learn More
              </a>
            </div>
          </div>

          {/* Right */}
          <Image
            src={pcbg}
            alt="Learning Illustration"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-14">
            Why Students Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: "🚀", title: "Skill Acceleration", text: "Learn faster with structured courses and actionable steps." },
              { icon: "🎯", title: "Career Focused", text: "Everything you learn is aligned with real-world job needs." },
              { icon: "💡", title: "Interactive Learning", text: "Videos, quizzes, projects — all built to keep you engaged." },
             
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COURSE SLIDER ================= */}
      

      <section className="py-24 bg-gray-900 text-white relative">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center">
      Top Courses
    </h2>

    {/* Left & Right Scroll Gradient Fade */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent"></div>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent"></div>

    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-8 w-max pb-3">
        {[
          { title: "Web Development", img: "/assets/web.svg" },
          { title: "UI/UX Design", img: "/assets/ui.svg" },
          { title: "Cloud Engineering", img: "/assets/cloud.svg" },
        ].map((course, index) => (
          <div
            key={index}
            className="min-w-[260px] bg-gray-800/70 backdrop-blur-sm hover:bg-gray-700/70 transition rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-700 hover:border-teal-500"
          >
            {course.img && (
              <Image
                src={course.img}
                width={200}
                height={140}
                alt={course.title}
                className="rounded-lg mx-auto"
              />
            )}
            <h3 className="text-xl mt-4 font-semibold text-center">
              {course.title}
            </h3>
          </div>
        ))}

        {/* View All Card */}
        <div className="min-w-[260px] flex flex-col justify-center items-center bg-gray-800/60 border border-gray-700 rounded-2xl p-6 hover:border-teal-500 hover:bg-gray-700/60 transition group cursor-pointer">
          <div className="w-20 h-20 rounded-full bg-teal-600/20 flex items-center justify-center group-hover:bg-teal-600/30 transition">
            <span className="text-4xl text-teal-400">→</span>
          </div>
          <h3 className="text-xl mt-4 font-semibold text-center group-hover:text-teal-300">
            View All Courses
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ================= REVIEWS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-4xl font-bold mb-12">
            What Students Are Saying About Jangain
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "John", text: "The learning experience is top-notch. Beautiful UI and amazing teachers." },
              { name: "Chinedu", text: "I got hired after finishing the cloud engineering path. Worth every minute." },
              { name: "Mohammed", text: "Very interactive lessons. I never get bored learning here." },
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow">
                <p className="text-gray-700 italic">“{review.text}”</p>
                <h4 className="mt-4 text-teal-600 font-semibold">— {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RECOMMENDATIONS ================= */}
      <section className="py-24 bg-teal-600 text-white text-center">
        <h2 className="text-4xl font-extrabold">Recommended for You</h2>
        <p className="text-lg mt-3 mb-10 max-w-lg mx-auto">
          Handpicked courses to match your goals and learning style.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {["Intro to Coding", "Beginner UI Design", "SQL Basics"].map((title, i) => (
            <div
              key={i}
              className="bg-white text-gray-900 px-10 py-4 rounded-full font-semibold shadow hover:scale-105 transition"
            >
              {title}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
