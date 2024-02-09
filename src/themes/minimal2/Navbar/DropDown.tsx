'use client';
import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent } from '../Ui/dropdown-menu';
import { DropdownMenuRadioGroup } from '@/themes/minimal/Ui/Dropdown-menu';
import { TCategoryCard } from '@/types/general';
import DropDownTitle from './DropDownTitle';
import DropDownLinks from './DropDownLinks';
import { usePathname } from 'next/navigation';

const DropDown = ({ categoriesCards }: { categoriesCards: TCategoryCard[] }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const allCatLinks = categoriesCards.map((data) => data.categorySlug);

  const links = categoriesCards.map((data, index) => (
    <DropDownLinks
      key={index}
      label={data.categoryName}
      link={`/category/${data.categorySlug}`}
      type="normal"
      pathname={pathname}
    />
  ));

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropDownTitle pathname={pathname} links={allCatLinks} />
      <DropdownMenuContent className="w-56" onClick={() => setOpen(false)}>
        <DropdownMenuRadioGroup>{links}</DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
