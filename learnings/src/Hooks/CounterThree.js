import React, { useReducer } from "react";

const InitialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return InitialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, InitialState);
  const [countTwo, dispatch2] = useReducer(reducer, InitialState);
  return (
    <div>
      <div>
        Count {count}
        <button onClick={() => dispatch("Increment")}>Increment</button>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
        <button onClick={() => dispatch("Reset")}>Reset</button>
      </div>
      <div>
        Count Two {countTwo}
        <button onClick={() => dispatch2("Increment")}>Increment</button>
        <button onClick={() => dispatch2("Decrement")}>Decrement</button>
        <button onClick={() => dispatch2("Reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
