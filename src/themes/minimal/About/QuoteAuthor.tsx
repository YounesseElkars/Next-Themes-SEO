import React from 'react';
import { Quote } from 'lucide-react';
import { profileSetting } from '@/config/profile';

const QuoteAuthor = () => {
  return (
    <div className="relative flex">
      <Quote size={150} className="ml-0 sm:ml-20" />
      <div className="absolute bottom-5 left-10 z-0  w-full text-center text-8xl text-primary/20  ">Quote</div>
      <div className="mx-20 my-10 text-4xl">{profileSetting.quote}</div>
      <Quote size={150} className="mr-0 sm:mr-20 " />
    </div>
  );
};

export default QuoteAuthor;
