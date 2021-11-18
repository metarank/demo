import { useCallback, useEffect, useState } from 'react';
import api from '../../lib/api';
import * as Styled from './components';
import MovieItem from '../../components/Movie'
import { MovieResponseType, MovieType } from '../../../../server/src/models/movie';
import Dropdown from '../../components/Utils/Dropdown';

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

  const onClickDropdown = useCallback((tag: string) => {
    api.get<MovieResponseType>(`/movies?tag=${tag}`).then((response) => setItems(response.data));
  }, [])

  return (
    <>
      <Styled.Container>
        <Styled.Title>Metarank</Styled.Title>
        <Styled.Description>
          <a href='https://github.com/metarank' title='Metarank'>Metarank</a> is a toolbox for building personalized experience of displaying any entities. It allows you to work both in offline (building the model using data that you already have) and online (using the live event stream) modes.
        </Styled.Description>
        <Styled.Description>
          This demo is built using the <a href='https://github.com/metarank/ranklens' title='Ranklens'>Ranklens</a> dataset and utilizes both capabilities of Metarank.
          <br />
          You can select one of the tags (or get a random one) to see the personalized selection of movies. The actions you take will diretly affect the result you see, as well as the features that are computed in real-time by Metarank.
          <br />
          We automatically generate a unique user ID and store it in local storage, so you can compare you personalized results with default ones in incognito mode of the browser.
          <br />
          Don't hesitate to reach out to us if you have any questions or are interested in how Metarank can solve your problems!
        </Styled.Description>
      </Styled.Container>
      <Styled.Container>
        <Dropdown onSelect={onClickDropdown} />
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
