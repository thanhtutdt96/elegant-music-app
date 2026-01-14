import React from 'react';
import SongBar from 'components/SongBar';
import { Song } from 'types/Song';

type Props = {
  data?: Song[];
  isPlaying: boolean;
  activeSong?: Song;
  handlePlayClick?: (song: Song, index: number) => void;
  handlePauseClick?: () => void;
  artistId?: string;
};

const RelatedSongs: React.FC<Props> = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, index) => (
        <SongBar
          key={index}
          song={song}
          index={index}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
