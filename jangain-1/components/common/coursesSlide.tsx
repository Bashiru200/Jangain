import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Learn At Your Pace",
    desc: "Access curated lessons that match your learning journey.",
    img: "/pcbg.svg",
  },
  {
    id: 2,
    title: "Boost Your Skills",
    desc: "Interactive challenges and quizzes to improve retention.",
    img: "/learning2.svg",
  },
  {
    id: 3,
    title: "Achieve Your Goals",
    desc: "Track your progress and stay motivated every day.",
    img: "/learning3.svg",
  },
];

export default function SliderShow() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  const current = items[index];

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10 bg-white p-6 rounded-3xl shadow-xl">
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow"
      >
        <ChevronLeft />
      </button>

      {/* Content */}
      <div className="text-center px-10 transition-all duration-300 ease-in-out">
        <img
          src={current.img}
          alt={current.title}
          className="w-full max-h-72 object-contain mx-auto mb-6"
        />

        <h2 className="text-2xl font-semibold mb-2">{current.title}</h2>
        <p className="text-gray-600">{current.desc}</p>
      </div>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition shadow"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
