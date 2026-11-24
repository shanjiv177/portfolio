import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import XIcon from "./XIcon";
import { links } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="brutal !bg-web3 p-7 sm:p-12 shadow-brutal-lg grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center">
        <div>
          <h2 className="display text-[clamp(2.4rem,7vw,5rem)] max-w-[14ch]">Let&apos;s build something.</h2>
          <p className="mt-6 text-xl max-w-[46ch]">
            A system that has to stay up, a network for an event, or a hackathon team with a free seat. Email me, or find me on LinkedIn or X.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${links.email}`} className="btn btn-main press">
              <Mail className="size-4" aria-hidden />
              Email me
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn press">
              <Linkedin className="size-4" aria-hidden />
              Find me on LinkedIn
            </a>
            <a href={links.x} target="_blank" rel="noopener noreferrer" className="btn press">
              <XIcon />
              Find me on X
            </a>
          </div>
        </div>

        {/* A postcard: the one photo of me away from a desk */}
        <div className="mx-auto w-full max-w-80 -rotate-3 border-2 border-ink bg-panel p-2 shadow-brutal transition-transform duration-200 hover:rotate-0">
          <div className="relative aspect-[4/3] border-2 border-ink">
            <Image
              src="/shanjiv-coast.jpg"
              alt="Shanjiv smiling on a cliff above the sea, with palm trees along the coast"
              fill
              sizes="(min-width: 1024px) 320px, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
