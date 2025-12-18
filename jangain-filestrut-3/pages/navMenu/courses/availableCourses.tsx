export default function CoursesGridPreview() {
    const courses = [
      { title: "Frontend Development", description: "Learn HTML, CSS, JavaScript, and React." },
      { title: "Backend Development", description: "Master Node.js, databases, and APIs." },
      { title: "UI/UX Design", description: "Design beautiful and user‑friendly interfaces." },
      { title: "Data Structures", description: "Understand algorithms and problem solving." },
      { title: "DevOps Essentials", description: "CI/CD, cloud deployment, and automation." },
      { title: "Mobile Development", description: "Build apps with React Native and Expo." },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-10">
        <h1 className="text-3xl font-bold text-center mb-10">Available Courses</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
              src="https://via.placeholder.com/300x180"
              alt="Course image"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
  
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  