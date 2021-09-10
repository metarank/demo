import { Static, Type } from '@sinclair/typebox';

export const IIDModel = Type.Object({ id: Type.Number() });
export type IIDType = Static<typeof IIDModel>;

export default {
  IIDModel,
};
