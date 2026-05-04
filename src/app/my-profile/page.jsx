import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  if (!user) {
    redirect("/auth/signin?callback=/my-profile");
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
        My Profile
      </p>
      <h1 className="font-display text-4xl text-slate-900">Welcome back</h1>

      <div className="glass-panel mt-8 flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center">
        <div className="h-24 w-24 overflow-hidden rounded-full border border-lime-300/60">
          <Image
            src={user.image || "/images/c2.png"}
            alt={user.name || "User"}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="font-display text-2xl text-slate-900">
            {user.name || "SkillSphere Learner"}
          </h2>
          <p className="text-sm text-slate-600">Email: {user.email}</p>
        </div>
        <Link
          href="/my-profile/update"
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default MyProfilePage;
