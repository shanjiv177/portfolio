import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 py-6 mt-12">
      <ul className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <li className="flex gap-1 justify-center items-center hover:text-blue-400">
          <Github className="w-4 h-4" />
          <Link
            href="https://github.com/shanjiv177"
            target="_blank"
            rel="noopener"
            className="transition-colors"
          >
            GitHub
          </Link>
        </li>
        <li className="flex gap-1 justify-center items-center hover:text-blue-400">
          <Linkedin className="w-4 h-4" />
          <Link
            href="https://linkedin.com/in/shanjiv"
            target="_blank"
            rel="noopener"
            className="transition-colors"
          >
            LinkedIn
          </Link>
        </li>
        <li className="flex gap-1 justify-center items-center hover:text-blue-400">
          <Twitter className="w-4 h-4" />
          <Link
            href="https://x.com/shanjiv177"
            target="_blank"
            rel="noopener"
            className="transition-colors"
          >
            X/Twitter
          </Link>
        </li>
      </ul>
    </footer>
  );
}
