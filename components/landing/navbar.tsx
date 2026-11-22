"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#world", label: "Explore" },
  { href: "#story", label: "Story" },
  { href: "#memories", label: "Memories" },
  { href: "#share", label: "Share" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] transition-colors duration-300 ${
        scrolled ? "bg-white/70 shadow-[0_10px_40px_-28px_rgba(26,11,60,0.6)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-4">
        <a href="#hero" className="font-display text-2xl tracking-wide text-primary">
          Memora
        </a>
        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-body text-primary/80 hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#close" className="btn-primary ml-auto md:hidden">
          Create
        </a>
      </div>
    </header>
  );
}
