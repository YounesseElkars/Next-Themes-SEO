import React, { FC } from 'react';
import Link from 'next/link';
import { TFeaturedArticlesCards } from '@/types/general';
import ExportedImage from 'next-image-export-optimizer';

const PostCard: FC<TFeaturedArticlesCards> = ({ title, subtitle, slug, image, imageAlt }) => {
  return (
    <Link aria-label={title + ' - Article'} href={`/` + slug}>
      <div className="relative h-full w-full transform rounded-md shadow-md shadow-primary/50 drop-shadow-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <div className="absolute h-full w-full bg-slate-950/10"></div>
        <ExportedImage src={image} height="1000" width="1000" alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full cursor-pointer select-none p-4 text-slate-50  ">
          <div className="mb-3 text-xl underline decoration-primary decoration-1 underline-offset-4">{title}</div>
          <p className="text-xs   ">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
