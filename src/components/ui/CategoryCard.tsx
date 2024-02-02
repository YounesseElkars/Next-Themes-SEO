import React, { FC } from 'react';
import { TCategoryCard } from '@/types/general';
import Link from 'next/link';
import Image from 'next/image';

const Category: FC<TCategoryCard> = ({ categoryImg, categoryImgAlt, categoryName, categorySlug }) => {
  return (
    <Link aria-label={categoryName + ' - Category'} href={`/category/` + categorySlug}>
      <div className="relative h-auto w-72 transform rounded-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <Image src={categoryImg} height="100" width="100" alt={categoryImgAlt} className="w-full rounded-md " />
        <div className="bg absolute bottom-2 left-2 cursor-pointer select-none  rounded-md bg-blue-900/80 p-2 text-slate-300 hover:text-slate-50 ">
          <div className="text-base">{categoryName}</div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
