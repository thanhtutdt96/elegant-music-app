import React from 'react';
import { Song } from 'types/Song';

type Props = {
  isPlaying: boolean;
  isActive: boolean;
  activeSong?: Song;
};

const Track: React.FC<Props> = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start w-[50%]">
    <div
      className={`${
        isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''
      } hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.attributes?.artwork?.url} alt="cover art" className="rounded-full" />
    </div>
    <div className="flex-1 truncate">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.attributes?.name ? activeSong?.attributes?.name : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.attributes?.artistName ? activeSong?.attributes?.artistName : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
