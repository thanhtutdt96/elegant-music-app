import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useGetSongsByCountryQuery } from 'redux/services/shazamCore';
import { GEO_IPIFY_KEY } from 'assets/constants';
import axios from 'axios';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SongCard from 'components/SongCard';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery(country, {
    skip: !country,
  });

  const fetchCurrentCountry = useCallback(async () => {
    setIsLoading(true);

    const response = await axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${GEO_IPIFY_KEY}`)
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));

    if (!response?.data) {
      return;
    }

    setCountry(response.data?.location?.country);
  }, []);

  useEffect(() => {
    void fetchCurrentCountry();
  }, [fetchCurrentCountry]);

  if (isFetching && isLoading) {
    return <Loader title="Loading songs around you" />;
  }

  if (error && country) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">VN</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data &&
          data?.map((song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
              data={data}
              activeSong={activeSong}
              isPlaying={isPlaying}
            />
          ))}
      </div>
    </div>
  );
};

export default AroundYou;
