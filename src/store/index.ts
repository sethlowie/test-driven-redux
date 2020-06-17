import { createStore, Store } from "redux";

export const makeStore = (): Store => {
  return createStore(() => {
    return {};
  });
};
