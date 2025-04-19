"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuItem } from "./MenuList";
import { FaBars } from "react-icons/fa";
import AnimatedMenu from "./AnimatedMenu";
import NavbarLink from "./NavbarLink";

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
    <nav className="sticky top-0 w-full px-6 py-4 flex justify-between items-center bg-neutral-50 dark:bg-neutral-900">
      <Link href="/" className="text-xl font-bold" onClick={handleRedirect}>
        Laura Gotarra
      </Link>
      <div className="flex items-center">
        {/* Desktop menu */}
        <div className="hidden sm:flex">
          {menuItems.map((item, index) => (
            <NavbarLink key={index} href={item.href} onClick={item.onClick}>
              {item.label}
            </NavbarLink>
          ))}
        </div>
        {/* Contact button */}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="whitespace-nowrap mx-2 border-1 border-double border-secondary px-4 py-1.5 rounded-full hover:bg-secondary hover:text-white transition"
        >
          Say hi!
        </a>

        {/* Hamburguer menu icon */}
        <span
          className="cursor-pointer sm:hidden w-9 h-9 flex items-center justify-center rounded py-0.5 text-neutral-500 hover:bg-secondary hover:text-white transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={18} />
        </span>
      </div>

      {/* Mobile menu */}
      <AnimatedMenu
        isMenuOpen={isMenuOpen}
        menuItems={menuItems}
        itemStyle="py-5 w-full flex justify-end text-white items-center bg-secondary transition hover:bg-white hover:text-secondary pr-8"
      />
    </nav>
  );
}
