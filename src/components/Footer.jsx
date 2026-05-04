'use client';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-display text-xl tracking-wide">SkillSphere</p>
          <p className="text-sm text-slate-400">
            Learn smarter with curated courses and expert-led lessons.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-slate-100">Contact</p>
          <p>Email: hello@skillsphere.io</p>
          <p>Phone: +1 (555) 219-8844</p>
          <p>Location: Remote, Global</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-slate-100">Legal</p>
          <Link href="#" className="block hover:text-lime-300">
            Terms & Conditions
          </Link>
          <Link href="#" className="block hover:text-lime-300">
            Privacy Policy
          </Link>
        </div>
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-slate-100">Social</p>
          <Link href="#" className="block hover:text-lime-300">
            LinkedIn
          </Link>
          <Link href="#" className="block hover:text-lime-300">
            YouTube
          </Link>
          <Link href="#" className="block hover:text-lime-300">
            X / Twitter
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
