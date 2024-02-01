import PostPage from '@/components/postPage/PostPage';
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { getPostCardsHandler } from '@/handlers/getPostsDetailsHandler';
import { getPostContent } from '@/handlers/getPostContentHandler';
import { TFullPost } from '@/types/general';

type params = { params: { slug: TFullPost['slug'] } };

export async function generateMetadata({ params }: params, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = params.slug;
  const content = getPostContent(slug);
  const { title, seoMetaDescription, image } = content;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: title,
    description: seoMetaDescription,
    openGraph: {
      images: [image],
      ...previousImages,
    },
  };
}

export const generateStaticParams = async () => {
  const posts = getPostCardsHandler();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const page = ({ params }: params) => {
  const slug = params.slug;
  const content = getPostContent(slug);

  return (
    <div className=" mt-4  h-auto w-full gap-4  rounded-md bg-blue-900/10 px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
      <PostPage
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
