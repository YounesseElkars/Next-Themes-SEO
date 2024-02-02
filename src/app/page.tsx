import { ShowAllCategoriesCards } from '@/components/categories/ShowAllCategoriesCards';
import { FeaturedArticlesCards } from '@/components/posts/posts';

export default function Home() {
  return (
    <>
      <div className="mt-4 grid h-auto w-full grid-cols-1 gap-4  rounded-md  bg-blue-900/10 px-4 py-2 text-center  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
        <div>ADD SLIDER HERE</div>
      </div>
      <FeaturedArticlesCards />
      <ShowAllCategoriesCards />
    </>
  );
}
