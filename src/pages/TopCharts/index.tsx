import { useAppSelector } from 'redux/hooks';
import { useGetTopChartsQuery } from 'redux/services/shazamCore';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SongCard from 'components/SongCard';

const TopCharts = () => {
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery({});

  if (isFetching) {
    return <Loader title="Loading top charts" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
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

export default TopCharts;
