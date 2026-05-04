'use client';
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const { data, isPending } = useSession();
    const user = data?.user;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-slate-500 bg-white/70 text-slate-900 backdrop-blur-lg">
            <header className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Link href="/" className="font-display text-xl font-semibold tracking-wide sm:text-2xl">
                        <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-emerald-600 bg-clip-text text-transparent">
                            Skill Sphere
                        </span>
                    </Link>
                </div>
                <ul className="hidden items-center gap-6 text-sm font-semibold md:flex">
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
                                <span className="hidden font-semibold text-slate-700 sm:block">
                                    {user.name || "Learner"}
                                </span>
                            </div>
                            <button
                                onClick={() => signOut()}
                                className="cursor-pointer rounded-full border border-slate-500 px-4 py-2 font-semibold text-slate-900 hover:border-lime-400 hover:bg-lime-300 hover:text-slate-950"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/auth/signin"
                                className="rounded-full border border-slate-300 px-4 py-2 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
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
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-lime-300 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <span className="relative block h-3.5 w-5">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                                    isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition ${
                                    isMenuOpen ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition ${
                                    isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-slate-200/70 bg-white/90 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-3 text-sm">
                        <Link
                            className="hover:text-lime-300"
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            className="hover:text-lime-300"
                            href="/courses"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Courses
                        </Link>
                        <Link
                            className="hover:text-lime-300"
                            href="/my-profile"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            My Profile
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;