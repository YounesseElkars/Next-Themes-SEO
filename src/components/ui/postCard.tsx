import React, { FC } from 'react';
import Link from 'next/link';
import { TFeaturedArticlesCards } from '@/types/general';
// import Image from 'next/image';
import ExportedImage from 'next-image-export-optimizer';

const PostCard: FC<TFeaturedArticlesCards> = ({ title, subtitle, slug, image, imageAlt }) => {
  return (
    <Link aria-label={title + ' - Article'} href={`/` + slug}>
      <div className="relative h-auto w-72 transform rounded-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <ExportedImage src={image} height="100" width="100" alt={imageAlt} className="h-48 w-full rounded-md " />
        <div className="bg absolute bottom-2 left-2 cursor-pointer select-none  rounded-md bg-blue-900/80 p-2 text-slate-300 hover:text-slate-50 ">
          <div className="text-base">{title}</div>
          <p className="text-xs">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
