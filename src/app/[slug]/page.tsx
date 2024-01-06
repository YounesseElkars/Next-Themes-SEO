import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import FullPost from '@/components/full-post/FullPost';
import React from 'react';
import { TFullPost, TPostCardDetails } from '@/types/general';
import { getPostDetails } from '@/components/post-cards/postCards';

export const generateStaticParams = async () => {
  const posts = getPostDetails();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const getPostContent = (slug: string): TFullPost => {
  const fileLocation = `./src/posts/${slug}.md`;
  const file = fs.readFileSync(fileLocation, 'utf-8');
  const matterResult = matter(file);

  return {
    slug: matterResult.data.slug,
    content: matterResult.content,
    date: matterResult.data.date,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    image: matterResult.data.image,
  };
};

const page = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const content = getPostContent(slug);
  return (
    <div className="mt-4   h-auto w-full   gap-4  rounded-md bg-blue-900/10 px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
      <FullPost
        date={content.date}
        subtitle={content.subtitle}
        title={content.title}
        image={content.image}
        content={content.content}
      />
    </div>
  );
};

export default page;
