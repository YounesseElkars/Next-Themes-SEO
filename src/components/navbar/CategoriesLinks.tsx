import { getAllCategoriesCards } from '@/handlers/categoryHandler';
import React from 'react';
import NavLink from './NavLink';

const CategoriesLinks = () => {
  const categoriesCards = getAllCategoriesCards();

  const links = categoriesCards.map((data, index) => (
    <>
      <NavLink key={index} label={data.categoryName} link={`/category/${data.categorySlug}`} type="normal" />
      <NavLink key={index} label={data.categoryName} link={`/category/${data.categorySlug}`} type="normal" />
    </>
  ));

  return links;
};

export default CategoriesLinks;
