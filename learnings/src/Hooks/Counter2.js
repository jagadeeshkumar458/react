import React, { useState } from "react";
import useCounter from "./CustomHooks/useCounter";

function Counter2() {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  //   const reset = () => {
  //     setCount(0);
  //   };
  const [count, increment, decrement, reset] = useCounter(10, 10);
  return (
    <div>
      Count {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter2;
