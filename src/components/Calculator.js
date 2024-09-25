import React, { useState } from 'react';
import Row from './Row';
import './Calculator.css';

const Calculator = () => {
  const [rows, setRows] = useState([{ id: 1, value: 0, sign: '+' }]);
  const [total, setTotal] = useState(0);

  const handleValueChange = (id, value, sign) => {
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, value: value, sign: sign } : row
    );
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  const addRow = () => {
    const newRow = { id: Date.now(), value: 0, sign: '+' };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
    calculateTotal(updatedRows);
  };

  const calculateTotal = (updatedRows) => {
    const sum = updatedRows.reduce((acc, row) => {
      const valueToAdd = row.sign === '+' ? row.value : -row.value;
      return acc + valueToAdd;
    }, 0);
    setTotal(sum);
  };

  return (
    <div className="calculator-container">
      <h1>Calculator using React </h1>
      {rows.map(row => (
        <Row
        key={row.id}
        id={row.id}
        onValueChange={handleValueChange}
        onRemove={removeRow}
        />
      ))}
      <button onClick={addRow} className="add-row-button">Add Row</button>
      <h2 className="total">Total: {total}</h2>
    </div>
  );
};

export default Calculator;
