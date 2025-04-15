"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full px-6 py-4 border-b flex justify-between items-center bg-white dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold">
        Laura Gotarra
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/about"
          className="px-4 py-2 rounded transition hover:text-theme-4"
        >
          About
        </Link>
        <Link
          href="/experience"
          className="px-4 py-2 rounded transition hover:text-theme-4"
        >
          Experience
        </Link>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="ml-4 border-1 border-double border-theme-4 px-4 py-2 rounded-full hover:bg-theme-4 hover:text-white transition"
        >
          Say hi!
        </a>
      </div>
    </nav>
  );
}
