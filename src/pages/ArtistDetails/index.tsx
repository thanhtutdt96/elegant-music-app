import { useEffect } from 'react';
import { useParams } from 'react-router';
// import { useAppSelector } from 'redux/hooks';
import { useGetArtistDetailsQuery } from 'redux/services/shazamCore';
import DetailsHeader from 'components/DetailsHeader';
import Error from 'components/Error';
import Loader from 'components/Loader';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  // const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artistId || '');

  useEffect(() => {
    console.log(artistData);
  }, [artistData]);

  if (isFetching) {
    return <Loader title="Loading artist details" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader artistData={artistData} artistId={artistId} />

      {/*<RelatedSongs*/}
      {/*  data={songData}*/}
      {/*  artistId={artistId}*/}
      {/*  isPlaying={isPlaying}*/}
      {/*  activeSong={activeSong}*/}
      {/*/>*/}
    </div>
  );
};

export default ArtistDetails;
