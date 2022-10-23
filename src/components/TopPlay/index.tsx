import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useGetTopChartsQuery } from 'redux/services/shazamCore';
import { playPause, setActiveSong } from 'redux/slices/playerSlice';
import PlayPause from 'components/PlayPause';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Song } from 'types/Song';
import 'swiper/swiper.min.css';

type TopChartCardProps = {
  song: Song;
  index: number;
  activeSong?: Song;
  isPlaying: boolean;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
};

const TopChartCard: React.FC<TopChartCardProps> = ({
  song,
  index,
  isPlaying,
  activeSong,
  handlePlayClick,
  handlePauseClick,
}) => (
  <div className="flex py-2 p-4 rounded-lg cursor-pointer mb-2 w-full flex flex-row items-center hover:bg-[#4c426e]">
    <h3 className="font-bold text-base text-white mr-3">{index + 1}</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="h-20 w-20 rounded-full" src={song.images?.coverart} alt={song.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song.title}</p>
        </Link>
        <Link to={`/artists/${song.artists?.[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">{song.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause
      song={song}
      activeSong={activeSong}
      handlePlay={handlePlayClick}
      handlePause={handlePauseClick}
      isPlaying={isPlaying}
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const topPlays = data?.slice(0, 5);

  const handlePlayClick = (song: Song, index: number) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div
      ref={wrapperRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, index) => (
            <TopChartCard
              key={song.key}
              index={index}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePlayClick={() => handlePlayClick(song, index)}
              handlePauseClick={handlePauseClick}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4">
          {topPlays?.map((song) => (
            <SwiperSlide
              key={song.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright">
              <Link to={`/artists/${song.artists?.[0].adamid}`}>
                <img
                  src={song.images?.background}
                  alt="name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
