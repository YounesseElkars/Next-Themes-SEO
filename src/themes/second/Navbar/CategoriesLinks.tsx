import { getAllCategoriesCards } from '@/handlers/categoryHandler';
import React from 'react';

import DropDown from './DropDown';

const CategoriesLinks = () => {
  const categoriesCards = getAllCategoriesCards();

  return <DropDown categoriesCards={categoriesCards} />;
};

export default CategoriesLinks;
