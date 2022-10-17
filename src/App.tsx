import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
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
  const activeSong = useAppSelector((state) => state.player.activeSong);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
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
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
