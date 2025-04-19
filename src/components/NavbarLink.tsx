"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavbarLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function NavbarLink({
  href,
  children,
  onClick,
  className = "",
}: NavbarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-2 rounded transition ${
        isActive ? "text-secondary" : "hover:text-secondary"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
