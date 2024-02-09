import React from 'react';
import NavLink from '../Navbar/NavLink';
import { profileSetting } from '@/config/profile';
import SocialLink from '../About/Social-link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import CategoriesLinks from '../Navbar/CategoriesLinks';

const Footer = () => {
  const iconSize = 14;
  return (
    <footer className="mt-20 grid gap-10 bg-muted py-5 md:grid-cols-12">
      <div className="col-span-2  flex h-full w-full items-center justify-center">
        <NavLink label={profileSetting.blogName} link="/" type="title" />
      </div>
      <div className="col-span-5 flex h-full w-full flex-wrap items-center justify-center ">
        <div className="flex">
          <NavLink label="Home" link="/" type="normal" />
          <NavLink label="About" link="/about" type="normal" />
        </div>
        <div className="flex">
          <CategoriesLinks />
        </div>
      </div>

      <div className="col-span-5 flex w-full flex-col items-center justify-around gap-5 ">
        <div className="font-semibold">Follow me</div>
        <div className="flex w-full flex-row  flex-wrap items-center justify-center gap-4 ">
          <SocialLink link={profileSetting.facebook} size={iconSize} Logo={Facebook} name="Facebook" showText={false} />
          <SocialLink
            link={profileSetting.instagram}
            size={iconSize}
            Logo={Instagram}
            name="Instagram"
            showText={false}
          />
          <SocialLink link={profileSetting.twiter} size={iconSize} Logo={Twitter} name="Twitter" showText={false} />
          <SocialLink link={profileSetting.linkedin} size={iconSize} Logo={Linkedin} name="Linkedin" showText={false} />
        </div>
      </div>
    </footer>
  );
};

export { Footer };
