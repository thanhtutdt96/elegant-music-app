import React, { ChangeEvent, useEffect, useRef } from 'react';
import { Song } from 'types/Song';

type Props = {
  activeSong?: Song;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (e: ChangeEvent<HTMLAudioElement>) => void;
  onLoadedData: (e: ChangeEvent<HTMLAudioElement>) => void;
  isRepeat: boolean;
};

const Player: React.FC<Props> = ({
  activeSong,
  isPlaying,
  volume,
  seekTime,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  isRepeat,
}) => {
  const ref = useRef<HTMLAudioElement>(null);
  if (ref.current) {
    if (isPlaying) {
      void ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio
      src={activeSong?.attributes?.previews?.[0]?.url}
      ref={ref}
      loop={isRepeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
