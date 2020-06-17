import { makeStore } from "store";

const sessionSelector = (state: any) => {
  return state.session;
};

describe("session", () => {
  it("should start with no session", () => {
    const store = makeStore();

    const session = sessionSelector(store.getState());

    expect(session).toBeUndefined();
  });
});
