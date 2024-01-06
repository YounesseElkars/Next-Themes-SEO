import { FC, ReactNode } from 'react';

interface ConatinerProps {
  children: ReactNode;
}

const Container: FC<ConatinerProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-2xl px-4">{children}</div>;
};

export default Container;
