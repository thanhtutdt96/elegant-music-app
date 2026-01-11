import React, { ChangeEvent, useEffect, useState } from 'react';

type Props = {
  value: number;
  min: number;
  max: number;
  setSeekTime: React.Dispatch<React.SetStateAction<number>>;
  appTime: number;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

const Seekbar: React.FC<Props> = ({ value, min, max, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time: number) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  const [isSeeking, setIsSeeking] = useState(false);
  const [draftSeekTime, setDraftSeekTime] = useState<number>(value);
  const [isCommitPending, setIsCommitPending] = useState(false);

  useEffect(() => {
    if (!isSeeking) {
      setDraftSeekTime(value);
    }
  }, [isSeeking, value]);

  useEffect(() => {
    if (!isCommitPending) return;

    // Keep showing the draft time until appTime (value) catches up,
    // to avoid a brief flash back to the old appTime on release.
    if (Math.abs(value - draftSeekTime) <= 0.25) {
      setIsCommitPending(false);
      setIsSeeking(false);
    }
  }, [draftSeekTime, isCommitPending, value]);

  useEffect(() => {
    if (!isCommitPending) return;

    // Fallback: if the audio element doesn't emit a timeupdate quickly,
    // don't leave the UI "stuck" in seeking state.
    const timeoutId = window.setTimeout(() => {
      setIsCommitPending(false);
      setIsSeeking(false);
    }, 500);

    return () => window.clearTimeout(timeoutId);
  }, [isCommitPending]);

  const commitSeek = () => {
    if (!isSeeking) return;
    setIsCommitPending(true);
    setSeekTime(clamp(draftSeekTime, min, max));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSeeking(true);
    setIsCommitPending(false);
    setDraftSeekTime(Number(e.currentTarget.value));
  };

  const displayTime = isSeeking ? draftSeekTime : value;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button
        type="button"
        onClick={() => setSeekTime(clamp(appTime - 5, min, max))}
        className="hidden lg:mr-4 lg:block text-white">
        -
      </button>
      <p className="text-white">{displayTime === 0 ? '0:00' : getTime(displayTime)}</p>
      <input
        type="range"
        step="any"
        value={isSeeking ? draftSeekTime : value}
        min={min}
        max={max}
        onInput={handleInput}
        onPointerUp={commitSeek}
        onMouseUp={commitSeek}
        onTouchEnd={commitSeek}
        onBlur={commitSeek}
        className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(clamp(appTime + 5, min, max))}
        className="hidden lg:ml-4 lg:block text-white">
        +
      </button>
    </div>
  );
};

export default Seekbar;
