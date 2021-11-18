import { useCallback } from 'react';
import * as Styled from './components';
import { MovieType } from '../../../../server/src/models/movie';

function getImageUrl(item: MovieType): string {
  return item && item.poster || '';
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
      </Styled.Container>
    </Styled.Wrap>
  );
}
