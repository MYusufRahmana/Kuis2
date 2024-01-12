// src/components/Identity.js
import React from 'react';

const Identity = (props) => {
  const { name, npm, github } = props;

  return (
    <div>
      <h3>Nama: {name}</h3>
      <p>NPM: {npm}</p>
      <p>Github: {github}</p>
    </div>
  );
};

export default Identity;
