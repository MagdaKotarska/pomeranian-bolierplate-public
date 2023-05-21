import './style.css';
import React, { useState } from 'react';

export function EmptyValuesAndComments() {
  /*Exercise1*/
  let str = 'ala_ma_kota_a_tomek_ma_psa';
  str = str.replace(/_/g, ' ');
  str = str.charAt(0).toUpperCase() + str.slice(1);
  str += '.';
  /*Exercise2*/
  let x = '1080px';
  let y = '1920px';

  const CalculatePixels = (number1, number2) => {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    const totalResult = number1 * number2;
    return totalResult + ' px';
  };
  /*Exercise3*/
  console.log(typeof 123);
  console.log(typeof 'abc');
  console.log(typeof true);
  console.log(typeof null);
  console.log(typeof undefined);
  /*Exercise4*/
  const [text, setText] = useState('');

  const handleInput = (event) => {
    let input = event.target.value;
    let value = input.toLowerCase();

    if (value.includes('kurde')) {
      event.target.value = input.replaceAll('kurde', 'kurczę');
      setText('Ostrzeżenie niewłaściwe słowo!');
    } else {
      setText('');
    }
  };

  return (
    <div>
      <div> {str} </div>
      <div>{CalculatePixels(x, y)}</div>
      <div>
        <input type="text" onInput={handleInput} placeholder="Wpisz tekst" />
        <p>{text}</p>
      </div>
    </div>
  );
}
