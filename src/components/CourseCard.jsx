import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="glass-panel flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative h-40 w-full">
        <Image
          src={`/${course.image}`}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
          <span>{course.category}</span>
          <span>{course.duration}</span>
        </div>
        <h3 className="font-display text-lg text-slate-900">
          {course.title}
        </h3>
        <p className="text-sm text-slate-600">By {course.instructor}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-semibold text-slate-900">{course.rating} ★</span>
          <Link
            href={`/courses/${course.id}`}
            className="rounded-full border border-slate-900/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
