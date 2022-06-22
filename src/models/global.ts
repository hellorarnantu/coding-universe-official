import { createModel } from '@rematch/core';
import { RootModel } from '.';

export const global = createModel<RootModel>()({
  state: {},
  reducers: {},
});
