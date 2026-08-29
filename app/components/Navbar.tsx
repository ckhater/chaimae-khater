"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/app/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("#about");

  React.useEffect(() => {
    const onScroll = () => {
      let current = "#about";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el && el.getBoundingClientRect().top <= 80) {
          current = link.href;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-4 sm:px-6">
        <div className="w-full rounded-full border border-foreground/10 bg-background/70 px-4 backdrop-blur sm:px-6">
          <nav className="flex h-14 items-center justify-between">
            <a
              href="#home"
              onClick={() => goTo("#home")}
              className="text-lg font-bold tracking-tight"
            >
              Chaimae<span className="text-primary">.</span>khater
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    active === link.href
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:text-primary"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>

        <div
          className={`w-full overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
            open ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="mx-3 mt-2 flex flex-col gap-1 rounded-2xl border border-foreground/10 bg-background/80 px-4 py-2 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link.href);
                }}
                className={`py-3 text-sm font-medium transition-colors hover:text-primary ${
                  active === link.href ? "text-primary" : "text-muted"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
