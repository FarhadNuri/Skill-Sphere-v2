"use client";
import Image from "next/image";
import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import { useSession } from "@/lib/auth-client";

const tips = [
  "Schedule 30-minute daily study blocks.",
  "Practice by rebuilding small projects.",
  "Summarize each lesson in your own words.",
  "Use the Pomodoro technique for focus.",
];

const instructors = [
  {
    name: "Ava Benson",
    image: "/images/img5.png",
    role: "Front-End Lead",
    focus: "Design Systems",
  },
  {
    name: "Leo Martinez",
    image: "/images/img2.png",
    role: "Growth Strategist",
    focus: "Digital Marketing",
  },
  {
    name: "Priya Raman",
    image: "/images/img1.png",
    role: "Product Designer",
    focus: "UX Research",
  },
  {
    name: "Noah Kim",
    image: "/images/img12.png",
    role: "Data Scientist",
    focus: "Machine Learning",
  },
];

export default function Home() {
  const { data } = useSession();
  const user = data?.user;
  const popularCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const trendingCourses = courses.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="hero-gradient animate__animated animate__fadeIn">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-white">
            <p className="text-sm uppercase tracking-[0.4em] text-lime-200">
              Upgrade Your Skills Today
            </p>
            <h1 className="font-display text-4xl leading-tight md:text-5xl">
              Learn from Industry Experts and build real-world mastery.
            </h1>
            <p className="max-w-xl text-base text-slate-100/90">
              SkillSphere brings together guided programs, expert mentors, and
              live learning paths for Web Development, Design, Marketing, and
              more.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses"
                className="rounded-full bg-lime-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-lime-200"
              >
                Explore Courses
              </Link>
              {!user && (
                <Link
                  href="/auth/signup"
                  className="rounded-full border border-white/50 px-6 py-3 text-center text-sm font-semibold text-white hover:border-lime-200 hover:text-lime-200"
                >
                  Start Free Account
                </Link>
              )}
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-slate-900">
            <div className="space-y-4">
              <p className="text-sm uppercase font-semibold tracking-[0.3em] text-slate-600">
                Next Cohort
              </p>
              <h2 className="font-display text-2xl">Skill-Based Programs</h2>
              <div className="grid gap-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3">
                  <span>Full-Stack Web Dev</span>
                  <span className="text-lime-500">12 Weeks</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3">
                  <span>Creative UI/UX</span>
                  <span className="text-lime-500">8 Weeks</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3">
                  <span>Marketing Growth Lab</span>
                  <span className="text-lime-500">6 Weeks</span>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                New releases every month, tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
              Popular Courses
            </p>
            <h2 className="section-title font-display text-3xl text-slate-900">
              Top Rated Picks
            </h2>
          </div>
          <Link href="/courses" className="text-sm font-semibold text-slate-700">
            View All
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="grid gap-10 rounded-3xl bg-slate-950 px-8 py-12 text-slate-100 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-lime-200">
              Learning Tips
            </p>
            <h2 className="font-display text-3xl">
              Stay consistent and learn smarter.
            </h2>
            <p className="text-sm text-slate-300">
              Small wins build big skills. Try these focused study techniques.
            </p>
          </div>
          <div className="grid gap-3 text-sm">
            {tips.map((tip) => (
              <div
                key={tip}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {tip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="mb-8">
          <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
            Top Instructors
          </p>
          <h2 className="section-title font-display text-3xl text-slate-900">
            Learn with the best mentors
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="glass-panel rounded-2xl p-5 text-slate-900"
            >
              <div className="mb-4 h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-display text-lg">{instructor.name}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {instructor.role}
              </p>
              <p className="text-sm text-slate-600">Focus: {instructor.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8">
          <p className="text-xs uppercase font-semibold tracking-[0.4em] text-slate-600">
            Trending Courses
          </p>
          <h2 className="section-title font-display text-3xl text-slate-900">
            New releases this month
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {trendingCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
