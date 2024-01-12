// src/components/NameForm.js
import React, { useState } from 'react';

const NameForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Nama:
          <input type="text" value={name} onChange={handleChange} />
        </label>
      </form>
      <h3>Nama Anda: {name}</h3>
    </div>
  );
};

export default NameForm;
