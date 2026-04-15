"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="MA Yagmur Textile homepage">
        <img src="/assets/logo-cropped.png" alt="MA Yagmur Textile" />
      </Link>

      <nav
        className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Main menu"
        id="site-menu"
      >
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

      <button
        className={`nav-button ${isMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="site-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
