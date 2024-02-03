import React from 'react';
import Category from '../ui/CategoryCard';

import { getAllCategoriesCards } from '@/handlers/categoryHandler';

export const ShowAllCategoriesCards = () => {
  const categoriesCards = getAllCategoriesCards();
  return (
    <>
      <h2 className="my-5 font-bold">Featured Categories</h2>
      <div className="mt-4 grid h-auto w-full grid-cols-1   gap-4  rounded-md   px-4 py-2  sm:grid-cols-2  sm:flex-row lg:grid-cols-3">
        {categoriesCards.map((data, index) => (
          <Category
            key={index}
            categorySlug={data.categorySlug}
            categoryImg={data.categoryImg}
            categoryImgAlt={data.categoryImgAlt}
            categoryName={data.categoryName}
          />
        ))}
      </div>
    </>
  );
};
