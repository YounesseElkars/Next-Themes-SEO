import { TLinkPath } from '@/types/general';
import React, { FC } from 'react';

import Link from 'next/link';

type TNavlink = {
  link: TLinkPath;
  label: string;
  type: 'normal' | 'title';
};

const NavLink: FC<TNavlink> = ({ label, link, type }) => {
  return (
    <li
      className={` m-2 list-none hover:underline  ${
        type === 'title' ? `text-lg capitalize first-letter:text-xl first-letter:font-bold` : `text-xs`
      }`}
    >
      <Link aria-label={label} href={link}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
