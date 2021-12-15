import { useCallback } from 'react';
import * as Styled from './components';
import { MovieType } from '../../../../server/src/models/movie';

function getImageUrl(item: MovieType): string {
  return item && item.poster || '';
}

export default ({
  item,
  id,
  onClick
}: {
  item: MovieType,
  id?: string,
  onClick?: (id: string, item: MovieType) => Promise<void>
}) => {
  const handleClick = useCallback(() => {
    onClick && id && onClick(id, item)
  }, [])
  return (
    <Styled.Wrap onClick={handleClick} disabled={!onClick}>
      <Styled.Container style={{ backgroundImage: `url(${getImageUrl(item)})` }}>
        {id && item.features.map((m) => <div>{m.name || m.names?.join(',')}: {m.values?.join(',') || m.value}</div>)}
      </Styled.Container>
    </Styled.Wrap>
  );
}
