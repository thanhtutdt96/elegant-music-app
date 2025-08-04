import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { Song } from 'types/Song';

type Props = {
  song: Song;
  isPlaying?: boolean;
  activeSong?: Song;
  handlePlay?: () => void;
  handlePause?: () => void;
};

const PlayPause: React.FC<Props> = ({ song, activeSong, isPlaying, handlePlay, handlePause }) =>
  isPlaying && activeSong?.attributes?.name === song.attributes?.name ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
