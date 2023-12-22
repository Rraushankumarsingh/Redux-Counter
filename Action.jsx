import { INCREMENT, DECREMENT, RESET } from "./ActionType";

export const increment = (payload) => {
  return { type: INCREMENT, payload };
};
export const decrement = (payload) => {
  return { type: DECREMENT, payload };
};
export const reset = (payload) => {
  return { type: RESET, payload };
};
