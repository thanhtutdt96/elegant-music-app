import React from 'react';
import { Link } from 'react-router-dom';
import { ArtistDetail } from 'types/ArtistDetail';
import { SongDetail } from 'types/SongDetail';

type Props = {
  artistId?: string;
  artistData?: ArtistDetail;
  songData?: SongDetail;
};

const DetailsHeader: React.FC<Props> = ({ artistId, artistData, songData }) => {
  let artist = null;

  if (artistId) {
    artist = artistData?.artists[artistId]?.attributes;
  }

  return (
    <div className="relative w-full flex flex-col mt-5">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute top-0 left-0 flex items-center">
          <img
            src={
              artistId
                ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
                : songData?.images?.coverart
            }
            alt="art"
            className="sm:w-48 w-28 h-28 sm:h-48 rounded-full object-cover border-2 shadow-xl shadow-black"
          />

          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-white">
              {artistId ? artist?.name : songData?.title}
            </p>
            {!artistId && (
              <Link to={`/artists/${songData?.artists?.[0].adamid}`}>
                <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
              </Link>
            )}

            <p className="text-base text-gray-400 mt-2">
              {artistId ? artist?.genreNames?.[0] : songData?.genres?.primary}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full sm:h-16 h-12"></div>
    </div>
  );
};

export default DetailsHeader;
