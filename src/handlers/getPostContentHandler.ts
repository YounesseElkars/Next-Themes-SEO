import fs from 'fs';
import matter from 'gray-matter';
import { TFullPost } from '@/types/general';

export function getPostContent(slug: string): TFullPost {
  const fileLocation = `./src/posts/${slug}.md`;
  const file = fs.readFileSync(fileLocation, 'utf-8');
  const matterResult = matter(file);

  return {
    imageAlt: matterResult.data.imageAlt,
    slug: matterResult.data.slug,
    content: matterResult.content,
    date: matterResult.data.date,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    image: matterResult.data.image,
    seoMetaDescription: matterResult.data.seoMetaDescription,
  };
}
