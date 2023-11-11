import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MoviePreview } from '../components/MoviePreview';
import { MoviePreviewTypes } from '../types';
import { localLoadSerialize } from '../utils';

export const FavoritesPage: FC = () => {
  const favorites = localLoadSerialize<MoviePreviewTypes[]>('favorites', []);

  return (
    <div className="favorites-page">
      <div className="favorites-list">
        {favorites.map((favorite) => (
          <Link key={favorite.imdbID} to={`/movies/${favorite.imdbID}`}>
            <MoviePreview {...favorite} />
          </Link>
        ))}
      </div>
    </div>
  );
};