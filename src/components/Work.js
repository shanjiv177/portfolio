"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { experience } from "@/data/site";
import Counter from "./Counter";
import LogoPlate from "./LogoPlate";

export default function Work() {
  const listRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <h2 className="heading text-4xl sm:text-5xl mb-12">Where I&apos;ve worked</h2>

      <ol ref={listRef} className="relative ml-5">
        {/* The rail: grey track, black fill that follows the scroll */}
        <div aria-hidden className="absolute left-0 top-2 bottom-2 w-1.5 -translate-x-1/2 bg-ink/15" />
        <motion.div
          aria-hidden
          className="absolute left-0 top-2 bottom-2 w-1.5 -translate-x-1/2 bg-ink origin-top"
          style={{ scaleY: reduce ? 1 : fill }}
        />

        {experience.map((job) => (
          <li key={job.company} className="relative pl-8 sm:pl-14 pb-14 last:pb-0">
            <span
              aria-hidden
              className="absolute left-0 top-1 -translate-x-1/2 bg-panel border-2 border-ink px-1.5 py-0.5 text-sm font-black"
              style={{ fontStretch: "120%" }}
            >
              {job.year}
            </span>

            <article className="brutal p-5 sm:p-7">
              <header className="flex flex-col-reverse gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="heading text-2xl sm:text-3xl break-words">{job.company}</h3>
                  <p className="font-semibold">
                    {job.role}, {job.place}
                  </p>
                  <p className="text-ink-soft text-[0.95rem]">{job.period}</p>
                  {job.previous?.map((r) => (
                    <p key={r.role} className="mt-1.5 text-[0.95rem]">
                      Before that, {r.role}, <span className="text-ink-soft">{r.period}</span>
                    </p>
                  ))}
                </div>
                <LogoPlate src={job.logo} />
              </header>

              {job.stats && (
                <dl className="mt-6 grid sm:grid-cols-2 border-2 border-ink">
                  {job.stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`flex flex-col p-4 bg-networks/25 ${i > 0 ? "border-t-2 sm:border-t-0 sm:border-l-2 border-ink" : ""}`}
                    >
                      <dt className="text-[0.95rem] font-semibold">{s.label}</dt>
                      <dd className="display text-3xl sm:text-5xl mt-1 order-first">
                        <Counter value={s.value} suffix={s.suffix} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <ul className="mt-6 space-y-2.5 max-w-[70ch]">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-ink" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
                {job.stack.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
