import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function BlogCard({ blog }) {
  const { title, seoDescription, datePublished, tags, slug } = blog;
  const tagsArray = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
    ? tags.split(",").map((tag) => tag.trim())
    : [];

  return (
    <Card className="p-2">
      <CardHeader className="p-2 pb-0">
        <CardTitle className="text-white text-base font-semibold mb-1 line-clamp-1">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-xs flex flex-wrap gap-2 items-center">
          <span>{datePublished}</span>
          {tagsArray.length > 0 && (
            <span className="flex flex-wrap gap-1">
              {tagsArray.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-800 text-gray-300 px-2 py-0.5 rounded text-[10px] font-medium ml-2"
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-1">
        <p className="text-gray-300 text-xs line-clamp-2">{seoDescription}</p>
      </CardContent>
      <CardFooter className="p-2 pt-1">
        <Link href={`/blogs/${slug}`}>
          <Button variant="secondary">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BlogCard;
