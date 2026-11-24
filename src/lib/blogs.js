import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "src/blogs");

// Blog dates are written DD-MM-YYYY in frontmatter.
export const parseBlogDate = (d) => {
  if (!d) return new Date(0);
  const [d1, d2, d3] = String(d).split("-");
  if (d3 && d3.length === 4) return new Date(`${d3}-${d2}-${d1}`);
  return new Date(d);
};

export const formatBlogDate = (d) =>
  parseBlogDate(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const getAllBlogs = () => {
  const fileNames = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  return fileNames
    .map((fileName) => {
      const fileContent = fs.readFileSync(path.join(blogDir, fileName), "utf8");
      const { content, data } = matter(fileContent);

      return {
        slug: fileName.replace(/\.md$/, ""),
        content,
        ...data,
      };
    })
    .sort((a, b) => parseBlogDate(b.datePublished) - parseBlogDate(a.datePublished));
};
