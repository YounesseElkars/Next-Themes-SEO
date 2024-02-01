import fs from 'fs';
import matter from 'gray-matter';
import { TPostCard } from '@/types/general';

export function getPostCardsHandler(): TPostCard[] {
  const folder = './src/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  return markdownPosts.map((file): TPostCard => {
    const fileContents = fs.readFileSync(`./src/posts/${file}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace('.md', ''),
    };
  });
}
