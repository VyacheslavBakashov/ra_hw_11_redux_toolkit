import axios, { AxiosResponse } from 'axios';

import { SelectedMovieTypes } from '../types';

const baseHost = axios.create({ baseURL: 'https://www.omdbapi.com/?apikey=64405bd2' });

export const moviesAPI = {
  async getMoviesByTitle(params: { s: string }) {
    const res = await baseHost.get('', { params });
    return res;
  },
  async getMovieByID(params: { i: string }) {
    const res: AxiosResponse<SelectedMovieTypes> = await baseHost.get('', { params });
    return res;
  },
};