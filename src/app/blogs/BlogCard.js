import Link from "next/link";
import { formatBlogDate, parseBlogDate } from "@/lib/blogs";

// One row in a list of posts: date, title, summary, tags.
export default function BlogCard({ blog, headingLevel = "h3" }) {
  const { title, seoDescription, datePublished, tags, slug } = blog;
  const Heading = headingLevel;
  const tagsArray = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? tags.split(",").map((t) => t.trim())
      : [];

  return (
    <Link
      href={`/blogs/${slug}`}
      className="brutal press group grid gap-x-8 gap-y-2 p-5 sm:grid-cols-[9rem_minmax(0,1fr)]"
    >
      <time dateTime={parseBlogDate(datePublished).toISOString().slice(0, 10)} className="font-semibold text-ink-soft sm:pt-1">
        {formatBlogDate(datePublished)}
      </time>
      <div>
        <Heading className="heading text-xl sm:text-2xl group-hover:underline decoration-2 underline-offset-4">
          {title}
        </Heading>
        {seoDescription && <p className="mt-1.5 max-w-[64ch]">{seoDescription}</p>}
        {tagsArray.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
            {tagsArray.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
