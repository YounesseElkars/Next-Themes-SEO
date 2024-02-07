import { getAllCategoriesCards } from '@/handlers/categoryHandler';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react';
import Theme from '@/themes/defaultTheme';

type params = { params: { slug: string } };

export async function generateMetadata({ params }: params, parent: ResolvingMetadata): Promise<Metadata> {
  const content = getAllCategoriesCards();
  const { categoryName, categorySlug } = content[0];
  return {
    title: categoryName,
    description: categorySlug,
  };
}

export const generateStaticParams = async () => {
  const cats = getAllCategoriesCards();
  return cats.map((cat) => ({
    slug: cat.categorySlug,
  }));
};

const page = ({ params }: params) => {
  const slug = params.slug;

  return <Theme.ArticlesByCategory slug={slug} />;
};

export default page;
