import './styles.css';
import { useState } from 'react';

export function Array() {
  const [myList, setMyList] = useState(['Marcin', 'Ania', 'Piotrek', 'Grześ']);
  const nameStartingM = myList.filter((item) => item[0].toLowerCase() === 'm');

  console.log(nameStartingM);
  console.log(newPerson);

  return <div></div>;
}

const person = {
  name: 'Jan',
  age: 30,
  city: 'Gdańsk',
};

const newPerson = {
  name: 'Marcin',
  age: 25,
  address: {
    cities: ['Gdynia', 'Warsaw'],
  },
};
