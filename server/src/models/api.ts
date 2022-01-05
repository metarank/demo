/* eslint-disable new-cap */
import { Static, Type } from '@sinclair/typebox';

export const IIDModel = Type.Object({ id: Type.Number() });
export type IIDType = Static<typeof IIDModel>;

export const GetMoviesQuerystringParams = Type.Object({
  user: Type.String(),
  session: Type.String(),
  limit: Type.Optional(Type.Number()),
  tag: Type.Optional(Type.String()),
});

export const ClickBodyParams = Type.Object({
  user: Type.String(),
  session: Type.String(),
  item: Type.String(),
  ranking: Type.String(),
});

export type GetMoviesQuerystringParamsType = Static<typeof GetMoviesQuerystringParams>;

export type ClickBodyParamsType = Static<typeof ClickBodyParams>;

export default {
  IIDModel,
  GetMoviesQuerystringParams,
  ClickBodyParams,
};
