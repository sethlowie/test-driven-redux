export const LOGIN = "LOGIN";
export const SET_SESSION = "SET_SESSION";

export interface Login {
  type: typeof LOGIN;
  payload: {
    email: string;
    password: string;
  };
}

export interface SetSession {
  type: typeof SET_SESSION;
  payload: {};
}
