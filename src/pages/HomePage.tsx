import { Button, Empty, Form, Input, Spin } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MoviePreview } from '../components/MoviePreview';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getMoviesByTitle } from '../redux/thunks/movies';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const { movies, spinning, error } = useAppSelector((state) => state.movies);

  const onSearchMovies = (v: { s: string }) => {
    dispatch(getMoviesByTitle(v));
  };

  const content = error ? (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Фильмы не найдены" />
  ) : (
    movies.map((movie) => (
      <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
        <MoviePreview {...movie} />
      </Link>
    ))
  );

  return (
    <div className="home-page">
      <Form onFinish={onSearchMovies} layout="inline">
        <Form.Item name={'s'}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Поиск
        </Button>
      </Form>
      <div className="movies-list">{spinning ? <Spin spinning /> : content}</div>
    </div>
  );
};