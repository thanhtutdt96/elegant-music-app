import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchResult } from 'types/SearchResult';
import { Song } from 'types/Song';

type InitialStateType = {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song | undefined;
  genreListId: string;
};

type ActiveSongPayload = {
  song: Song;
  index: number;
  data?: Song[] | SearchResult;
};

const initialState: InitialStateType = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: undefined,
  genreListId: 'POP',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action: PayloadAction<ActiveSongPayload>) => {
      state.activeSong = action.payload.song;
      state.currentIndex = action.payload.index;
      state.isActive = true;

      if (!action.payload.data) {
        return;
      }

      if ('tracks' in action.payload.data && action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data || [];
      }
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } =
  playerSlice.actions;

export default playerSlice.reducer;
