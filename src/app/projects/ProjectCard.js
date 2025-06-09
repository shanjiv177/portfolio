import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ProjectCard({ project }) {
  const { title, description, tech = [], slug, status, cover } = project;
  const techArray = Array.isArray(tech)
    ? tech
    : typeof tech === "string"
    ? tech.split(",").map(t => t.trim())
    : [];

  return (
    <Card className="bg-neutral-900/40 border border-neutral-800 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow p-4 gap-2">
      {cover && (
        <div className="w-full mb-2 rounded overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={600}
            height={300}
            className="w-full object-cover rounded"
            priority={false}
          />
        </div>
      )}
      <CardHeader className="p-2 pb-0 flex flex-col">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-base font-semibold line-clamp-1">{title}</CardTitle>
          {status && (
            <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-gray-300 ml-2">
              {status}
            </span>
          )}
        </div>
        <CardDescription className="text-gray-400 text-xs flex flex-wrap items-center">
          {techArray.length > 0 && (
            <span className="flex flex-wrap gap-1">
              {techArray.map(t => (
                <span
                  key={t}
                  className="bg-neutral-800 text-gray-300 px-2 py-0.5 rounded text-[10px] font-medium"
                >
                  {t}
                </span>
              ))}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-1">
        <p className="text-gray-300 text-xs line-clamp-2">{description}</p>
      </CardContent>
      <Link href={`/projects/${slug}`} className="block mt-1">
        <Button variant="secondary">View Details &rarr;</Button>
      </Link>
    </Card>
  );
}

export default ProjectCard;