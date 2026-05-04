import Image from "next/image";
import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { auth } from "@/lib/auth";
import courses from "@/data/courses.json";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) {
    redirect(`/auth/signin?callback=/courses/${params.id}`);
  }

  const course = courses.find((item) => String(item.id) === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl">
            <Image
              src={`/${course.image}`}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
              {course.category}
            </p>
            <h1 className="font-display text-4xl text-slate-900">
              {course.title}
            </h1>
            <p className="text-sm text-slate-600">By {course.instructor}</p>
            <p className="text-base text-slate-600">{course.description}</p>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 text-slate-900">
          <h2 className="font-display text-2xl">Course Details</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>Level</span>
              <span className="font-semibold text-slate-900">{course.level}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration</span>
              <span className="font-semibold text-slate-900">{course.duration}</span>
            </div>
            <div className="flex justify-between">
              <span>Rating</span>
              <span className="font-semibold text-slate-900">{course.rating} ★</span>
            </div>
            <div className="flex justify-between">
              <span>Students</span>
              <span className="font-semibold text-slate-900">{course.students}</span>
            </div>
            <div className="flex justify-between">
              <span>Price</span>
              <span className="font-semibold text-slate-900">{course.price}</span>
            </div>
          </div>
          <button className="mt-6 w-full rounded-full bg-lime-300 px-4 py-3 text-sm font-semibold text-slate-950">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
          Curriculum
        </p>
        <h2 className="font-display text-3xl text-slate-900">
          What you will learn
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {course.curriculum.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
