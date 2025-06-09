import { getAllBlogs } from '@/lib/blogs'
import React from 'react'
import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';

function Blogs() {
  const projects = getAllProjects();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 my-6 mt-24">
      <h1 className="font-bold text-2xl">Shanjiv&apos;s Projects</h1>
      <ul className="flex flex-col gap-4 mt-4">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs