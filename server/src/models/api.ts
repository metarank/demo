import { Static, Type } from '@sinclair/typebox';

export const IIDModel = Type.Object({ id: Type.Number() });
export type IIDType = Static<typeof IIDModel>;

export const GetMoviesQuerystringParams = Type.Object({
  // eslint-disable-next-line new-cap
  limit: Type.Optional(Type.Number()),
  // eslint-disable-next-line new-cap
  tag: Type.Optional(Type.String()),
});
export type GetMoviesQuerystringParamsType = Static<typeof GetMoviesQuerystringParams>;

export default {
  IIDModel,
  GetMoviesQuerystringParams,
};
