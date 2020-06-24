import { createStore, Store, combineReducers } from "redux";
import session from "session";

export const makeStore = (): Store => {
  return createStore(
    combineReducers({
      session
    })
  );
};
