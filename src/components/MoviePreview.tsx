import { Card, Image } from 'antd';
import { FC, memo } from 'react';

import { MoviePreviewTypes } from '../types';

type PropsTypes = MoviePreviewTypes;

export const MoviePreview: FC<PropsTypes> = memo(({ Title, Year, Poster }) => {
  const cover = (
    <div className="movie-preview__img">
      <Image height="100%" src={Poster} preview={false} />
    </div>
  );

  return (
    <Card hoverable style={{ width: 240 }} cover={cover}>
      <Card.Meta title={Title} description={`Год выпуска: ${Year}`} />
    </Card>
  );
});
