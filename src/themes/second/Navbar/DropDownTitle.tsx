'use client';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import React from 'react';

const DropDownTitle = ({ links, pathname }: { links: string[]; pathname: string }) => {
  const match = pathname.match(/\/category\/([^/]+)\//);
  const cat = match ? match[1] : false;

  return (
    <DropdownMenuTrigger asChild>
      <div
        className={`
        m-2  cursor-pointer select-none list-none text-xs decoration-primary decoration-1 underline-offset-8 hover:underline
    ${cat && links.includes(cat) ? 'text-lg underline ' : ''} 
    `}
      >
        Categories
      </div>
    </DropdownMenuTrigger>
  );
};

export default React.memo(DropDownTitle);
