import { useCallback, useEffect, useState } from 'react';
import api from '../../lib/api';
import * as Styled from './components';
import MovieItem, { Movie } from '../../components/Movie'

export default () => {
  const [items, setItems] = useState<Movie[]>([]);
  const [cache, setCache] = useState<Movie[]>([]);

  useEffect(() => {
    api.get<Movie[]>('/movies').then((response) => setItems(response.data));
  }, []);

  const onClickItem = useCallback((item) => {
    setCache(c => [...c, item])
    api.get<Movie[]>(`/movies/${item.id}/similar`).then((response) => setItems(response.data));
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.Title>MetaRank</Styled.Title>
        <Styled.Description>
          Marketing slogan and description of metarank goes here
        </Styled.Description>
        <Styled.Description>
          Some words about demo and how it could be used are written here... <br /> two lines will be good!
        </Styled.Description>
      </Styled.Container>
      <Styled.ItemsList>
        {
          cache.map((item) =>
          <MovieItem
            key={item.id}
            {...item}
          />
          )
        }
      </Styled.ItemsList>
      <hr />
      <Styled.ItemsList>
        {
          items.map((item) =>
            <MovieItem
              key={item.id}
              onClick={onClickItem}
              {...item}
            />
          )
        }
      </Styled.ItemsList>
    </>
  );
}
