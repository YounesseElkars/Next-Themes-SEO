import fs from 'fs';
import matter from 'gray-matter';
import FullPost from '@/components/full-post/FullPost';
import React from 'react';
import { TFullPost } from '@/types/general';
import { getPostDetails } from '@/components/post-cards/postCards';
import { Metadata, ResolvingMetadata } from 'next';

export const dynamicParams = false;

type params = { params: { slug: string } };

const getPostContent = (slug: string): TFullPost => {
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
  };
};

export async function generateMetadata({ params }: params, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug;

  const content = getPostContent(slug);

  const title = content?.title;
  const subtitle = content?.subtitle;
  const image = content?.image;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: title,
    description: subtitle,
    openGraph: {
      images: [image],
      ...previousImages,
    },
  };
}

export const generateStaticParams = async () => {
  const posts = getPostDetails();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = ({ params }: params) => {
  const slug = params.slug;

  const content = getPostContent(slug);

  return (
    <div className=" mt-4  h-auto w-full gap-4  rounded-md bg-blue-900/10 px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
      <FullPost
        imageAlt={content.imageAlt}
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
