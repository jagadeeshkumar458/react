import React, { useMemo, useState } from "react";

function Counter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const isEven = useMemo(() => {
    console.log("isEven function called");
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={() => setCounterOne(counterOne + 1)}>
        Count One - {counterOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={() => setCounterTwo(counterTwo + 1)}>
        Count Two - {counterTwo}
      </button>
    </div>
  );
}

export default Counter;
