import { ArticlesByCategory } from '@/components/posts/posts';
import { getAllCategoriesCards } from '@/handlers/categoryHandler';
import React from 'react';

type params = { params: { slug: string } };

export const generateStaticParams = async () => {
  const cats = getAllCategoriesCards();
  return cats.map((cat) => ({
    slug: cat.categorySlug,
  }));
};

const page = ({ params }: params) => {
  const slug = params.slug;

  return (
    <div>
      <ArticlesByCategory slug={slug} />
    </div>
  );
};

export default page;
