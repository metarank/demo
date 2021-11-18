import { useCallback } from 'react';
import * as Styled from './components';
import { MovieType } from '../../../../server/src/models/movie';

function getImageUrl(item: MovieType): string {
  const imageArray = item && item.images && (item.images.logos || item.images.backdrop);
  if (imageArray) {
    const images = imageArray.filter((f) => f.iso_639_1 === 'en').sort((a, b) => b.height - a.height);

    if (images && images.length > 0) {
      return `https://image.tmdb.org/t/p/original${images[0].file_path}`;
    }
  }

  return '';
}

export default ({
  item,
  onClick
}: {item: MovieType} & {
  onClick?: (item: MovieType) => void
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick(item)
  }, [])
  return (
    <Styled.Wrap onClick={handleClick} disabled={!onClick}>
      <Styled.Container style={{ backgroundImage: `url(${getImageUrl(item)})` }}>
        {item.title}
      </Styled.Container>
    </Styled.Wrap>
  );
}
