import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // USEEFFECT RUNS AFTER EVERY RENDER
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;
