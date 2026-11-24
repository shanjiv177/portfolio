import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "./Hero";
import Work from "./Work";
import ProjectGrid from "./ProjectGrid";
import Contact from "./contact";
import LogoPlate from "./LogoPlate";
import BlogCard from "@/app/blogs/BlogCard";
import { getAllBlogs } from "@/lib/blogs";
import { getAllProjects, toCard } from "@/lib/projects";
import { community } from "@/data/site";

function SectionHead({ title, intro, href, cta }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        <h2 className="heading text-4xl sm:text-5xl">{title}</h2>
        {intro && <p className="mt-3 text-lg max-w-[58ch]">{intro}</p>}
      </div>
      {href && (
        <Link href={href} className="btn press">
          {cta}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}

export default function HomePage() {
  const projects = getAllProjects().filter((p) => p.featured).map(toCard);
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <main>
      <Hero />
      <Work />

      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHead
          title="Things I've built"
          intro="Low-level systems in C and C++, networks that had to survive a crowd, and a few hackathon builds."
          href="/projects"
          cta="All projects"
        />
        <ProjectGrid projects={projects} />
      </section>

      <section id="community" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHead
          title="Volunteering"
          intro="Communities where I help run meetups, CTFs and other events."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {community.map((c) => (
            <article key={c.org} className="brutal p-6">
              <header className="flex flex-col-reverse items-start gap-4">
                <div className="min-w-0">
                  <h3 className="heading text-2xl">{c.org}</h3>
                  <p className="font-semibold">{c.role}</p>
                  <p className="text-ink-soft text-[0.95rem]">{c.period}</p>
                </div>
                <LogoPlate src={c.logo} />
              </header>
              <ul className="mt-5 space-y-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] size-2 shrink-0 bg-ink" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <SectionHead title="Writing" href="/blogs" cta="All posts" />
        <ul className="grid gap-5">
          {blogs.map((b) => (
            <li key={b.slug}>
              <BlogCard blog={b} />
            </li>
          ))}
        </ul>
      </section>

      <Contact />
    </main>
  );
}
