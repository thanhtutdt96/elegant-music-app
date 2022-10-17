import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from 'redux/services/shazamCore';
import { playPause, setActiveSong } from 'redux/slices/playerSlice';
import DetailsHeader from 'components/DetailsHeader';
import Error from 'components/Error';
import Loader from 'components/Loader';
import RelatedSongs from 'pages/RelatedSongs';
import { Song } from 'types/Song';

const SongDetails = () => {
  const { songId } = useParams();
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const {
    data: songData,
    isFetching: isFetchingData,
    error: errorFetchingData,
  } = useGetSongDetailsQuery(songId || '');
  const {
    data: relatedData,
    isFetching: isFetchingRelated,
    error: errorFetchingRelated,
  } = useGetRelatedSongsQuery(songId || '');

  if (isFetchingData || isFetchingRelated) {
    return <Loader title="Seaching song details" />;
  }

  if (errorFetchingData && errorFetchingRelated) {
    return <Error />;
  }

  const handlePlayClick = (song: Song, index: number) => {
    dispatch(setActiveSong({ song, data: relatedData, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const lyricData = songData?.sections.find((data) => data.type === 'LYRICS');

  return (
    <div className="flex flex-col">
      <DetailsHeader songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {lyricData ? (
            lyricData.text?.map((line, index) => (
              <p key={index} className="my-1 text-gray-400 text-base">
                {line}
              </p>
            ))
          ) : (
            <p className="my-1 text-gray-400 text-base">Sorry, no lyrics found.</p>
          )}
        </div>
      </div>

      <RelatedSongs
        data={relatedData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
