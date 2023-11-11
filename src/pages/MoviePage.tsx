import { Button, Card, Spin } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { getMovieByID } from '../redux/thunks/movies';
import { MoviePreviewTypes } from '../types';
import { localLoadSerialize, localSaveSerialize } from '../utils';

export const MoviePage: FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [isFavorite, setIsFavorite] = useState(initIsFavorite());

  const dispatch = useAppDispatch();
  const { selectedMovie, spinning } = useAppSelector((state) => state.movies);
  const { Poster, Title, Year, Genre, Runtime, Director, Actors, imdbRating } = selectedMovie;

  function initIsFavorite() {
    const favorites = localLoadSerialize<MoviePreviewTypes[]>('favorites', []);
    return favorites.some((favorite) => favorite.imdbID === imdbID);
  }

  const onDeleteFavorite = () => {
    let favorites = localLoadSerialize<MoviePreviewTypes[]>('favorites', []);
    favorites = favorites.filter((favorite) => favorite.imdbID !== imdbID);
    localSaveSerialize('favorites', favorites);
    setIsFavorite(false);
  };

  const onAddFavorite = () => {
    let favorites = localLoadSerialize<MoviePreviewTypes[]>('favorites', []);
    favorites = favorites.concat({ imdbID, Poster, Title, Year } as MoviePreviewTypes);
    localSaveSerialize('favorites', favorites);
    setIsFavorite(true);
  };

  useEffect(() => {
    imdbID && dispatch(getMovieByID({ i: imdbID }));
  }, [imdbID, dispatch]);

  const descriptions = (
    <ul>
      <li>
        Год выпуска: <b>{Year}</b>
      </li>
      <li>
        Жанр: <b>{Genre}</b>
      </li>
      <li>
        Продолжительность: <b>{Runtime}</b>
      </li>
      <li>
        Режиссер: <b>{Director}</b>
      </li>
      <li>
        Актеры: <b>{Actors}</b>
      </li>
      <li>
        Рейтинг: <b>{imdbRating}</b>
      </li>
    </ul>
  );

  return spinning ? (
    <Spin spinning />
  ) : (
    <Card style={{ display: 'flex' }} cover={<img style={{ width: 240 }} src={Poster} alt='img' />}>
      <Card.Meta title={Title} description={descriptions} style={{ marginBottom: 50 }} />
      {isFavorite ? (
        <Button onClick={onDeleteFavorite}>Удалить из избранного</Button>
      ) : (
        <Button type="primary" onClick={onAddFavorite}>
          Добавить в избранное
        </Button>
      )}
    </Card>
  );
};