import React from 'react';
import PostCard from './postCard';
import fs from 'fs';
import matter from 'gray-matter';
import { TPostCardDetails } from '@/types/general';

export const getPostDetails = (): TPostCardDetails[] => {
  const folder = './src/posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));
  const postDetails = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`./src/posts/${file}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace('.md', ''),
    };
  });
  return postDetails;
};

const PostCards = () => {
  const postDetails: TPostCardDetails[] = getPostDetails();
  return (
    <div className="mt-4 grid h-auto w-full grid-cols-1 grid-rows-2  gap-4  rounded-md bg-blue-900/10 px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
      {postDetails.map((data, index) => (
        <PostCard key={index} date={data.date} title={data.title} subtitle={data.subtitle} slug={data.slug} />
      ))}
    </div>
  );
};

export default PostCards;
