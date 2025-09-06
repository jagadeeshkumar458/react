import React, { useReducer } from "react";

type CounterState = {
    count: number
}

// DISCRIMINATED UNIONS
type CounterAction = UpdateAction | ResetAction

type UpdateAction = {
    type: "Increment" | "Decrement"
    payload: number
}

type ResetAction = {
    type: "Reset"
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
    case "Reset":
      return initialState
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
      <button onClick={() => dispatch({type: "Reset"})}>Reset</button>    </div>
  );
}

export default Counter;
