import React from 'react';
import PostCard from './postCard';

import { TPostCard } from '@/types/general';
import { getPostCardsHandler } from '@/handlers/getPostsDetailsHandler';

const PostCards = () => {
  const postDetails: TPostCard[] = getPostCardsHandler();
  return (
    <div className="mt-4 grid h-auto w-full grid-cols-1 grid-rows-2  gap-4  rounded-md bg-blue-900/10 px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
      {postDetails.map((data, index) => (
        <PostCard key={index} date={data.date} title={data.title} subtitle={data.subtitle} slug={data.slug} />
      ))}
    </div>
  );
};

export default PostCards;
