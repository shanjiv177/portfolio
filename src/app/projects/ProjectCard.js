import Link from "next/link";
import { Github, Globe, Trophy, FileText } from "lucide-react";
import { domains } from "@/data/site";
import Counter from "@/components/Counter";

const linkMeta = {
  code: { label: "Code", Icon: Github },
  live: { label: "Live", Icon: Globe },
  showcase: { label: "ETHGlobal page", Icon: Trophy },
};

export default function ProjectCard({ project, headingLevel = "h3" }) {
  const { title, description, tech = [], slug, status, domain, badge, links = {}, specs, command } =
    project;
  const Heading = headingLevel;
  const d = domains[domain] ?? domains.systems;
  const techArray = Array.isArray(tech) ? tech : String(tech).split(",").map((t) => t.trim());

  return (
    <article className="brutal relative h-full flex flex-col">
      {badge && (
        <span
          className="absolute -top-3.5 right-4 z-10 border-2 border-ink bg-web3 px-2.5 py-1 text-sm font-black rotate-[4deg] shadow-[3px_3px_0_0_var(--ink)]"
          style={{ fontStretch: "115%" }}
        >
          {badge}
        </span>
      )}

      {/* Domain strip: the colour tells you what kind of work this is */}
      <div
        className="flex items-center justify-between gap-3 border-b-2 border-ink px-4 py-1.5 text-sm font-bold"
        style={{ background: d.color }}
      >
        <span>{d.label}</span>
        {status && <span className="font-semibold">{status}</span>}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Heading className="heading text-2xl">
          <Link href={`/projects/${slug}`} className="hover:underline decoration-2 underline-offset-4">
            {title}
          </Link>
        </Heading>
        <p className="mt-2 text-[0.98rem] max-w-[62ch]">{description}</p>

        {command && (
          <pre className="mt-4 overflow-x-auto border-2 border-ink bg-ink px-3 py-2 font-mono text-[0.85rem] text-panel">
            <span className="text-networks" aria-hidden>
              ${" "}
            </span>
            {command}
          </pre>
        )}

        {specs && (
          <dl className="mt-5 grid grid-cols-2 sm:grid-cols-5 border-2 border-ink bg-networks/20">
            {specs.map((s) => (
              <div
                key={s.label}
                className="flex flex-col p-3 border-ink [&:not(:last-child)]:border-b-2 sm:[&:not(:last-child)]:border-b-0 sm:[&:not(:last-child)]:border-r-2"
              >
                <dt className="text-sm font-semibold leading-tight">{s.label}</dt>
                <dd className="display text-3xl order-first mb-1">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack">
          {techArray.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5 flex flex-wrap gap-2.5">
          <Link href={`/projects/${slug}`} className="btn press !px-3.5 !py-1.5 text-sm">
            <FileText className="size-4" aria-hidden />
            Details
          </Link>
          {Object.entries(links).map(([kind, href]) => {
            const meta = linkMeta[kind];
            if (!meta || !href) return null;
            return (
              <a
                key={kind}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn press !px-3.5 !py-1.5 text-sm"
              >
                <meta.Icon className="size-4" aria-hidden />
                {meta.label}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}
