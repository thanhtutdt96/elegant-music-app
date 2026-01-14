import { useParams } from 'react-router';
import { useAppSelector } from 'redux/hooks';
import { useGetSongsBySearchQuery } from 'redux/services/shazamCore';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SongCard from 'components/SongCard';

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm || '');
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  if (isFetching) {
    return <Loader title="Loading top charts" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={song.id}
            song={song}
            index={index}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
