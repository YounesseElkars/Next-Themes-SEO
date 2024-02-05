import React from 'react';
import PostCard from '../ui/PostCard';
import { TFeaturedArticlesCards, TFullPost } from '@/types/general';
import { ShowArticlesCardsByCategory, getFeaturedArticlesCards } from '@/handlers/postsHandler';
// import Image from 'next/image';
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Bitter } from 'next/font/google';
import ExportedImage from 'next-image-export-optimizer';

const bitter = Bitter({
  weight: '200',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const FeaturedArticlesCards = () => {
  const postDetails: TFeaturedArticlesCards[] = getFeaturedArticlesCards();

  return (
    <>
      <h2 className="my-8 text-4xl">Featured Articles</h2>
      <div className="grid auto-rows-[200px] grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl p-4 ${i === 0 || i === 5 ? 'col-span-2' : ''}    ${
              i === 2 ? 'row-span-2' : ''
            } `}
          >
          <PostCard
              key={i}
              title={postDetails[i].title}
              subtitle={postDetails[i].subtitle}
              slug={postDetails[i].slug}
              image={postDetails[i].image}
              imageAlt={postDetails[i].imageAlt}
          />
          </div>
        ))}
      </div>
    </>
  );
};

export const ArticlesByCategory = ({ slug }: { slug: string }) => {
  const articles = ShowArticlesCardsByCategory(slug);
  return (
    <>
      <h2 className="my-5  mt-4 h-auto w-full  gap-4 rounded-md bg-blue-900/10 px-4  py-2  font-bold sm:grid-cols-2 sm:flex-row lg:grid-cols-3">
        All Categories - {slug}
      </h2>
      <div className="mt-4   grid   h-auto w-full   grid-cols-1     gap-4   rounded-md bg-blue-900/10 px-4  py-2    sm:grid-cols-2 sm:flex-row       lg:grid-cols-3">
        {articles.map((data, index) => (
          <PostCard
            key={index}
            title={data.title}
            subtitle={data.subtitle}
            slug={data.slug}
            image={data.image}
            imageAlt={data.imageAlt}
          />
        ))}
      </div>
    </>
  );
};

export const FullArticle: FC<TFullPost> = ({ title, subtitle, date, content, image, imageAlt }) => {
  return (
    <div className="flex flex-col  ">
      <div className="my-12 text-6xl font-normal">{title}</div>
      <div className="mb-6 text-base font-normal">{subtitle}</div>
      <div className={`${bitter.className} mb-2 text-xs `}>{date}</div>
      <ExportedImage src={image} height={1000} width={1000} className="w-full" alt={imageAlt} />
      <article className="  prose my-12 text-foreground  dark:prose-light">
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => <ExportedImage src={src as string} alt={alt as string} width={1200} height={200} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
};
