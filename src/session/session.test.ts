import { createStore, Store } from "redux";

const makeStore = (): Store => {
  return createStore(() => {
    return {};
  });
};

const makeTestStore = () => {
  const store = makeStore();
  return {
    get: (fn: any) => fn(store.getState())
  };
};

describe("session", () => {
  it("should start with no session", () => {
    const store = makeTestStore();

    const session = store.get((state: any) => state.session);

    expect(session).toBeUndefined();
  });
});
