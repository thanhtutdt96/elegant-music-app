import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetSongsByGenreQuery } from 'redux/services/shazamCore';
import { selectGenreListId } from 'redux/slices/playerSlice';
import { genres } from 'assets/constants';
import Error from 'components/Error';
import Loader from 'components/Loader';
import SongCard from 'components/SongCard';

const Discover = () => {
  const dispatch = useAppDispatch();

  const { activeSong, isPlaying, genreListId } = useAppSelector((state) => state.player);

  const { data, isLoading, error } = useGetSongsByGenreQuery(genreListId);

  if (isLoading) {
    return <Loader title="Loading songs..." />;
  }

  if (error) {
    return <Error />;
  }

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          value={genreListId}
          onChange={(event) => dispatch(selectGenreListId(event.target.value))}>
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
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

export default Discover;
