import React, { FC } from 'react';
import { SwitchDark } from './SwitchDark';
import NavLink from './NavLink';
import { profileSetting } from '@/config/profile';
import CategoriesLinks from './CategoriesLinks';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="mt-10">
      <ul className="mb-2 flex w-full items-center justify-between">
        <NavLink label="About" link="/about" type="normal" />
        <NavLink label={profileSetting.blogName} link="/" type="title" />
        <SwitchDark />
      </ul>
      <hr className="mb-2" />
      <ul className="flex flex-auto flex-wrap items-center justify-center">
        <CategoriesLinks />
      </ul>
    </header>
  );
};

export { Navbar };
