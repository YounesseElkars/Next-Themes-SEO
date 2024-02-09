import React, { FC } from 'react';
import Link from 'next/link';
import { TFeaturedArticlesCards } from '@/types/general';
import ExportedImage from 'next-image-export-optimizer';

const PostCard: FC<TFeaturedArticlesCards> = ({ title, subtitle, slug, image, imageAlt }) => {
  return (
    <Link aria-label={title + ' - Article'} href={`/` + slug}>
      <div className="h-full w-full transform cursor-pointer rounded-md transition-transform hover:scale-105 focus:border-blue-300 focus:ring ">
        <ExportedImage
          src={image}
          height="1000"
          width="1000"
          alt={imageAlt}
          className="h-5/6 w-full rounded-lg object-cover shadow-sm shadow-card-foreground/50"
        />
        <div className="flex h-full w-full  select-none flex-col  space-y-3 py-2">
          <div className="text-lg font-semibold ">{title}</div>
          <p className="text-xs text-muted-foreground ">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
export default PostCard;
