"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="MA Yagmur Textile homepage">
        <img src="/assets/logo-cropped.png" alt="MA Yagmur Textile" />
      </Link>

      <nav className="site-nav" aria-label="Main menu">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="nav-button" type="button" aria-label="Account">
        <span></span>
      </button>
    </header>
  );
}
