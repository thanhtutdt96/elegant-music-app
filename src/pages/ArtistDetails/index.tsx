import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useGetArtistDetailsQuery } from 'redux/services/shazamCore';
import DetailsHeader from 'components/DetailsHeader';
import Error from 'components/Error';
import Loader from 'components/Loader';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
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
    </div>
  );
};

export default ArtistDetails;
