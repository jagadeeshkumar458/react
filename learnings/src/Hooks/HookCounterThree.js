import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  // SETSTATE WILL MERGE THE STATE BUT USESTATE HOOK SET OF FUNCTION WILL
  // NOT MERGE THE STATE YOU HAVE TO DO IT MANUALLY USING SPREAD OPERATOR

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <div>{name.firstName}</div>
      <div>{name.lastName}</div>
    </div>
  );
}

export default HookCounterThree;
