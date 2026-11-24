import { Github, Linkedin } from "lucide-react";
import XIcon from "./XIcon";
import { links } from "@/data/site";

const socials = [
  { href: links.github, label: "GitHub", Icon: Github },
  { href: links.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: links.x, label: "X", Icon: XIcon },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t-2 border-ink bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 sm:px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">© {new Date().getFullYear()} Shanjiv A</p>
        <ul className="flex flex-wrap gap-2.5">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="btn press !px-3.5 !py-1.5 text-sm">
                <Icon className="size-4" aria-hidden />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
