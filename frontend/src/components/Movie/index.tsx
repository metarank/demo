import { useCallback } from 'react';
import * as Styled from './components';

export type Movie = {
  id: number,
  image_url: string,
  title: string,
}

export default ({
  id,
  image_url,
  title,
  onClick
}: Movie & {
  onClick?: (item: Movie) => void
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick({
      id,
      image_url,
      title,
    })
  }, [])
  return (
    <Styled.Wrap onClick={handleClick} disabled={!onClick}>
      <Styled.Container style={{ backgroundImage: `url(${image_url})` }}>

      </Styled.Container>
    </Styled.Wrap>
  );
}
