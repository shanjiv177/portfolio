import { getAllBlogs } from '@/lib/blogs'
import React from 'react'
import MarkdownIt from 'markdown-it';
import './page.css'

async function fetchBlog(slug) {
    const blogs = getAllBlogs()
    return blogs.find(blog => blog.slug === slug) || null;
}

async function Blog({ params }) {
    const md = new MarkdownIt();
    const { slug } = await params;
    const blog = await fetchBlog(slug);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const htmlConverter = md.render(blog.content);

    return (
        <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-10 mt-24">
            <h1 className="text-3xl sm:text-4xl font-bold">{blog.title}</h1>
            <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
            <div
                dangerouslySetInnerHTML={{ __html: htmlConverter }}
                className="markdown-body"
            />
        </article>
    );
}

export default Blog