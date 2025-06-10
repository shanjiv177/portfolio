"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full border-b-2 z-[100]">
      <div className="flex items-center justify-between mx-auto max-w-4xl px-4 py-2">
        <div className="py-2 text-2xl sm:text-3xl font-bold text-blue-400">
          <Link href="/">Shanjiv A</Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="sm:hidden p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <X className="cursor-pointer"/>
            ) : (
              <Menu className="cursor-pointer"/>
            )}
          </svg>
        </button>
        {/* Nav Links */}
        <ul
          className={`flex-col sm:flex-row sm:h-14 flex items-center space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:static top-14 left-0 w-full sm:w-auto z-20 transition-all duration-200
            ${menuOpen ? "flex bg-neutral-900/80 backdrop-blur-sm shadow-lg border-b border-neutral-800 py-4" : "hidden sm:flex bg-transparent"}`}
        >
          {/* <li>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto px-4 py-2 transition-colors">
                About
              </Button>
            </Link>
          </li> */}
          <li>
            <Link href="/blogs" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto px-4 py-2 transition-colors">
                Blogs
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto px-4 py-2 transition-colors">
                Projects
              </Button>
            </Link>
          </li>
          {/* <li>
            <Link href="/#contact" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto px-4 py-2 transition-colors">
                Contact
              </Button>
            </Link>
          </li> */}
        </ul>
      </div>
      {/* Optional: Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-10 sm:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;