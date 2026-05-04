import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        Page Not Found
      </p>
      <h1 className="font-display text-4xl text-slate-900">
        We could not find that page.
      </h1>
      <p className="text-sm text-slate-600">
        Try heading back to the course catalog or the home page.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Go Home
        </Link>
        <Link
          href="/courses"
          className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
