import { TLink } from '@/types/general';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';

type SocialLinksProps = {
  Logo: FC<LucideProps>;
  name: string;
  size: number;
  link: TLink;
  showText?: boolean;
};

const SocialLink: FC<SocialLinksProps> = ({ Logo, link, name, size, showText = true }) => {
  return (
    <Link href={link} aria-label={name} target="_blank">
      <li className="flex w-full items-center justify-center gap-3 underline decoration-primary/50 underline-offset-8 hover:bg-primary/10 active:bg-primary/30">
        <Logo size={size} />
        {showText && <span className="text-sm">{name}</span>}
      </li>
    </Link>
  );
};

export default SocialLink;
