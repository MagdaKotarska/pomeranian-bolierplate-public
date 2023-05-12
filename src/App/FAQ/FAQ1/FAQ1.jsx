import React, { useState } from 'react';
import { ArrowIcon } from '/home/magdakotarska/projects/pomeranian-bolierplate-public/src/App/Components/Icons/ArrowIcon';
import './styles.css';

export const FAQ1 = ({ question, answer }) => {
  const [answerVisibility, setAnswerVisibility] = useState(false);
  const toggleVisibility = () => {
    setAnswerVisibility(!answerVisibility);
  };
  const arrowIconRotatedClass = 'arrow-icon-rotated';
  const isArrowIconRotated = !answerVisibility;

  return (
    <div className="faq1">
      <div className="question" onClick={toggleVisibility}>
        <ArrowIcon
          className={`arrow-icon ${
            isArrowIconRotated ? arrowIconRotatedClass : ''
          }`}
        />
        {question}
      </div>
      {answerVisibility && <div className="answer">{answer}</div>}
    </div>
  );
};
