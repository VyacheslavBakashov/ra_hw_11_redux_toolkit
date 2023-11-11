import { moviesAPI } from '../../api';
import { moviesActions } from '../slices/movies';
import { AppThunkTypes } from '../store';

export const getMoviesByTitle = (payload: { s: string }): AppThunkTypes => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setSpinningOn());
      dispatch(moviesActions.setError());

      const { data } = await moviesAPI.getMoviesByTitle(payload);
      if (data.Error) {
        return dispatch(moviesActions.setError(data.Error));
      }
      dispatch(moviesActions.setMovies(data.Search));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(moviesActions.setSpinningOff());
    }
  };
};

export const getMovieByID = (payload: { i: string }): AppThunkTypes => {
  return async (dispatch) => {
    try {
      dispatch(moviesActions.setSpinningOn());

      const { data } = await moviesAPI.getMovieByID(payload);
      dispatch(moviesActions.setSelectedMovie(data));
    } catch (e) {
      console.error(e);
    } finally {
      dispatch(moviesActions.setSpinningOff());
    }
  };
};