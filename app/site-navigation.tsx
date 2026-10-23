"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Tyres", href: "/tyres" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNavigation() {
  const pathname = usePathname();

  return (
    <nav className="main-nav" aria-label="Main navigation">
      {navigation.map((item) => (
        <Link
          aria-current={pathname === item.href ? "page" : undefined}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
