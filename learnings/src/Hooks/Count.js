import React from "react";

function Count({ text, count }) {
  console.log("Count component render");
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
