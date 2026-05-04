const CoursesLoading = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-40 rounded bg-slate-200" />
        <div className="h-10 w-64 rounded bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-56 rounded-2xl bg-slate-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesLoading;
