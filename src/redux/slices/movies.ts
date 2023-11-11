import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { MoviePreviewTypes, SelectedMovieTypes } from '../../types';

interface MoviesStateInterface {
  movies: MoviePreviewTypes[];
  selectedMovie: Partial<SelectedMovieTypes>;
  spinning: boolean;
  error?: string;
}

const initialState: MoviesStateInterface = {
  movies: [],
  selectedMovie: {},
  spinning: false,
};

export const moviesSlice = createSlice({
  name: 'MOVIES',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<MoviePreviewTypes[]>) {
      state.movies = action.payload;
    },
    setSelectedMovie(state, action: PayloadAction<SelectedMovieTypes>) {
      state.selectedMovie = action.payload;
    },
    setSpinningOn(state) {
      state.spinning = true;
    },
    setSpinningOff(state) {
      state.spinning = false;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;