import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from 'assets/placeholder.png';
import { SearchSong } from 'types/SearchResult';

type Props = {
  song: SearchSong;
};

const SearchSongCard: React.FC<Props> = ({ song }) => {
  return (
    <div className="flex flex-col w-[150px] sm:w-[220px] lg:w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full group">
        <img alt="song img" src={song.images?.coverart || placeholder} />
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

export default SearchSongCard;
