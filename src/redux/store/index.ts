import { configureStore } from '@reduxjs/toolkit';

import playerReducer from 'redux/slices/playerSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});
