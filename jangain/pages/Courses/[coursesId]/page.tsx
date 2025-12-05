"use client";

import React, { useState } from "react";


// Place this file at: src/app/courses/[courseId]/page.tsx
// Assumptions: TailwindCSS is configured in your project

export default function CoursePage({ params }: { params?: { courseId?: string } }) {
  const courseId = params?.courseId ?? "course-123";

  // Mock data (replace with API calls / server data fetching as needed)
  const course = {
    id: courseId,
    title: "Intro to Modern Web Development",
    instructor: "Alex Doe",
    duration: "4h 32m",
    progress: 0.46,
    description:
      "A hands-on course covering modern frontend tooling, React, and production best practices.",
  };

  const lessons = [
    { id: "l1", title: "Welcome & Setup", length: "7:12", completed: true },
    { id: "l2", title: "React Fundamentals", length: "24:03", completed: true },
    { id: "l3", title: "Routing & App Router", length: "18:40", completed: false },
    { id: "l4", title: "State Management", length: "32:15", completed: false },
  ];

  const [notes, setNotes] = useState<string>("");
  const [comments, setComments] = useState(
    [
      { id: "c1", author: "Maya", text: "Great overview — thanks!" },
      { id: "c2", author: "Jon", text: "Could you share the slides?" },
    ] as { id: string; author: string; text: string }[]
  );

  const [newComment, setNewComment] = useState("");
  const [completedLessons, setCompletedLessons] = useState(() =>
    new Set(lessons.filter((l) => l.completed).map((l) => l.id))
  );

  function toggleComplete(lessonId: string) {
    const next = new Set(completedLessons);
    if (next.has(lessonId)) next.delete(lessonId);
    else next.add(lessonId);
    setCompletedLessons(next);
  }

  function addComment() {
    if (!newComment.trim()) return;
    setComments((c) => [
      ...c,
      { id: `c${Date.now()}`, author: "You", text: newComment.trim() },
    ]);
    setNewComment("");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="flex gap-6">
          <aside className="w-64 sticky top-4 h-fit">
            <Sidebar />
          </aside>

          <main className="flex-1">
            <div className="grid grid-cols-12 gap-6">

              {/* Left: Video + Comments + Next Lesson */}
              <section className="col-span-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                  <VideoPlayer lesson={lessons[2]} />
                </div>

                <div className="mt-6 space-y-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-3">Comments</h3>

                    <div className="space-y-3">
                      {comments.map((c) => (
                        <div key={c.id} className="flex gap-3 items-start">
                          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                            {c.author[0].toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{c.author}</div>
                            <div className="text-sm text-gray-700">{c.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-2">
                      <input
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring"
                      />
                      <button
                        onClick={addComment}
                        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                      >
                        Post
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-3">Next Lesson</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button className="p-3 bg-gray-100 rounded">
                          ▶
                        </button>
                        <div>
                          <div className="font-medium">{lessons[3].title}</div>
                          <div className="text-sm text-gray-500">{lessons[3].length}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleComplete(lessons[3].id)}
                        className="px-4 py-2 border rounded"
                      >
                        {completedLessons.has(lessons[3].id) ? "Mark as not completed" : "Mark as completed"}
                      </button>
                    </div>
                  </div>
                </div>

              </section>

              {/* Right: Course Card + Notes + Lesson List */}
              <aside className="col-span-4 space-y-6">
                <CourseCard course={course} progress={course.progress} />

                <NotesPanel notes={notes} setNotes={setNotes} />

                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-3">Lessons</h3>
                  <div className="divide-y">
                    {lessons.map((l) => (
                      <div key={l.id} className="flex items-center justify-between py-3">
                        <div>
                          <div className="font-medium">{l.title}</div>
                          <div className="text-sm text-gray-500">{l.length}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleComplete(l.id)}
                            className="px-3 py-1 border rounded text-sm"
                          >
                            {completedLessons.has(l.id) ? "Done" : "Start"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </aside>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Subcomponents ---------------------- */

function Sidebar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="text-2xl font-bold mb-6">LOGO</div>
      <nav className="space-y-2">
        <NavItem label="Dashboard" />
        <NavItem label="Courses" active />
        <NavItem label="Progress" />
        <NavItem label="Discussions" />
        <NavItem label="Profile" />
      </nav>
    </div>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className={`px-3 py-2 rounded cursor-pointer ${active ? "bg-indigo-50 font-semibold" : "text-gray-700"}`}>
      {label}
    </div>
  );
}

function VideoPlayer({ lesson }: { lesson: { id: string; title: string; length: string } }) {
  return (
    <div>
      <div className="bg-black aspect-video flex items-center justify-center text-white text-3xl">Video Player</div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{lesson.length} • Subtitle / transcript available</p>
          </div>
          <div className="text-sm text-gray-500">Share • Settings</div>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ course, progress }: { course: any; progress: number }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.instructor} • {course.duration}</p>

      <div className="mt-4">
        <div className="w-full bg-gray-100 h-3 rounded overflow-hidden">
          <div className="h-3 rounded bg-indigo-600" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
        <div className="text-sm text-gray-600 mt-2">Progress: {Math.round(progress * 100)}%</div>
      </div>

      <p className="text-sm text-gray-700 mt-3">{course.description}</p>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded">Resume</button>
        <button className="px-3 py-2 border rounded">Share</button>
      </div>
    </div>
  );
}

function NotesPanel({ notes, setNotes }: { notes: string; setNotes: (s: string) => void }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-3">Notes</h3>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Write quick notes for this lesson..."
        className="w-full h-28 border rounded p-2 focus:outline-none focus:ring"
      />
      <div className="mt-3 flex justify-end">
        <button className="px-3 py-2 bg-gray-100 rounded">Export</button>
      </div>
    </div>
  );
}
