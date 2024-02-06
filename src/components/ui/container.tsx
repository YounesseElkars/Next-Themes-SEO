import { FC, ReactNode } from 'react';

interface ConatinerProps {
  children: ReactNode;
}

const Container: FC<ConatinerProps> = ({ children }) => {
  return <div className="mx-auto flex min-h-screen w-full  max-w-7xl flex-col justify-between px-4 ">{children}</div>;
};

export default Container;
