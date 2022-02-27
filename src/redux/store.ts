import { configureStore } from '@reduxjs/toolkit';
import { countReducer } from './reducers/count';

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
