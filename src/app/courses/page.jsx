'use client';
import { useMemo, useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

const CoursesPage = () => {
  const [query, setQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return courses;
    return courses.filter((course) =>
      course.title.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-10 space-y-3">
        <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
          All Courses
        </p>
        <h1 className="font-display text-4xl text-slate-900">
          Explore every program
        </h1>
        <p className="text-sm text-slate-600">
          Search courses by title and pick the perfect learning path.
        </p>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-400 focus:outline-none"
          placeholder="Search by course title..."
        />
      </div>

      {filteredCourses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
          No courses match your search. Try another title.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
