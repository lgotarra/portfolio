"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full px-6 py-4 border-b flex justify-between items-center bg-white dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold">
        Laura Gotarra
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/experience" className="hover:underline">
          Experience
        </Link>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Say hi!
        </a>
      </div>
    </nav>
  );
}
