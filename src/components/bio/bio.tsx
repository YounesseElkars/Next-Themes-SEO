import React, { FC } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import SocialLink from './social-link';
import AvatarBio from './avatar';
import Divider from './divider';
import { profileSetting } from '@/config/profile';

type BioProps = {};

const Bio: FC<BioProps> = () => {
  const iconSize = 14;
  return (
    <div className="mt-4 flex h-full w-full flex-col rounded-md bg-blue-900/10 px-4 sm:flex-row">
      <div className="m-5 my-2 flex flex-1 flex-col items-center justify-center  gap-4">
        <AvatarBio link={profileSetting.avatar} name={profileSetting.myname} />

        <div className="my-2 text-center text-2xl font-semibold sm:w-10/12">{profileSetting.blogName}</div>

        <div className="my-2 text-center  text-sm sm:sm:w-10/12 ">{profileSetting.blogDescription}</div>
      </div>

      <Divider />

      <div className="m-5  grid flex-1 grid-cols-2 grid-rows-2 ">
        <SocialLink link={profileSetting.facebook} size={iconSize} Logo={Facebook} name="Facebook" />
        <SocialLink link={profileSetting.instagram} size={iconSize} Logo={Instagram} name="Instagram" />
        <SocialLink link={profileSetting.twiter} size={iconSize} Logo={Twitter} name="Twitter" />
        <SocialLink link={profileSetting.linkedin} size={iconSize} Logo={Linkedin} name="Linkedin" />
      </div>
    </div>
  );
};

export default Bio;
