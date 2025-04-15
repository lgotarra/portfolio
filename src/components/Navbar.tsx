"use client";

import Link from "next/link";
import { useState } from "react";
import MenuList, { MenuItem } from "./HamburguerMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems: MenuItem[] = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
  ];

  return (
    <nav className="sticky top-0 w-full px-6 py-4 border-b flex justify-between items-center bg-white dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold">
        Laura Gotarra
      </Link>
      <div className="flex items-center">
        {/* Desktop menu */}
        <div className="hidden sm:flex">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="px-4 py-2 rounded transition hover:text-theme-4"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="whitespace-nowrap ml-2 border-1 border-double border-theme-4 px-4 py-2 rounded-full hover:bg-theme-4 hover:text-white transition"
        >
          Say hi!
        </a>
        {/* Mobile menu */}
        {isMenuOpen && MenuList({ menuItems })}
      </div>
    </nav>
  );
}
