import React, { FC } from 'react';
import { SwitchDark } from './SwitchDark';
import NavLink from './NavLink';
import { profileSetting } from '@/config/profile';
import CategoriesLinks from './CategoriesLinks';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="mt-10">
      <div className="mb-2 flex w-full items-center justify-between">
        <div>
          <NavLink label={profileSetting.blogName} link="/" type="title" />
        </div>
        <div className="flex md:space-x-4">
          <NavLink label="Home" link="/" type="normal" />
          <CategoriesLinks />
          <NavLink label="About" link="/about" type="normal" />
        </div>
        <div>
          <SwitchDark />
        </div>
      </div>
    </header>
  );
};

export { Navbar };
