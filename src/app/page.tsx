import { ShowAllCategoriesCards } from '@/components/categories/ShowAllCategoriesCards';
import { FeaturedArticlesCards } from '@/components/posts/Posts';

export default function Home() {
  return (
    <>
      <FeaturedArticlesCards />
      <ShowAllCategoriesCards />
    </>
  );
}
