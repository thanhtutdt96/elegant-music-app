import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from 'components/PlayPause';
import { Song } from 'types/Song';

type Props = {
  song: Song;
  index: number;
  artistId?: string;
  isPlaying: boolean;
  activeSong?: Song;
  handlePauseClick?: () => void;
  handlePlayClick?: (song: Song, index: number) => void;
};

const SongBar: React.FC<Props> = ({
  song,
  index,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#27374D] ${
      artistId
        ? activeSong?.title === song?.attributes?.name
        : activeSong?.title === song?.title
        ? 'bg-[#27374D]'
        : 'bg-transparent'
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={
          artistId
            ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125')
            : song?.images?.coverart
        }
        alt={song?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">{song?.attributes?.name}</p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </p>
      </div>
    </div>
    {!artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick && handlePlayClick(song, index)}
      />
    ) : null}
  </div>
);

export default SongBar;
