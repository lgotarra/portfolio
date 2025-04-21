"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-10 space-y-12">
      <div className="flex items-center justify-center h-full gap-6">
        <section className="text-center max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center">
            <Image
              src="/notfound.svg"
              alt="404 Error"
              width={350}
              height={350}
            />
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Error 404: Page Not Found
          </h2>
          <p>
            We&apos;ve looked everywhere but couldn&apos;t find the page you
            were looking for. It might have been removed, renamed, or never
            existed in the first place.
          </p>
          <Link href="/" className="text-xl font-bold text-primary">
            Go to Home Page
          </Link>
        </section>
      </div>
    </main>
  );
}
