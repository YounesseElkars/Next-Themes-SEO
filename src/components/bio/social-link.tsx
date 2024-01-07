import { TLink } from '@/types/general';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

type SocialLinksProps = {
  Logo: FC<LucideProps>;
  name: string;
  size: number;
  link: TLink;
};

const SocialLink: FC<SocialLinksProps> = ({ Logo, link, name, size }) => {
  return (
    <Link href={link} aria-label={name} target="_blank">
      <div className="m-3  flex flex-col items-center justify-center gap-3 rounded-md bg-blue-900/20  py-4 hover:bg-blue-900/10 active:bg-blue-900/30  ">
        <Logo size={size} />
        <span className="text-sm">{name}</span>
      </div>
    </Link>
  );
};

export default SocialLink;
