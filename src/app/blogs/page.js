import { getAllBlogs } from "@/lib/blogs";
import BlogCard from "./BlogCard";

export const metadata = { title: "Writing" };

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-32 pb-16">
      <h1 className="display text-[clamp(3rem,9vw,6.5rem)]">Writing</h1>
      <p className="mt-5 mb-12 text-xl max-w-[52ch]">Notes on Linux, tooling and how I got into all of this.</p>
      <ul className="grid gap-5">
        {blogs.map((b) => (
          <li key={b.slug}>
            <BlogCard blog={b} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </main>
  );
}
