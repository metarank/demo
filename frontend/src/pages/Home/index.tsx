import { useCallback, useEffect, useState } from 'react';
import api from '../../lib/api';
import * as Styled from './components';
import MovieItem from '../../components/Movie'
import { MovieResponseType, MovieType } from '../../../../server/src/models/movie';
import Hero from '../../components/Hero';
import MovieTypes from '../../components/MovieTypes';
import tags from '../../assets/top_tags.json';

const user = (Math.random() + 1).toString(36).substring(7);
const session = (Math.random() + 1).toString(36).substring(7);

export default () => {
  const [response, setItems] = useState<MovieResponseType>();
  const [cache, setCache] = useState<MovieType[]>([]);
  const [category, setCategory] = useState<string>('');
  const [comparing, setComparing] = useState<boolean>(false);

  useEffect(() => {
    api.get<MovieResponseType>(`/movies?user=${user}&session=${session}`).then((response) => setItems(response.data));
  }, []);

  const onClickItem = useCallback(async (id: string, tag: string, item: MovieType) => {
    setCache(c => [...c, item]);

    await api.post(`/click`, { user, session, item: item.id.toString(), ranking: id });

    api.get<MovieResponseType>(`/movies?user=${user}&session=${session}&tag=${tag}`).then((response) => setItems(response.data));
  }, [])

  useEffect(() => {
    if (!category) return
    api.get<MovieResponseType>(`/movies?user=${user}&session=${session}&tag=${category}`).then((response) => setItems(response.data));
  }, [category])

  return (
    <>
      <Hero />
      <Styled.Container>
        <Styled.SubTitle>Personalized movies</Styled.SubTitle>
        
        <Styled.Note>
          <p>
            This demo is built using the <a href='https://github.com/metarank/ranklens' title='Ranklens'>Ranklens</a> dataset and utilizes both capabilities of Metarank.
            You can select one of the provided movie to see the a personalized selection of movies. The actions you take will diretly affect the result you see, as well as the features that are computed in real-time by <a href="https://github.com/metarank/metarank" title="Metarank">Metarank</a>.
          </p>
          <p>
            You can compare personalized results with non-personalized directly on the page.
            Don't hesitate to <a href="https://ov3hbl6ltfo.typeform.com/to/rAcsuhiu" title="reach out">reach out to us</a> if you have any questions or are interested in how Metarank can be applied to implement Machine Learning personalization in your case!
          </p>
        </Styled.Note>
  
        <MovieTypes options={tags} onSelect={setCategory} selected={category} />

        <Styled.Menu>
          <button onClick={() => setComparing(!comparing)}>
            Compare to IMDB
          </button>
        </Styled.Menu>
      </Styled.Container>
      <Styled.CompareContainer comparing={comparing}>
        <Styled.ItemsList comparing={comparing}>
          {
            response?.personalized_movies.map((item: any, index) =>
              <MovieItem
                key={item.id}
                index={index}
                item={item}
                onClick={() => onClickItem(response.id, response.tag, item)}
                id={response.id}
              />
            )
          }
        </Styled.ItemsList>
        {
          comparing &&
          <>
            <Styled.Divider />
            <Styled.ItemsList comparing={true}>
              {
                response?.movies.map((item: any) =>
                  <MovieItem
                    disabled
                    key={`static-${item.id}`}
                    item={item}
                  />
                )
              }
            </Styled.ItemsList>
          </>
        }
      </Styled.CompareContainer>
    </>
  );
}
