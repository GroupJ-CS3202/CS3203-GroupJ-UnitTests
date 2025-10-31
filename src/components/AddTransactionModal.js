// this shows transactions
import React, { useState } from 'react';

function AddTransactionModal({ onSave, onCancel }) {
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = () => {
    if (!amount || !desc) return alert('Please fill in all fields');
    onSave(type, parseFloat(amount), desc);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Transaction</h3>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AddTransactionModal;
