import React, { useEffect, useState } from "react";

function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X - {X} Y - {Y}
    </div>
  );
}

export default HookMouse;
