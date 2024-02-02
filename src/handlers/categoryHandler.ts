import fs from 'fs';
import { TCategoryCard } from '@/types/general';

export function getAllCategoriesCards(): TCategoryCard[] {
  const folder = './src/posts/';
  const categories = fs.readdirSync(folder);
  return categories.map((cat) => {
    return {
      categoryName: cat,
      categoryImg: `/categories/${cat}.png`,
      categoryImgAlt: cat,
      categorySlug: cat,
    };
  });
}
