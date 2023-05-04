import React, { useState } from 'react';

import './style.css';

export function Exercise2() {
  const [isVisible, setVisibility] = useState(false);
  const buttonLabel = isVisible ? 'Hide' : 'Show';

  const handleClick = () => {
    setVisibility(!isVisible);
  };

  return (
    <div className="exercise-2">
      <p>
        <button onClick={handleClick}>{buttonLabel}</button>
      </p>
      {isVisible ? (
        <h2>isVisible jest na TRUE</h2>
      ) : (
        <h2>isVisible jest na FALSE</h2>
      )}
      <hr />
      {isVisible && <h2>Tajny text</h2>}
    </div>
  );
}
