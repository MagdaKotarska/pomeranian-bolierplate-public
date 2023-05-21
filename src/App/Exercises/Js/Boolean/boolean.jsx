import './styles.css';
import React, { useState } from 'react';

export function Boolean() {
  const [givenNumber, setGivenNumber] = useState();
  const [text, setText] = useState('');

  const handleChange = (event) => {
    let newValue = Number(event.target.value);

    setGivenNumber(newValue);

    if (newValue >= 1 && newValue <= 10 && newValue % 2 === 0) {
      let pole = newValue * newValue * Math.PI;
      setText(pole.toFixed(2));
    } else {
      setText('Wartość nie jest z zakresu od 1 do 10 i nie jest parzysta');
    }
  };

  return (
    <div>
      <h3>wpisz jakąś liczbę</h3>
      <input type="number" onChange={handleChange} value={givenNumber} />

      <p>{text}</p>
    </div>
  );
}
