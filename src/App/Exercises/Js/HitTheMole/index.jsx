import './styles.css';
import { useState } from 'react';
import { Button } from './Button';

export const HitTheMole = () => {
  const [time, setTime] = useState(3);
  const [moles, setMoles] = useState(1);

  function button1() {
    setTime(1);
  }

  return (
    <div className="hit-the-mole">
      <h4>Kret</h4>
      <p>
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="settings-container">
        <div className="label">Czas gry</div>
        <Button isActive={time === 1} onClick={button1}>
          1 minuta
        </Button>
        <Button
          isActive={time === 2}
          onClick={() => {
            setTime(2);
          }}
        >
          2 minuty
        </Button>
        <Button isActive={time === 3}>3 minuty</Button>
      </div>
      <div className="settings-container">
        <div className="label">Czas gry</div>
        <Button>1 kret</Button>
        <Button>2 krety</Button>
        <Button>3 krety</Button>
      </div>
      <div className="settings-container">
        <div className="label">Przyciski sterujące</div>
        <Button>Start</Button>
      </div>
    </div>
  );
};
