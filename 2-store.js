import { bindActionCreators, createStore } from "redux";

const initialState = { value: 0 };

const INCREMENT = "INCREMENT";
const ADD = "ADD";

// action
const incrementAction = { type: INCREMENT }; // type is required

// action creator
const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
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

//const subscriber = () => console.log('SUBSCRIBER' + store.getState());
const subscriber = () =>
  console.log("SUBSCRIBER: " + JSON.stringify(store.getState(), null, 2));
store.subscribe(subscriber);

const actions = bindActionCreators({ increment, add }, store.dispatch);
// console.log(actions)
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(add(1000));

actions.increment();
actions.increment();
actions.add(1004);
