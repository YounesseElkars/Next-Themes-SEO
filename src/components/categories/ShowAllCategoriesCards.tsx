import React from 'react';
import Category from '../ui/CategoryCard';

import { getAllCategoriesCards } from '@/handlers/categoryHandler';

export const ShowAllCategoriesCards = () => {
  const categoriesCards = getAllCategoriesCards();
  return (
    <>
      <h2 className="my-8 text-4xl">All Categories</h2>
      <div className="grid auto-rows-[200px] grid-cols-2">
        {categoriesCards.map((_, i) => (
          <div key={i} className={`row-span-1 rounded-xl p-4 ${i === 2 ? 'col-span-2' : ''} `}>
            <Category
              key={i}
              categorySlug={categoriesCards[i].categorySlug}
              categoryImg={categoriesCards[i].categoryImg}
              categoryImgAlt={categoriesCards[i].categoryImgAlt}
              categoryName={categoriesCards[i].categoryName}
            />
          </div>
        ))}
      </div>
    </>
  );
};
