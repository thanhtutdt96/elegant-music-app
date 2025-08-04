import { useParams } from 'react-router';
import { useGetSongsBySearchQuery } from 'redux/services/shazamCore';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SearchSongCard from 'components/SongCard/SearchSongCard';

const Search = () => {
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm || '');

  if (isFetching) {
    return <Loader title="Loading top charts" />;
  }

  if (error) {
    return <Error />;
  }

  const songs = data?.tracks?.hits?.map((song) => song.track);

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song) => (
          <SearchSongCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Search;
