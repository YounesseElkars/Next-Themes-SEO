import React from 'react';
import PostCard from '../Ui/PostCard';
import { TFeaturedArticlesCards, TFullPost } from '@/types/general';
import { ShowArticlesCardsByCategory, getFeaturedArticlesCards } from '@/handlers/postsHandler';
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
    <section className="mt-20">
      <h2 className="mb-5 text-2xl">Featured Articles</h2>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 lg:gap-14">
        {postDetails.slice(0, 6).map((_, i) => {
          return (
            <div
              key={i}
              className={`row-span-1 my-8 md:my-2
              ${i === 3 || i === 5 ? 'col-span-1 md:col-span-2' : ''}
              ${i === 2 ? ' row-span-1 md:row-span-2 ' : ''}
              `}
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
          );
        })}
      </div>
    </section>
  );
};

export const ArticlesByCategory = ({ slug }: { slug: string }) => {
  const articles = ShowArticlesCardsByCategory(slug);
  return (
    <section className="mt-20">
      <h2 className="mb-5 text-2xl">{slug}</h2>
      <div className=" grid h-auto w-full grid-cols-1 gap-14 rounded-md px-4 py-2 sm:grid-cols-2 sm:flex-row lg:grid-cols-4 ">
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
    </section>
  );
};

export const FullArticle: FC<TFullPost> = ({ title, subtitle, date, content, image, imageAlt }) => {
  return (
    <div className=" flex w-full flex-col">
      <div className="mb-2 mt-12 text-center text-6xl font-normal">{title}</div>
      <div className=" mb-2 text-center text-base font-normal ">{subtitle}</div>
      <div className={`${bitter.className} mb-12 text-center text-xs `}>{date}</div>
      <ExportedImage src={image} height={1000} width={1000} className="  w-full" alt={imageAlt} />

      <article className="prose mx-auto my-12 w-full max-w-7xl text-foreground dark:prose-light">
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
