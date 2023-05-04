import React, { useState } from 'react';

import './style.css';

export function Exercise4() {
  const [givenNumberA, setAGivenNumber] = useState(0);
  const [givenNumberB, setBGivenNumber] = useState(0);
  const [text, setText] = useState('');

  const handleChangeA = (event) => {
    const newValueA = Number(event.target.value);
    setAGivenNumber(newValueA);
    setBGivenNumber(0);

    method(newValueA, givenNumberB);
  };

  const handleChangeB = (event) => {
    const newValueB = Number(event.target.value);
    setBGivenNumber(newValueB);
    setAGivenNumber(0);

    method(givenNumberA, newValueB);
  };

  function method(newValueA, newValueB) {
    if (newValueA === newValueB) {
      setText('A i B są równe');
    } else if (newValueA > newValueB) {
      setText('A jest większe');
    } else {
      setText('B jest większe');
    }
  }

  return (
    <div>
      <h1>Czy A jest większe od B? </h1>
      <input type="number" onChange={handleChangeA} value={givenNumberA} />
      <br />
      <input type="number" onChange={handleChangeB} value={givenNumberB} />
      <p>Odpowiedź: {text} </p>
    </div>
  );
}
