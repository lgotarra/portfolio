"use client";

import Link from "next/link";
import { useState } from "react";
import MenuList, { MenuItem } from "./HamburguerMenu";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleRedirect = () => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    { href: "/about", label: "About", onClick: handleRedirect },
    {
      href: "/experience",
      label: "Experience",
      onClick: handleRedirect,
    },
  ];

  return (
    <nav className="sticky top-0 w-full px-6 py-4 border-b flex justify-between items-center bg-white dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold" onClick={handleRedirect}>
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
              onClick={handleRedirect}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {/* Contact button */}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="whitespace-nowrap mx-2 border-1 border-double border-theme-4 px-4 py-1.5 rounded-full hover:bg-theme-4 hover:text-white transition"
        >
          Say hi!
        </a>

        {/* Hamburguer menu icon */}
        <span
          className="cursor-pointer sm:hidden w-9 h-9 flex items-center justify-center rounded py-0.5 text-neutral-500 hover:bg-theme-4 hover:text-white transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={18} />
        </span>
      </div>
      {/* Mobile menu */}

      <div
        className={`transition-height ease duration-500 absolute top-full left-0 w-full bg-white dark:bg-neutral-900 sm:hidden border-t z-40 ${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        {MenuList({
          menuItems,
          itemStyle:
            "py-2 w-full flex justify-center text-white items-center bg-theme-4 transition hover:bg-white hover:text-theme-4",
        })}
      </div>
    </nav>
  );
}
