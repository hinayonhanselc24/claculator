import React, { useState } from 'react';
import './Calculator.css'; // Import the CSS file

const Row = ({ id, onValueChange, onRemove }) => {
  const [value, setValue] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [sign, setSign] = useState('+');

  const handleValueChange = (e) => {
    const inputValue = e.target.value;
    setValue(Number(inputValue));
    onValueChange(id, enabled ? Number(inputValue) : 0, sign);
  };

  const handleSignChange = () => {
    const newSign = sign === '+' ? '-' : '+';
    setSign(newSign);
    onValueChange(id, enabled ? value : 0, newSign);
  };

  const toggleEnabled = () => {
    setEnabled(!enabled);
    onValueChange(id, !enabled ? value : 0, sign);
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
      />
      <button onClick={toggleEnabled} className="row-button">
        {enabled ? 'Disable' : 'Enable'}
      </button>
      <button onClick={() => onRemove(id)} className="row-button">Remove</button>
    </div>
  );
};

export default Row;
