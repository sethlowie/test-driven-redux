import { SET_SESSION } from "./types";

export const sessionReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case SET_SESSION:
      return action.payload;

    default:
      return state;
  }
};
