import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectDir = path.join(process.cwd(), "src/projects");

export const getAllProjects = () => {
  const fileNames = fs.readdirSync(projectDir).filter((f) => f.endsWith(".md"));

  return fileNames
    .map((fileName) => {
      const fileContent = fs.readFileSync(path.join(projectDir, fileName), "utf8");
      const { content, data } = matter(fileContent);

      return {
        slug: fileName.replace(/\.md$/, ""),
        content,
        ...data,
      };
    })
    .sort(
      (a, b) =>
        (typeof a.weight === "number" ? a.weight : Infinity) -
        (typeof b.weight === "number" ? b.weight : Infinity)
    );
};

// Only the serialisable fields a card needs; keeps markdown bodies out of client bundles.
export const toCard = ({ content, ...meta }) => meta;

export const formatMonth = (date) => {
  if (!date) return null;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return String(date);
  return d.toLocaleDateString("en-GB", { month: "short", year: "numeric" });
};
