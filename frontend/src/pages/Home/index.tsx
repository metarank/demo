import { useCallback, useEffect, useState } from 'react';
import api from '../../lib/api';
import * as Styled from './components';
import MovieItem from '../../components/Movie'
import { MovieResponseType, MovieType } from '../../../../server/src/models/movie';

export default () => {
  const [response, setItems] = useState<MovieResponseType>();
  const [cache, setCache] = useState<MovieType[]>([]);

  useEffect(() => {
    api.get<MovieResponseType>('/movies').then((response) => setItems(response.data));
  }, []);

  const onClickItem = useCallback((item: MovieType) => {
    setCache(c => [...c, item])
    api.get<MovieResponseType>(`/movies`).then((response) => setItems(response.data));
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
      <Styled.Container>
        <Styled.Description>
          Randomly selected category <b>{response?.tag}</b>
        </Styled.Description>
      </Styled.Container>
      <Styled.ItemsList>
        {
          cache?.map((item) =>
            <MovieItem
              key={item.id}
              item={item}
            />
          )
        }
      </Styled.ItemsList>
      <hr />
      <Styled.ItemsList>
        {
          response?.movies.map((item) =>
            <MovieItem
              key={item.id}
              onClick={onClickItem}
              item={item}
            />
          )
        }
      </Styled.ItemsList>
    </>
  );
}
