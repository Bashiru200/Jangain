import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import pcbg from "../public/assets/pcbg.svg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const HomePage : React.FC = () => {
  return (
    <div>
      <section className="pt-32 px-8 pb-20 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-12">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Upgrade Your Skills
            <span className="text-teal-600">With the Envolving Trends Courses</span>
          </h1>

          <p className="mt-4 text-gray-gray-600 text-lg">
            Access expert-led lessons, hands-on projects, and certifications that help you grow professioanlly.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="navMenu/courses/availableCourses"
              className="bg-teal-600 text-white px-6 py-3 rounded-full text-lg hover:bg-teal-700 transition">
                Explore Courses
            </a>
            <a href="#features"
              className="border border-teal-600 text-teal-600 px-6 py-3 rounded-full text-lg hover:bg-teal-50 transition">
                Learn More 
            </a>
          </div>
        </div>
        <img
          src="assets/pcbg.svg"
          alt="Learning illustration"
          className="rounded-2xl shadow-lg w-full max-w-lg"
          />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Why Choose Envolving Trends Courses?
          </h2>

          <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: "🚀", title: "Boost Your Skills", description: "High-quality courses design to accelerate your learning"},
              { icon: "💼", title: "Job Ready", text: "Practical content that prepares you for real-world roles." },
              { icon: "✨", title: "Engaging Experience", text: "Interactive lessons, animations, and visual learning tools." },
              { icon: "📚", title: "Huge Library", text: "Hundreds of lessons organized for beginner to advanced learners." },
              { icon: "🤝", title: "Mentor Support", text: "Get guidance from certified instructors whenever you need it." },
              { icon: "🔒", title: "Trusted Platform", text: "Join thousands of students learning safely and securely." },
            ].map((item, i) => (
              <div key={1}
                className="group bg-gray-800 p-8 rounded-xl border-gray-700 hover:border-teal-400 transition-all">
                  <div className="text-5xl mb mb-5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
};

export default HomePage;