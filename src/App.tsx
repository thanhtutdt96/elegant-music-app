import { Route, Routes, useLocation } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { useGetSongsByGenreQuery } from 'redux/services/shazamCore';
import Loader from 'components/Loader';
import MusicPlayer from 'components/MusicPlayer';
import Searchbar from 'components/Searchbar';
import Sidebar from 'components/Sidebar';
import TopPlay from 'components/TopPlay';
import AroundYou from 'pages/AroundYou';
import ArtistDetails from 'pages/ArtistDetails';
import Discover from 'pages/Discover';
import Search from 'pages/Search';
import SongDetails from 'pages/SongDetails';
import TopArtists from 'pages/TopArtists';
import TopCharts from 'pages/TopCharts';

const App = () => {
  const location = useLocation();
  const { activeSong, genreListId } = useAppSelector((state) => state.player);

  // Only run the genre query when on the Discover route to check loading state
  const { isLoading: isGenreQueryLoading } = useGetSongsByGenreQuery(genreListId, {
    skip: location.pathname !== '/',
  });

  // Determine if TopPlay should render
  const shouldRenderTopPlay = location.pathname !== '/' || !isGenreQueryLoading;

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#526D82]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col">
          <div className="flex-1 h-fit md:pb-40 pb-10">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songId" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit transition-all duration-300 ease-in-out">
            {shouldRenderTopPlay ? (
              <TopPlay />
            ) : (
              <Loader size="medium" title="Loading top charts" />
            )}
          </div>
        </div>
      </div>

      {activeSong?.attributes?.name && (
        <div className="fixed h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#9DB2BF] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
