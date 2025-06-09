import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDir = path.join(process.cwd(), "src/blogs")

export const getAllBlogs = () => {
    const fileNames = fs.readdirSync(blogDir);

    return fileNames.map((fileName) => {
        const filePath = path.join(blogDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { content, data } = matter(fileContent);

        return {
            slug: fileName.replace(/\.md$/, ''),
            content,
            ...data,
        };
    }); 
}