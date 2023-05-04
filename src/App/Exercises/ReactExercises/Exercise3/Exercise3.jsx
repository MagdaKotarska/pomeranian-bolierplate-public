import React, { useState } from 'react';

import './style.css';

export function Exercise3() {
  const [givenNumber, setGivenNumber] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newValue = Number(event.target.value);

    setGivenNumber(newValue);

    if (newValue > 100) {
      setText('Numer jest poza zasięgiem');
    } else if (newValue === 10) {
      setText('Numer jest równy 10');
    } else if (newValue > 10) {
      setText('Numer jest większy niż 10');
    } else {
      setText('Numer jest mniejszy niż 10');
    }
  };

  return (
    <div className="exercise-3">
      <h3>Czy podana liczba jest większa od 10?</h3>
      <input type="number" onChange={handleChange} value={givenNumber} />

      <p>{text}</p>
    </div>
  );
}
