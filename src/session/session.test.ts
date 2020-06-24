import { Dispatch } from "redux";
import { makeStore } from "store";

import { sessionSelector } from "./selectors";
import { login } from "./actions";

const successfulLogin = () => Promise.resolve({ jwt: "token" });
const badLogin = () => Promise.reject({ message: "bad credentials" });

describe("session", () => {
  let getState: () => any;
  let dispatch: Dispatch;

  beforeEach(() => {
    const store = makeStore();
    getState = store.getState;
    dispatch = store.dispatch;
  });

  it("should start with no session", () => {
    const session = sessionSelector(getState());

    expect(session).toBeNull();
  });

  it("should set the session on successful login", () => {
    let session = sessionSelector(getState());

    expect(session).toBeNull();

    return login("admin@waffles.co", "i_like_waffles")(dispatch, getState, {
      req: successfulLogin
    }).then(() => {
      session = sessionSelector(getState());
      expect(session).not.toBeNull();
    });
  });

  it("should remain null with bad login", () => {
    let session = sessionSelector(getState());

    expect(session).toBeNull();

    return login("admin@waffles.co", "i_like_waffles")(dispatch, getState, {
      req: badLogin
    }).then(() => {
      session = sessionSelector(getState());
      expect(session).toBeNull();
    });
  });
});
