import React, { useReducer } from "react";

type CounterState = {
    count: number
}

type CounterAction = {
    type: string
    payload: number
}

const initialState = {
  count: 0,
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: "Increment", payload: 10})}>Increment</button>
      <button onClick={() => dispatch({type: "Decrement", payload: 10})}>Decrement</button>
    </div>
  );
}

export default Counter;
