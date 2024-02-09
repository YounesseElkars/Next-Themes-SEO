'use client';
import { TLinkPath } from '@/types/general';
import React, { FC } from 'react';
import Link from 'next/link';
import { DropdownMenuItem } from '../Ui/dropdown-menu';

type TNavlink = {
  link: TLinkPath;
  label: string;
  type: 'normal' | 'title';
  pathname: string;
};

const DropDownLinks: FC<TNavlink> = ({ label, link, type, pathname }) => {
  const removeLastSlashFromPath = pathname !== '/' ? pathname.slice(0, -1) : '/';

  return (
    <DropdownMenuItem
      className={`
    list-none p-3 decoration-primary decoration-1 underline-offset-8 hover:underline
    ${removeLastSlashFromPath === link ? 'text-lg underline ' : ''} 
    ${
      type === 'title'
        ? `first-letter:text-xl/20 text-lg  capitalize  first-letter:font-bold first-letter:text-primary  `
        : `text-xs`
    }
    `}
    >
      <Link aria-label={label} href={link}>
        {label}
      </Link>
    </DropdownMenuItem>
  );
};

export default React.memo(DropDownLinks);
