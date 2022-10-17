import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { playPause, setActiveSong } from 'redux/slices/playerSlice';
import PlayPause from 'components/PlayPause';
import { SearchResult } from 'types/SearchResult';
import { Song } from 'types/Song';

type Props = {
  song: Song;
  index: number;
  isPlaying?: boolean;
  activeSong?: Song;
  data?: Song[] | SearchResult;
};

const SongCard: React.FC<Props> = ({ song, index, isPlaying, activeSong, data }) => {
  const dispatch = useAppDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
        ${activeSong?.key === song.key ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song img" src={song.images?.coverart || '/resources/placeholder.png'} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold truncate text-white text-lg">
          <Link to={`/songs/${song.key}`}>{song.title}</Link>
        </p>
        <p className="mt-1 truncate text-gray-300 text-sm">
          <Link to={song.artists ? `/artists/${song.artists?.[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
