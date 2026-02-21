import React from "react";

function Title() {
  console.log("Title component render");
  return <div>Title</div>;
}

export default React.memo(Title);
