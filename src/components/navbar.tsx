'use client';
import React, { FC, HtmlHTMLAttributes } from 'react';
import { SwitchDark } from './switchDark';
import { CornerDownLeft, Home } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  const pathname = usePathname();
  return (
    <div className="mt-4 flex h-16 w-full flex-row items-center justify-between rounded-md bg-purple-900/10 px-4">
      <div>
        <Link href="/">{pathname == '/' ? <Home /> : <CornerDownLeft />}</Link>
      </div>
      <div>
        <SwitchDark />
      </div>
    </div>
  );
};

export default Navbar;
