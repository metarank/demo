type MetarankRankItem = { id: string, relevancy: number };

type MetarankRankRequest = {
  event: 'ranking',
  fields: [],
  id: string,
  items: MetarankRankItem[],
  session: string,
  user: string,
  tenant: 'default',
  timestamp: number
};

type MetarankRankResponseFeature = {
  name: string,
  names: string[],
  value: number,
  values: number[]
};

type MetarankRankResponseItem = {
  item: string,
  score: number,
  features: MetarankRankResponseFeature[]
};

type MetarankRankResponse = {
  items: MetarankRankResponseItem[]
};

type MetarankClickRequest = {
  event: 'interaction',
  fields: [],
  id: string,
  item: string,
  ranking: string,
  session: string,
  user: string,
  timestamp: number,
  type: 'click',
  tenant: 'default'
};

type MetarankRankFeedbackRequest = {
  event: 'ranking',
  fields: [],
  id: string,
  session: string,
  user: string,
  timestamp: number,
  tenant: 'default',
  items: MetarankRankItem[]
};
