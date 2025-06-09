import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectDir = path.join(process.cwd(), "src/projects")

export const getAllProjects = () => {
    const fileNames = fs.readdirSync(projectDir);

    return fileNames.map((fileName) => {
        const filePath = path.join(projectDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { content, data } = matter(fileContent);

        return {
            slug: fileName.replace(/\.md$/, ''),
            content,
            ...data,
        };
    }); 
}