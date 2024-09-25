import React, { useState } from 'react';
import './Calculator.css';

const Row = ({ id, onValueChange, onRemove }) => {
  const [value, setValue] = useState(''); 
  const [enabled, setEnabled] = useState(true);
  const [sign, setSign] = useState('+');

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue); 
    onValueChange(id, enabled && inputValue !== '' ? Number(inputValue) : 0, sign);
  };

  const handleSignChange = () => {
    const newSign = sign === '+' ? '-' : '+';
    setSign(newSign);
    onValueChange(id, enabled && value !== '' ? Number(value) : 0, newSign); 
  };

  const toggleEnabled = () => {
    setEnabled(!enabled);
    onValueChange(id, !enabled ? (value !== '' ? Number(value) : 0) : 0, sign);
  };

  return (
    <div className="row-container">
      <button onClick={handleSignChange} className="row-button">
        {sign}
      </button>
      <input
        type="number"
        value={value}
        onChange={handleValueChange}
        disabled={!enabled}
        placeholder=""
      />
      <button onClick={toggleEnabled} className="enabling-button">
        {enabled ? 'Disable' : 'Enable'}
      </button>
      <button onClick={() => onRemove(id)} className="delete-button">Delete</button>
    </div>
  );
};

export default Row;
