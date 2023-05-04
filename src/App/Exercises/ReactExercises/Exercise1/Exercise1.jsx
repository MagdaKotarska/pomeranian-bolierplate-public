import React, { useState } from 'react';

import './style.css';

export function Exercise1() {
  const [clics, setClics] = useState(1);
  const [text, setText] = useState('start');

  const handleClick = () => {
    if (clics < 5) {
      setClics(clics + 1);
      setText('ilość kliknięć:' + clics);
    } else {
      setText('osiągnięto 5 kliknięć');
    }
  };

  return (
    <div>
      <p>{text}</p>
      <button className="button1" onClick={handleClick}>
        Click!
      </button>
    </div>
  );
}
