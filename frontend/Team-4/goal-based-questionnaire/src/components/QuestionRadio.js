// src/components/QuestionRadio.js

import React from 'react';

function QuestionRadio({ options, onChange, selectedOption }) {
  return (
    <form className="question-form">
  {options.map((option, index) => (
    <label key={index} className="option-label">
      <input
        type="radio"
        name="option"
        value={option}
        checked={selectedOption === option}
        onChange={() => onChange(option)}
      />
      <span>{option}</span> {/* Use span to ensure consistency with draggable items */}
    </label>
  ))}
</form>

  );
}

export default QuestionRadio;
