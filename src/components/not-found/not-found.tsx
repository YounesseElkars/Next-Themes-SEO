// import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/Button';
import ExportedImage from 'next-image-export-optimizer';

const NotFound = () => {
  return (
    <div className="mt-4  flex h-auto  w-full flex-col  items-center justify-center  gap-10   rounded-md bg-blue-900/10 px-4 py-2   ">
      <h3 className="text-2xl text-foreground">404 - Not Found</h3>
      <p className="text-md text-foreground/60">Could not find requested resource</p>
      <ExportedImage
        src="/images/not-found.png"
        height={1000}
        width={1000}
        alt="404 Error Not Found Image"
        className="w-72"
      />
      <Link aria-label="Home" href="/">
        <Button variant="default">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
