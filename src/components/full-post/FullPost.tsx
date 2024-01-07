import Image from 'next/image';
import React, { FC } from 'react';
import Markdown from 'markdown-to-jsx';

import { Bitter } from 'next/font/google';
import { PostProps } from '@/types/general';

const bitter = Bitter({
  weight: '200',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const FullPost: FC<PostProps> = ({ title, subtitle, date, content, image }) => {
  return (
    <div className="flex flex-col  ">
      <div className="my-12 text-6xl font-normal  ">{title}</div>
      <div className="mb-6 text-base font-normal  ">{subtitle}</div>
      <div className={`${bitter.className} mb-2 text-xs `}>{date}</div>
      <Image src={image} height={1000} width={1000} className="w-full" alt="Post Image" />
      <article className="  prose dark:prose-light my-12  text-foreground">
        <Markdown>{content}</Markdown>
      </article>
    </div>
  );
};

export default FullPost;
