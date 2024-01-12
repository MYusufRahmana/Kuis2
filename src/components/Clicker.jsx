// src/components/Clicker.js
import React, { useState } from 'react';

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1 onClick={handleClick}>Jumlah Klik: {clickCount}</h1>
      <h2>Judul Website: {clickCount} Klik</h2>
    </div>
  );
};

export default Clicker;
