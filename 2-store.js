import { createStore } from "redux";

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// action
const incrementAction = { type: INCREMENT }; // type is required

// action creator
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    const value = state.value + 1;
    return { value };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);
console.log(store);
