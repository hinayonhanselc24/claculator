import React, { useState } from 'react';
import './Calculator.css';

const Row = ({ id, onValueChange, onRemove }) => {
  const [value, setValue] = useState(''); // Start with an empty string
  const [enabled, setEnabled] = useState(true);
  const [sign, setSign] = useState('+');

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue); // Set the input value directly as a string
    onValueChange(id, enabled && inputValue !== '' ? Number(inputValue) : 0, sign); // Pass 0 if input is empty
  };

  const handleSignChange = () => {
    const newSign = sign === '+' ? '-' : '+';
    setSign(newSign);
    onValueChange(id, enabled && value !== '' ? Number(value) : 0, newSign); // Pass 0 if value is empty
  };

  const toggleEnabled = () => {
    setEnabled(!enabled);
    onValueChange(id, !enabled ? (value !== '' ? Number(value) : 0) : 0, sign); // Pass 0 if value is empty
  };

  return (
    <div className="row-container">
      <button onClick={handleSignChange} className="row-button">
        {sign}
      </button>
      <input
        type="number"
        value={value} // Controlled input
        onChange={handleValueChange}
        disabled={!enabled}
        placeholder="" // No placeholder
      />
      <button onClick={toggleEnabled} className="row-button">
        {enabled ? 'Disable' : 'Enable'}
      </button>
      <button onClick={() => onRemove(id)} className="row-button">Remove</button>
    </div>
  );
};

export default Row;
