import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
import { ArrowLeft } from "lucide-react";
import { getAllBlogs, formatBlogDate, parseBlogDate } from "@/lib/blogs";

const md = new MarkdownIt({ linkify: true });

export function generateStaticParams() {
  return getAllBlogs().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getAllBlogs().find((b) => b.slug === slug);
  return blog ? { title: blog.seoTitle || blog.title, description: blog.seoDescription } : {};
}

export default async function Blog({ params }) {
  const { slug } = await params;
  const blog = getAllBlogs().find((b) => b.slug === slug);
  if (!blog) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <Link href="/blogs" className="btn press !px-3.5 !py-1.5 text-sm">
        <ArrowLeft className="size-4" aria-hidden />
        All posts
      </Link>
      <article className="mt-10">
        <header>
          <time
            dateTime={parseBlogDate(blog.datePublished).toISOString().slice(0, 10)}
            className="font-semibold text-ink-soft"
          >
            {formatBlogDate(blog.datePublished)}
          </time>
          <h1 className="heading mt-3 text-[clamp(2.2rem,6vw,3.6rem)]">{blog.title}</h1>
        </header>
        <div
          className="prose-brutal mt-10"
          dangerouslySetInnerHTML={{ __html: md.render(blog.content) }}
        />
      </article>
    </main>
  );
}
