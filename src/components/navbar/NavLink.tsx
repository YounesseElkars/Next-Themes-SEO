'use client';
import { TLinkPath } from '@/types/general';
import React, { FC } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TNavlink = {
  link: TLinkPath;
  label: string;
  type: 'normal' | 'title';
};

const NavLink: FC<TNavlink> = ({ label, link, type }) => {
  const pathname = usePathname();
  const removeLastSlashFromPath = pathname !== '/' ? pathname.slice(0, -1) : '/';

  return (
    <li
      className={`
      m-2 list-none decoration-primary decoration-1 underline-offset-8 hover:underline
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
    </li>
  );
};

export default NavLink;
