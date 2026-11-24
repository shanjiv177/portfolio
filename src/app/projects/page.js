import { getAllProjects, toCard } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata = { title: "Projects" };

export default function Projects() {
  const projects = getAllProjects().map(toCard);

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-16">
      <h1 className="display text-[clamp(3rem,9vw,6.5rem)]">Projects</h1>
      <p className="mt-5 mb-12 text-xl max-w-[52ch]">
        Everything from allocators and key-value stores to event networks and onchain escrow. Filter by
        area, or open one for the details.
      </p>
      <ProjectGrid projects={projects} headingLevel="h2" />
    </main>
  );
}
