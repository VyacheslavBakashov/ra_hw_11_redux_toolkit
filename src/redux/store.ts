import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import { moviesReducer } from './slices/movies';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type AppDispatchTypes = typeof store.dispatch;
export type RootStateTypes = ReturnType<typeof store.getState>;
export type AppThunkTypes<ReturnType = void> = ThunkAction<ReturnType, RootStateTypes, unknown, Action<string>>;
