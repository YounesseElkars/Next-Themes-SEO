import React, { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { TLink } from '@/types/general';

type AvatarBioProps = {
  link: TLink;
  name: string;
};

const AvatarBio: FC<AvatarBioProps> = ({ link, name }) => {
  return (
    <Avatar>
      <AvatarImage src={link} alt="Author Photo" />
      <AvatarFallback>
        <div className="flex h-full w-full items-center justify-center text-[0.5rem]">{name}</div>
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarBio;
