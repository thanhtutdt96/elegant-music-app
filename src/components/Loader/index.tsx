import React from 'react';
import { loader } from 'assets';

type Props = {
  title?: string;
};

const Loader: React.FC<Props> = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="Loader" className="w-32 h-32" />
    <h1 className="text-bold text-white text-2xl mt-2">{title || 'Loading...'}</h1>
  </div>
);

export default Loader;
