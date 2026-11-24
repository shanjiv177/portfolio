"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import ProjectCard from "@/app/projects/ProjectCard";
import { domains } from "@/data/site";

export default function ProjectGrid({ projects, headingLevel = "h3" }) {
  const [filter, setFilter] = useState("all");
  const reduce = useReducedMotion();

  const counts = projects.reduce((acc, p) => {
    acc[p.domain] = (acc[p.domain] || 0) + 1;
    return acc;
  }, {});
  const filters = [
    { key: "all", label: "All", color: "var(--panel)", count: projects.length },
    ...Object.entries(domains)
      .filter(([key]) => counts[key])
      .map(([key, d]) => ({ key, label: d.label, color: d.color, count: counts[key] })),
  ];
  const shown = filter === "all" ? projects : projects.filter((p) => p.domain === filter);

  const spring = reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 };

  return (
    <div>
      <div role="group" aria-label="Filter projects by area" className="mb-10 flex flex-wrap gap-3">
        {filters.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.key)}
              className="btn press !py-1.5 !px-4"
              style={{
                background: active ? f.color : "var(--panel)",
                outline: active ? "2px solid var(--ink)" : undefined,
                outlineOffset: active ? "2px" : undefined,
              }}
            >
              {f.label}
              <span className="font-mono text-[0.8rem] font-medium">{f.count}</span>
            </button>
          );
        })}
      </div>

      <LayoutGroup>
        <motion.ul layout={!reduce} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-9 grid-flow-dense">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p) => (
              <motion.li
                key={p.slug}
                layout={!reduce}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: reduce ? 0 : 0.14 } }}
                transition={spring}
                className={p.size === "wide" ? "md:col-span-2 lg:col-span-3" : ""}
              >
                <ProjectCard project={p} headingLevel={headingLevel} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </div>
  );
}
