import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  // USEEFFECT RUNS AFTER EVERY RENDER
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;
