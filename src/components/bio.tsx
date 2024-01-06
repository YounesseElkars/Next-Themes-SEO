import React, { FC, HtmlHTMLAttributes } from 'react';

type BioProps = {} & HtmlHTMLAttributes<HTMLDivElement>;

const Bio: FC<BioProps> = ({ ...props }) => {
  return <div {...props}>Bio</div>;
};

export default Bio;
