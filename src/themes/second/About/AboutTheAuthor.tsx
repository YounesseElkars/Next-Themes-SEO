import React, { FC } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import SocialLink from './Social-link';
import { profileSetting } from '@/config/profile';
import ExportedImage from 'next-image-export-optimizer';

type AboutTheAuthor = {};

const AboutTheAuthor: FC<AboutTheAuthor> = () => {
  const iconSize = 14;
  return (
    <div className="mt-20 flex min-h-72 w-full flex-col py-10">
      <div className="flex h-full w-full  flex-col items-center justify-center sm:flex-row">
        <ExportedImage
          height={1000}
          width={1000}
          src={profileSetting.avatar}
          alt={profileSetting.full_name}
          className="h-full w-72 object-fill shadow-md shadow-primary/50 drop-shadow-md"
        />
        <div className="mx-10 flex flex-col items-center justify-around">
          <div className="my-2 text-center text-lg font-semibold capitalize first-letter:text-xl first-letter:font-bold sm:w-10/12">
            {profileSetting.full_name}
          </div>

          <div className="my-2 text-center  text-sm sm:sm:w-10/12 ">{profileSetting.author_about}</div>
        </div>
      </div>
      <div className="mx-auto my-20  flex w-1/2 border-l-2 border-t-2 border-primary/50"></div>
      <div className="mx-10 flex flex-col justify-center space-y-10 ">
        <div className="self-center font-semibold -tracking-wider">Social</div>
        <ul className="flex flex-row flex-wrap  justify-center gap-10  ">
          <SocialLink link={profileSetting.facebook} size={iconSize} Logo={Facebook} name="Facebook" />
          <SocialLink link={profileSetting.instagram} size={iconSize} Logo={Instagram} name="Instagram" />
          <SocialLink link={profileSetting.twiter} size={iconSize} Logo={Twitter} name="Twitter" />
          <SocialLink link={profileSetting.linkedin} size={iconSize} Logo={Linkedin} name="Linkedin" />
        </ul>
      </div>
    </div>
  );
};

export default AboutTheAuthor;
