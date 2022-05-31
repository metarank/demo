import axios from 'axios';
import { MovieDataStorageModelType } from '../models/movie';
import { v4 } from 'uuid';

const METARANK_URL = process.env.METARANK_URL || '';

// specify the model name from your Metarank YAML configuration file
// by default the model name from Ranklens is used
const MODEL_NAME = process.env.MODEL_NAME || 'xgboost';

export async function rank(user: string, session: string, id: string, items: MovieDataStorageModelType): Promise<MovieDataStorageModelType> {
  const data: MetarankRankRequest = {
    event: 'ranking',
    fields: [],
    id,
    items: items.map((m) => ({ id: m.id.toString(), relevancy: 0 })),
    session,
    user,
    tenant: 'default',
    timestamp: +Date.now(),
  };

  const response = await axios.post<MetarankRankResponse>(`${METARANK_URL}/rank/${MODEL_NAME}?explain=true`, data);

  const personalizationResponse = response.data;

  const result = personalizationResponse.items.map((item) => {
    const movie = items.find((f) => f.id.toString() === item.item);

    if (!movie) {
      throw new Error('personalzed movie not found');
    }

    movie.personalization_score = item.score;
    movie.features = item.features;

    return movie;
  });

  return result;
}

export async function click(user: string, session: string, ranking: string, item: string): Promise<void> {
  const id = v4();

  const data: MetarankClickRequest = {
    event: 'interaction',
    fields: [],
    id,
    item,
    ranking,
    session,
    user,
    timestamp: +Date.now(),
    type: 'click',
    tenant: 'default',
  };

  await axios.post(`${METARANK_URL}/feedback`, data);
}

export async function rankFeedback(user: string, session: string, ranking: string, items: MetarankRankItem[]): Promise<void> {
  const data: MetarankRankFeedbackRequest = {
    id: ranking,
    user,
    session,
    items,
    timestamp: +Date.now(),
    fields: [],
    tenant: 'default',
    event: 'ranking',
  };

  await axios.post(`${METARANK_URL}/feedback`, data);
}

export default { rank };