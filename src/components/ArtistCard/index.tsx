import React from 'react';
import { useNavigate } from 'react-router';
import { Song } from 'types/Song';

type Props = {
  track: Song;
};

const ArtistCard: React.FC<Props> = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[150px] sm:w-[220px] lg:w-[250px] p-4 bg-white/5 bg-opacity-80
        backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
      role="presentation"
      onClick={() => navigate(`/artists/${track?.relationships?.artists?.data?.[0]?.id}`)}>
      <img
        src={track?.attributes?.artwork?.url}
        alt="artist"
        className="w-full h-auto rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg truncate text-white">{track?.attributes?.name}</p>
    </div>
  );
};

export default ArtistCard;
