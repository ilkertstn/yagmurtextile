"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", labelTr: "Ana Sayfa" },
  { href: "/manufacturing", label: "Manufacturing", labelTr: "Üretim" },
  { href: "/collection", label: "Collection", labelTr: "Koleksiyon" },
  { href: "/contact", label: "Contact", labelTr: "İletişim" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTurkish = pathname === "/tr" || pathname.startsWith("/tr/");

  const localizedPath = (href) => {
    if (!isTurkish) {
      return href;
    }

    return href === "/" ? "/tr" : `/tr${href}`;
  };

  const englishPath = isTurkish ? pathname.replace(/^\/tr/, "") || "/" : pathname;
  const turkishPath = isTurkish ? pathname : pathname === "/" ? "/tr" : `/tr${pathname}`;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link
        className="brand"
        href={isTurkish ? "/tr" : "/"}
        aria-label="MA Yagmur Textile homepage"
      >
        <img
          className={isTurkish ? "brand-logo-tr" : undefined}
          src={isTurkish ? "/assets/logo-turkce-cropped.png" : "/assets/logo-cropped.png"}
          alt={isTurkish ? "MA Yağmur Tekstil" : "MA Yagmur Textile"}
        />
      </Link>

      <nav
        className={`site-nav ${isMenuOpen ? "is-open" : ""}`}
        aria-label="Main menu"
        id="site-menu"
      >
        {navItems.map((item) => {
          const href = localizedPath(item.href);
          const isActive =
            href === "/" || href === "/tr" ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              key={item.href}
              href={href}
              aria-current={isActive ? "page" : undefined}
            >
              {isTurkish ? item.labelTr : item.label}
            </Link>
          );
        })}
      </nav>

      <div className="language-switcher" aria-label="Language selection">
        <Link href={englishPath} aria-current={!isTurkish ? "true" : undefined}>
          EN
        </Link>
        <Link href={turkishPath} aria-current={isTurkish ? "true" : undefined}>
          TR
        </Link>
      </div>

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
