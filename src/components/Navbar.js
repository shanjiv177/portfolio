"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { links } from "@/data/site";

const items = [
  { href: "/#work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] bg-panel border-b-2 border-ink transition-shadow duration-200"
      style={{ boxShadow: scrolled ? "0 4px 0 0 var(--ink)" : "none" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16" aria-label="Main">
        <Link href="/" className="flex items-center gap-2.5 font-black text-lg" style={{ fontStretch: "120%" }}>
          <span aria-hidden className="grid size-9 place-items-center border-2 border-ink bg-systems text-base">
            SA
          </span>
          Shanjiv A
        </Link>

        <ul className="hidden sm:flex items-center gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="block px-3.5 py-1.5 font-bold border-2 border-transparent hover:border-ink hover:bg-web3 aria-[current=page]:border-ink aria-[current=page]:bg-systems"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <a href={links.resume} download className="btn press !py-1.5">
              <Download className="size-4" aria-hidden />
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="sm:hidden btn press !p-2"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id="mobile-menu"
            className="sm:hidden overflow-hidden border-t-2 border-ink bg-panel"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 42 }}
          >
            {items.map((item) => (
              <li key={item.href} className="border-b-2 border-ink last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3.5 text-lg font-bold active:bg-web3"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={links.resume}
                download
                className="flex items-center gap-2 px-5 py-3.5 text-lg font-bold active:bg-web3"
              >
                <Download className="size-5" aria-hidden />
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
