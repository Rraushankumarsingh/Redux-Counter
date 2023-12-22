import { INCREMENT, DECREMENT, RESET } from "./ActionType";

let initialvalue = { count: 0 };
export const Reducer = (store = initialvalue, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...store, count: store.count + action.payload };
    }
    case DECREMENT: {
      return { ...store, count: store.count - action.payload };
    }
    case RESET: {
      // console.log('Reset Action Dispatched. New Value:', action.payload);
      return { ...store, count:action.payload };
    }
    default:
      return store;
  }
};
