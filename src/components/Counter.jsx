import React, { useState } from "react";

export const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1>Jumlah klik: {clickCount}</h1>
      <button onClick={handleClick}>Klik</button>
    </div>
  );
};

export const App = ({ clickCount }) => {
  return (
    <div>
      <h1>Judul: {clickCount}</h1>
      <ClickCounter clickCount={clickCount} />
    </div>
  );
};