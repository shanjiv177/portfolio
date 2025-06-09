import { getAllBlogs } from '@/lib/blogs'
import React from 'react'
import Link from 'next/link';
import BlogCard from '@/app/blogs/BlogCard';

function Blogs() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-4xl mt-24 mx-auto px-4 sm:px-6 md:px-10 my-6">
      <h1 className="font-bold text-2xl">Shanjiv&apos;s Blogs</h1>
      <ul className="flex flex-col gap-4 mt-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <BlogCard blog={blog} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blogs