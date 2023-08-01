import { BOOK } from "./actionTypes";

export const book = (value) => {
  return {
    type: BOOK,
    payload: value,
  };
};
