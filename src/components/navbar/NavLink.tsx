import { TLinkPath } from '@/types/general';
import React, { FC } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

type TNavlink = {
  link: TLinkPath;
  label: string;
};

const NavLink: FC<TNavlink> = ({ label, link }) => {
  return (
    <div>
      <Button asChild variant="link">
        <Link aria-label={label} href={link}>
          {label}
        </Link>
      </Button>
    </div>
  );
};

export default NavLink;
