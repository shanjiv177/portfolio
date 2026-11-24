import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { ArrowLeft, Github, Globe, Trophy } from "lucide-react";
import { getAllProjects, formatMonth } from "@/lib/projects";
import { domains } from "@/data/site";

const md = new MarkdownIt({ linkify: true });

const linkMeta = {
  code: { label: "Code", Icon: Github },
  live: { label: "Live", Icon: Globe },
  showcase: { label: "ETHGlobal page", Icon: Trophy },
};

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getAllProjects().find((p) => p.slug === slug);
  return project ? { title: project.title, description: project.description } : {};
}

export default async function Project({ params }) {
  const { slug } = await params;
  const project = getAllProjects().find((p) => p.slug === slug);
  if (!project) notFound();

  const d = domains[project.domain] ?? domains.systems;
  const tech = Array.isArray(project.tech) ? project.tech : [];
  const month = formatMonth(project.date);

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-16">
      <Link href="/projects" className="btn press !px-3.5 !py-1.5 text-sm">
        <ArrowLeft className="size-4" aria-hidden />
        All projects
      </Link>

      <header className="mt-10">
        <p className="inline-block border-2 border-ink px-3 py-1 font-bold" style={{ background: d.color }}>
          {d.label}
          {project.badge ? `, ${project.badge}` : ""}
        </p>
        <h1 className="display mt-5 text-[clamp(2.6rem,8vw,5.5rem)]">{project.title}</h1>
        <p className="mt-5 text-xl max-w-[54ch]">{project.description}</p>
        {(month || project.status) && (
          <p className="mt-3 font-semibold text-ink-soft">
            {[project.status, month].filter(Boolean).join(", ")}
          </p>
        )}

        {project.links && (
          <div className="mt-7 flex flex-wrap gap-3">
            {Object.entries(project.links).map(([kind, href]) => {
              const meta = linkMeta[kind];
              if (!meta) return null;
              return (
                <a key={kind} href={href} target="_blank" rel="noopener noreferrer" className="btn press">
                  <meta.Icon className="size-4" aria-hidden />
                  {meta.label}
                </a>
              );
            })}
          </div>
        )}

        <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Stack">
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </header>

      {project.cover && (
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          width={1200}
          height={630}
          className="mt-10 w-full border-2 border-ink shadow-brutal"
        />
      )}

      <div
        className="prose-brutal mt-10"
        dangerouslySetInnerHTML={{ __html: md.render(project.content) }}
      />
    </main>
  );
}
