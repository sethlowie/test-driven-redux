import { SetSession, SET_SESSION } from "./types";
import { Dispatch } from "redux";

// SET SESSION
export const setSession = (session: any): SetSession => ({
  type: SET_SESSION,
  payload: session
});

// LOGIN
const loginEndpoint = (email: string, password: string) => ({
  url: "/session",
  body: {
    email,
    password
  }
});

const loginError = (dispatch: Dispatch) => (err: string) => {
  dispatch({
    type: "NOTIFY",
    payload: err
  });
};

const loginSuccess = (dispatch: Dispatch) => (session: any) => {
  dispatch(setSession(session));
};

export const login = (email: string, password: string): Thunk => (
  dispatch,
  _,
  { req }
) =>
  req(loginEndpoint(email, password))
    .then(loginSuccess(dispatch))
    .catch(loginError(dispatch));

type Extra = {
  req: (endpoint: Object) => Promise<any>;
};

type Thunk = (
  dispatch: Dispatch,
  getState: () => any,
  extra: Extra
) => Promise<any>;
