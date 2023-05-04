import React, { useState } from 'react';

import './style.css';

export function Exercise5() {
  const [givenNumber, setGivenNumber] = useState(0);
  const [givenNumberA, setGivenNumberA] = useState(0);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setGivenNumber(newValue);

    if (newValue === givenNumberA) {
      setText('Gratulacje trafiłeś!');
    } else if (newValue < givenNumberA) {
      setText('jestem mniejsza');
    } else {
      setText('jestem większa');
    }
  };

  function buttonClicked() {
    //losuje liczbę od 0 do 1 i mnożymy przez 10 co daje liczbę od 0 do 10
    setGivenNumberA(Math.floor(Math.random() * 10));
    setGivenNumber(0);
  }

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <button onClick={(e) => buttonClicked()}>START</button>
      <br />
      <input onChange={handleChange} value={givenNumber}></input>
      <p>{text}</p>
      <button onClick={(e) => buttonClicked()}>RESET</button>
    </div>
  );
}
