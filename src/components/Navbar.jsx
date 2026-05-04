'use client';
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const { data, isPending } = useSession();
    const user = data?.user;

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 text-slate-100 backdrop-blur-lg">
            <header className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-lime-300" />
                    <Link href="/" className="font-display text-lg tracking-wide">
                        SkillSphere
                    </Link>
                </div>
                <ul className="hidden items-center gap-6 text-sm md:flex">
                    <li>
                        <Link className="hover:text-lime-300" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-lime-300" href="/courses">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-lime-300" href="/my-profile">
                            My Profile
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-3 text-sm">
                    {isPending ? (
                        <span className="text-slate-400">Loading...</span>
                    ) : user ? (
                        <>
                            <div className="flex items-center gap-2">
                                <div className="h-9 w-9 overflow-hidden rounded-full border border-lime-300/60">
                                    <Image
                                        src={user.image || "/images/c1.png"}
                                        alt={user.name || "User avatar"}
                                        width={36}
                                        height={36}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <span className="hidden text-slate-300 sm:block">
                                    {user.name || "Learner"}
                                </span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="rounded-full border border-lime-300/60 px-4 py-2 text-lime-200 hover:bg-lime-300 hover:text-slate-950"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/signin"
                                className="rounded-full border border-white/20 px-4 py-2 hover:border-lime-300 hover:text-lime-200"
                            >
                                Login
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="rounded-full bg-lime-300 px-4 py-2 text-slate-950 hover:bg-lime-200"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </header>
        </nav>
    );
};

export default Navbar;