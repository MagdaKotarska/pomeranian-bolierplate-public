import React, { useState } from 'react';
import './styles.css';

export const WelcomeView = () => {
  const [inputValue, setInput] = useState('');
  const [charactersInput, setCharactersInput] = useState();

  function getInputValue(parametr) {
    setInput(parametr.target.value);
  }

  function buttonClicked() {
    setCharactersInput(inputValue.length);
  }

  return (
    <div className="welcome">
      <h2 className="welcome-title">Cześć!</h2>
      <div className="welcome-left">
        <p>Wpisz tekst</p>
        <input
          type="text"
          placeholder="tekst do wpisania"
          onChange={(e) => getInputValue(e)}
        />
        <button onClick={(e) => buttonClicked()}>KLIKNIJ</button>
      </div>
      <div className="welcome-right">Placeholder:{inputValue}</div>
      <div className="number-letters">Ilosc liter:{charactersInput}</div>
    </div>
  );
};
