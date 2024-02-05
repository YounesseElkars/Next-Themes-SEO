import Bio from '@/components/bio/Bio';
import { Quote } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="relative flex">
        <Quote size={150} className="ml-0 sm:ml-20" />
        <div className="absolute bottom-1 left-10 z-0  w-full text-center text-9xl text-primary/10  ">Quote</div>
        <div className="mx-20 my-10 text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500
        </div>
        <Quote size={150} className="mr-0 sm:mr-20 " />
      </div>
      <Bio />
    </>
  );
};

export default page;
