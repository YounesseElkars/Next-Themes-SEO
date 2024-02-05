import React, { FC } from 'react';
import Link from 'next/link';
import { TFeaturedArticlesCards } from '@/types/general';
import ExportedImage from 'next-image-export-optimizer';

const PostCard: FC<TFeaturedArticlesCards> = ({ title, subtitle, slug, image, imageAlt }) => {
  return (
    <Link aria-label={title + ' - Article'} href={`/` + slug}>
      <div className="relative h-full w-full transform rounded-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <div className="absolute h-full w-full bg-slate-950/10"></div>
        <ExportedImage src={image} height="600" width="600" alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute bottom-4 left-4 cursor-pointer select-none text-white hover:text-slate-50">
          <div className="text-base">{title}</div>
          <p className="text-[0.5rem]">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
