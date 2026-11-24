import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import LayerStack from "./LayerStack";
import { links, highlights } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-32 pb-16">
      <div className="flex flex-col-reverse items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h1
          className="display text-[clamp(3.4rem,13vw,9.5rem)]"
          style={{ textShadow: "0.045em 0.045em 0 var(--systems)" }}
        >
          <span className="rise-line">
            <span>Shanjiv A</span>
          </span>
        </h1>
        <div className="settle shrink-0 sm:mb-2" style={{ "--d": "150ms" }}>
          <div className="w-24 rotate-2 border-2 border-ink bg-panel p-1.5 shadow-brutal-lg transition-transform duration-200 hover:rotate-0 sm:w-28 lg:w-40">
            <div className="relative aspect-[4/5] border-2 border-ink bg-ink">
              <Image
                src="/shanjiv.jpg"
                alt="Shanjiv smiling, in an IRIS polo"
                fill
                priority
                sizes="(min-width: 1024px) 160px, 112px"
              className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
        <div className="flex flex-col">
          <p className="settle text-2xl sm:text-[1.7rem] leading-snug max-w-[30ch]" style={{ "--d": "250ms" }}>
            I&apos;m a developer who likes taking software apart to see how it works, and building
            things that hold up when people rely on them.
          </p>

          <ul className="settle mt-7 space-y-2" style={{ "--d": "380ms" }} aria-label="Highlights">
            {highlights.map((h) => {
              const led = (
                <span
                  aria-hidden
                  className={`mt-[0.4em] size-3 shrink-0 border-2 border-ink ${h.live ? "bg-networks led-live" : "bg-panel"}`}
                />
              );
              return (
                <li key={h.text} className="flex gap-3 font-medium leading-snug">
                  {led}
                  {h.href ? (
                    <Link href={h.href} className="underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-ink hover:bg-web3">
                      {h.text}
                    </Link>
                  ) : (
                    <span>{h.text}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="settle mt-9 flex flex-wrap gap-3 lg:mt-auto lg:pt-8" style={{ "--d": "500ms" }}>
            <Link href="#contact" className="btn btn-main press">
              <Mail className="size-4" aria-hidden />
              Email me
            </Link>
            <a href={links.resume} download className="btn press">
              <Download className="size-4" aria-hidden />
              Resume
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn press !px-3" aria-label="GitHub" title="GitHub">
              <Github className="size-5" aria-hidden />
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="btn press !px-3" aria-label="LinkedIn" title="LinkedIn">
              <Linkedin className="size-5" aria-hidden />
            </a>
          </div>
        </div>

        <LayerStack />
      </div>
    </section>
  );
}
