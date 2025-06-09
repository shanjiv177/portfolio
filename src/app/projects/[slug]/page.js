import React from 'react'
import MarkdownIt from 'markdown-it';
import './page.css'
import { getAllProjects } from '@/lib/projects';

async function fetchProject(slug) {
    const projects = getAllProjects()
    return projects.find(project => project.slug === slug) || null;
}

async function Project({ params }) {
    const md = new MarkdownIt();
    const { slug } = await params;
    const project = await fetchProject(slug);

    if (!project) {
        return <div>Blog not found</div>;
    }

    const htmlConverter = md.render(project.content);

    return (
        <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 mt-24">
            <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
            <p className="text-gray-400 text-sm mb-4">{project.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: htmlConverter }}
                className="markdown-body"
            />
        </article>
    );
}

export default Project