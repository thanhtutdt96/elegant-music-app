import React from 'react';
import { loader } from 'assets';
import clsx from 'clsx';

type Props = {
  title?: string;
  size?: 'medium' | 'large';
};

const Loader: React.FC<Props> = ({ title, size = 'large' }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="Loader" className={clsx(size === 'large' ? 'w-32 h-32' : 'w-16 h-16')} />
    <h1 className="text-bold text-white text-2xl mt-2">{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
