import React, { FC } from 'react';
import { TCategoryCard } from '@/types/general';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

const Category: FC<TCategoryCard> = ({ categoryImg, categoryImgAlt, categoryName, categorySlug }) => {
  return (
    <Link aria-label={categoryName + ' - Category'} href={`/category/` + categorySlug}>
      <div className="h-full w-full transform cursor-pointer   transition-transform hover:scale-105 focus:border-blue-300 focus:ring">
        <div className="absolute h-full w-full  "></div>
        <ExportedImage
          src={categoryImg}
          height="1000"
          width="1000"
          alt={categoryImgAlt}
          className="h-5/6 w-full rounded-lg object-cover shadow-sm shadow-card-foreground/50"
        />
        <div className="flex h-full w-full   select-none flex-col  space-y-3 py-2 ">
          <div className="text-lg font-semibold">{categoryName}</div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
