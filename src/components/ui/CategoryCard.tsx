import React, { FC } from 'react';
import { TCategoryCard } from '@/types/general';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';

const Category: FC<TCategoryCard> = ({ categoryImg, categoryImgAlt, categoryName, categorySlug }) => {
  return (
    <Link aria-label={categoryName + ' - Category'} href={`/category/` + categorySlug}>
      <div className="relative h-full w-full transform rounded-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <div className="absolute h-full w-full bg-slate-950/10"></div>
        <ExportedImage
          src={categoryImg}
          height="100"
          width="100"
          alt={categoryImgAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4 cursor-pointer select-none text-white hover:text-slate-50 ">
          <div className="text-base">{categoryName}</div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
